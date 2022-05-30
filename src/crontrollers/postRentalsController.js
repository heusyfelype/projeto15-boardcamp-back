import connection from "../postgresConnect.js"
import dayjs from 'dayjs';

export async function postRentalsController(req, res) {
    const rental = req.body;

    rental.rentDate = dayjs().format('YYYY-MM-DD');
    //rental.rentDate = dayjs('2020/25/05').format('YYYY-MM-DD')

    console.log(rental)

    try{

        const client = await connection.query(`
            SELECT  * FROM customers WHERE id=$1
        `,[`${rental.customerId}`]);

        const price = await connection.query(`
            SELECT  games."pricePerDay" FROM games WHERE id=$1
        `,[`${rental.gameId}`]);

        if(client.rowCount === 0 || price.rowCount === 0){
            return res.sendStatus(400)
        }

         const originalPrice = rental.daysRented * price.rows[0].pricePerDay;
         console.log(originalPrice)

         await connection.query(`
             INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") 
             VALUES ( $1, $2 , $3, $4, $5, $6, $7);
         `, [`${rental.customerId}`, `${rental.gameId}`, `${rental.rentDate}`, `${rental.daysRented}`, null, `${originalPrice}`, null])
        
        return res.sendStatus(201);
    }catch(e){
        return res.status(500).send(e);
    }
}