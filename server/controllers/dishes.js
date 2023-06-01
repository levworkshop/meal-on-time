const database = require('./database');

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

    }
}