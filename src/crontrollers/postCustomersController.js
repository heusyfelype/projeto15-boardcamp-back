import connection from "../postgresConnect.js"

export async function postCustomersController(req, res) {
    const customerToInsert = req.body;

    try {
        
        const existCustomer = await connection.query(`
            SELECT * 
            FROM customers 
            WHERE cpf = $1`, [customerToInsert.cpf]
        );
        if(existCustomer.rows.length > 0){
            return res.sendStatus(409);
        }

        await connection.query(`
            INSERT INTO customers (name, phone, cpf, birthday)
            VALUES ($1, $2, $3, $4)
        `, [`${customerToInsert.name}`, `${customerToInsert.phone}`, `${customerToInsert.cpf}`, `${customerToInsert.birthday}`]); 

        return res.sendStatus(201);

    } catch (e) {
        return res.status(500).send(e);
    }
}
