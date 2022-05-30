import connection from "../postgresConnect.js"
import dayjs from 'dayjs';

export async function postRentalsController(req, res) {
    const rental = req.body;

    rental.rentDate = dayjs().format('YYYY-MM-DD');


    /*
    {
  --------id: 1,
  --------customerId: 1,
  -------gameId: 1,
  rentDate: '2021-06-20',    // data em que o aluguel foi feito
  ----------daysRented: 3,             // por quantos dias o cliente agendou o aluguel
  returnDate: null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
  originalPrice: 4500,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
  delayFee: null             // multa total paga por atraso (dias que passaram do prazo vezes o preço por dia do jogo)
}
    
    */

    console.log(rental.gameId)

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
             VALUES (${rental.customerId}, ${rental.gameId}, '${rental.rentDate}', ${rental.daysRented}, ${null}, ${originalPrice}, ${null});
         `)
        
        return res.sendStatus(201);
    }catch(e){
        return res.status(500).send(e);
    }
}