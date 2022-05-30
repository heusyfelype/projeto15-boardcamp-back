import connection from "../postgresConnect.js"

export async function postGamesController(req, res) {
    const gameToInsert = req.body;

    try {
        
        const existGame = await connection.query(`
            SELECT * 
            FROM games 
            WHERE name = $1`, [gameToInsert.name]
        );
        if(existGame.rows.length > 0){
            return res.sendStatus(409);
        }

        await connection.query(`
            INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay")
            VALUES ( $1, $2, $3, $4, $5)
        `, [`${gameToInsert.name}`, `${gameToInsert.image}`,  `${gameToInsert.stockTotal}`, `${gameToInsert.categoryId}`, `${gameToInsert.pricePerDay}`]); 

        return res.sendStatus(201);

    } catch (e) {
        return res.status(500).send(e);
    }
}
