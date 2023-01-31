import { createConnection } from 'mysql';
const db = createConnection({
host: "itismagistri.ddns.net",
user: "gr1",
password: "tm4763ka",
database:"db_gr1" 
})

export default db;