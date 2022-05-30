import connection from "../postgresConnect.js";

export async function getCustomersController(req, res){
    const cpf = req.query.cpf;
    
    try{

        if(cpf){
            const clients = await connection.query('SELECT * FROM customers WHERE customers.cpf LIKE $1', [`${cpf}%`]);
            return res.send(clients.rows)
        }

        const clients = await connection.query('SELECT * FROM customers');

        return res.send(clients.rows);
    }catch(e){
        return res.status(500).send(e);
    }
}