import { createConnection } from 'mysql';
const db = createConnection({
host: "localhost",
user: "root",
password: "14062004",
database:"saep" 
})

export default db;