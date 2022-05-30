import connection from "../postgresConnect.js"

export async function getGamesController(req, res){
    
    const queryParams = req.query.name;
    

    try{

        console.log(queryParams)
        
        if(queryParams){
            const games = await connection.query(`
            SELECT *, categories.name as "categoryName" FROM games 
            JOIN categories ON games."categoryId" = categories.id
            WHERE games.name ILIKE $1`, [`${queryParams}%`]);

            return res.send(games.rows)
        }

        const games = await connection.query(`
            SELECT *, categories.name as "categoryName" FROM games 
            JOIN categories ON games."categoryId" = categories.id`);
        return res.send(games.rows)

    }catch(e){
        return res.status(500).send(e);
    }
}