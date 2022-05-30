import connection from "../postgresConnect.js"

export async function postCustomersController(req, res) {
    const customerToInsert = req.body;
    console.log(customerToInsert);

    /*
        {
            name: 'João Alfredo',
            phone: '21998899222',
            cpf: '01234567890',
            birthday: '1992-10-05'
        }
    */


    try {
        
        const existCustomer = await connection.query(`
            SELECT * 
            FROM customers 
            WHERE cpf = $1`, [customerToInsert.cpf]
        );
        if(existCustomer.rows.length > 0){
            return res.sendStatus(409);
        }

        console.log("Tdo certo até aqui")
        await connection.query(`
            INSERT INTO customers (name, phone, cpf, birthday)
            VALUES ('${customerToInsert.name}', '${customerToInsert.phone}', '${customerToInsert.cpf}', '${customerToInsert.birthday}')
        `); // Depois tem que arrumar para evitar o Injection

        return res.sendStatus(201);

    } catch (e) {
        res.status(500).send(e);
    }
}
