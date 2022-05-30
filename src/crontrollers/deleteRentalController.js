import connection from "../postgresConnect.js"

export async function deleteRentalController(req, res){

    const id = req.params.id;

    try{

        const validate = await connection.query(`
            SELECT * FROM rentals WHERE id=$1
        `,[`${id}`])

        if(validate.rowCount === 0){
           return res.sendStatus(404);
        }
        if(validate.rows[0].returnDate === null){
           return res.sendStatus(400);
        }

        await connection.query(`
            DELETE FROM rentals WHERE id=$1
        `, [`${id}`]);

        return res.sendStatus(200);

    }catch(e){
        return res.status(500).send(e)
    }
}