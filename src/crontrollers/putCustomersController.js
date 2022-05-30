import connection from "../postgresConnect.js"

export async function putCustomersController(req, res) {
    const id = req.params.id;
    const infos = req.body;

    try{
        if(!id){
            return res.sendStatus(422);
        }

        const customer = await connection.query(`
            UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id = $5
        `, [`${infos.name}`, `${infos.phone}`, `${infos.cpf}`, `${infos.birthday}`, `${id}`])

        if(customer.rowCount === 0){
            return res.sendStatus(404);
        }

        return res.sendStatus(200);

    }catch (e) {
        return res.status(500).send(e);
    }
}