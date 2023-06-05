const database = require('./database');
const joi = require('joi');

module.exports = {
    getAll: async function (req, res, next) {
        const sql = "SELECT * FROM dishes;";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.error(err);
        }
    },

    addNew: async function (req, res, next) {
        const schema = joi.object({
            name: joi.string().required().min(2).max(100),
            description: joi.string().required().min(2).max(300),
            price: joi.number().required(),
            rating: joi.number().required(),
            image: joi.string().required(),
            categoryId: joi.number().required(),
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.error(error.details[0].message);
            res.status(400).json({ error: "invalid data" });
            return;
        }

        const sql = "INSERT INTO dishes(name, description, price, rating, image, categoryId)" +
            " VALUES(?,?,?,?,?,?);";

        try {
            const result = await database.query(sql, Object.values(value));
            res.json({ ...value, id: result.id });
        }
        catch (err) {
            console.error(err);
            res.status(400).json({ error: err });
        }
    }
}