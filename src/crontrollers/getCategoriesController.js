import connection from "../postgresConnect.js"

export async function getCategoriesController(req, res){
    
    try{
        const categories = await connection.query('SELECT * FROM categories');
        
        return res.send(categories.rows)

    }catch(e){
        return res.status(500).send(e)
    }


    
}