import connection from "../postgresConnect.js"

export async function postCategoriesController(req, res) {

    const nameToInsert = req.body;

    try {
        const existCategory = await connection.query(`
            SELECT * 
            FROM categories 
            WHERE name = $1`, [nameToInsert.name]
        );

        if(existCategory.rowCount > 0){
            return res.sendStatus(409);
        }


        await connection.query(`
            INSERT INTO categories (name)
            VALUES ($1)
        `, [`${nameToInsert.name}`]);

        return res.sendStatus(201);

    } catch (e) {
        return res.status(500).send(e)
    }



}