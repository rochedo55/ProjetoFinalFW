const knex = require('../Database')
module.exports={
    async index(req,res){
        const data = await knex('devices')
        return res.json(data)
    },
    async show(req,res,next){
        const id = req.params.id
        try {
            const data = await knex('devices').where('id',id)
            return res.json(data)
        } catch (error) {
            next(error)
        }
    },
    async store(req,res,next){
        const {product_name,
               product_description,
               product_image_link,
               product_brand} = req.body
        try {
            const newDevice = await knex('devices').insert([{
                product_name,
                product_description,
                product_image_link,
                product_brand
            }])
            return res.json(newDevice)
        } catch (error) {
            next(error)
        }
    },
    async delete(req,res,next){
        const id = req.params.id
        try {
            const device = await knex('devices').where('id',id).del()
            return res.json({msg:"Is device deleted"})
        } catch (error) {
            next(error)
        }
    }
}