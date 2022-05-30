import connection from "../postgresConnect.js"

export async function putCustomersController(req, res) {
    const id = req.params.id;
    const infos = req.body;

    console.log(id, typeof id, infos)

    try{
        if(!id){
            return res.sendStatus(501);
        }

        const customer = await connection.query(`
            UPDATE customers SET name='${infos.name}', phone='${infos.phone}', cpf='${infos.cpf}', birthday='${infos.birthday}' WHERE id = ${id}
        `)

        if(customer.rowCount === 0){
            return res.sendStatus(404);
        }

        return res.sendStatus(200);

    }catch (e) {
        return res.status(500).send(e);
    }
}