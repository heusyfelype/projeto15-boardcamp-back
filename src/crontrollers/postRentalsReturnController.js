import connection from "../postgresConnect.js"
import dayjs from 'dayjs';

export async function postRentalsReturnController(req, res) {

    const id = req.params.id;

    
    try{

        const rentalResponse = await connection.query(`
            SELECT * FROM rentals WHERE rentals.id = $1
        `, [`${id}`])

        if(rentalResponse.rowCount === 0){
            return res.sendStatus(404);
        }
        if(rentalResponse.rows[0].returnDate){
            return res.sendStatus(400);
        }

        const rental = rentalResponse.rows[0];
        const today = dayjs().format('YYYY-MM-DD')
        const formatedRentDate = dayjs(rental.rentDate).format("YYYY-MM-DD")
        const diferenceDay = (dayjs(today) - dayjs(formatedRentDate))/ (1000 * 3600 * 24)

        diferenceDay > rental.daysRented 
            ? 
            rental.delayFee = ((diferenceDay - rental.daysRented) * (rental.originalPrice/rental.daysRented)) 
            : 
            rental.delayFee = 0;
        
        console.log("Rental: ", rental)
        console.log("Today: " + today, "FormatedRentDay: " + formatedRentDate, "diferenceDay: " + diferenceDay)

        
        const updateRental = await connection.query(
            `
                UPDATE rentals SET "returnDate"=$1, "delayFee"=$2 WHERE id = $3 

            `, [`${today}`, `${rental.delayFee}`, `${id}`]
        )
        

        return res.sendStatus(200)

    }catch (e) {
        return res.status(500).send(e);
    }
}