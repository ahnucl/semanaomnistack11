const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response)  {
        const data = await connection('ongs').select('*');

        return response.json(data);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};