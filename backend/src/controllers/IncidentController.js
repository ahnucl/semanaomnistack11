const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query; //Valor padrão, caso não existe

        // const  count  = await connection('incidents').count('*'); // count retorna um ARRAY de OBJETOS
        //console.log(count);
        
        const [ count ] = await connection('incidents').count('*'); // count retorna um ARRAY de OBJETOS

        // programação funcional: tanto faz a ordem das operações
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')    
            .limit(5)
            .offset( (page-1) * 5 ) //pular registros
            .select(['incidents.*',
                     'ongs.name',
                     'ongs.email',
                     'ongs.whatsapp', 
                     'ongs.city', 
                     'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);

        // Se for assim o json tem que ser por último
        // return response.header('X-Total-count', count['count(*)']).json(retorno); // 
    },

    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: "Operation not permitted." }); // não autorizado - HTTP status code
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },

};