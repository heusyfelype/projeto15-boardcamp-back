import connection from "../postgresConnect.js"

export async function getRentalsController(req, res) {

    const customerId = req.query.customerId;
    const gameId = req.query.gameId;

    console.log("Customer ID: " + customerId, "Game Id: " + gameId);

    try {

        if (customerId && gameId) {
            console.log("&&")
            const rentals = await connection.query(`
                SELECT rentals.*, 
                json_build_object('id', customers.id, 'name', customers.name) AS customer, 
                json_build_object('id', games.id, 'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) As game
        
                FROM rentals 
                
                JOIN customers ON rentals."customerId" = customers.id
                JOIN games ON rentals."gameId" = games.id
                JOIN categories ON games."categoryId" = categories.id

                WHERE rentals."customerId" = ${customerId} AND rentals."gameId" = ${gameId}
            `)
            return res.send(rentals.rows);

        }

        if (customerId) {

            const rentals = await connection.query(`
                SELECT rentals.*, 
                json_build_object('id', customers.id, 'name', customers.name) AS customer, 
                json_build_object('id', games.id, 'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) As game
        
                FROM rentals 
                
                JOIN customers ON rentals."customerId" = customers.id
                JOIN games ON rentals."gameId" = games.id
                JOIN categories ON games."categoryId" = categories.id

                WHERE rentals."customerId" = ${customerId}
            `)
            return res.send(rentals.rows);
        }

        if (gameId) {
            const rentals = await connection.query(`
                SELECT rentals.*, 
                json_build_object('id', customers.id, 'name', customers.name) AS customer, 
                json_build_object('id', games.id, 'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) As game
        
                FROM rentals 
                
                JOIN games ON rentals."gameId" = games.id
                JOIN customers ON rentals."customerId" = customers.id
                JOIN categories ON games."categoryId" = categories.id

                WHERE rentals."gameId" = ${gameId}
            `)
            return res.send(rentals.rows);
        }



        const rentals = await connection.query(`
                SELECT rentals.*, 
                json_build_object('id', customers.id, 'name', customers.name) AS customer, 
                json_build_object('id', games.id, 'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) As game
        
                FROM rentals 
                
                JOIN games ON rentals."gameId" = games.id
                JOIN customers ON rentals."customerId" = customers.id
                JOIN categories ON games."categoryId" = categories.id
            `)
        return res.send(rentals);
    } catch (e) {
        return res.status(500).send(e);
    }
}