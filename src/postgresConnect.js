import pg from "pg";

const {Pool} = pg;

const user = 'postgres';
const password = 'postgres';
const host = 'localhost';
const port = 5432;
const database = 'boardcamp';

export function postgresConnection(){
    const connection = new Pool({
        user,
        password,
        host,
        port,
        database
      });
}