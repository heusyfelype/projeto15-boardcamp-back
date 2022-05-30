import connection from "../postgresConnect.js";

export async function getCustomersWithIdController(req, res){
    const id = req.params.id;
    
    try{
        const clients = await connection.query('SELECT * FROM customers WHERE id=$1', [`${id}`]);
        
        if(clients.rowCount === 0){
            return res.sendStatus(404);
        }

        return res.send(clients.rows);
    }catch(e){
        return res.status(500).send(e);
    }
}