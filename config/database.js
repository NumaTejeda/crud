import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde el archivo env/development.env
dotenv.config({ path: path.resolve(__dirname, '../env/development.env') });

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});


export default connection;

// try {
//     const [results, devuelto] = await connection.query(
//         'INSERT INTO usuarios (id_usuario, name) VALUES (1, "Juli")'
//     );
//     const fields = await connection.query(
//         `SELECT * FROM usuarios`
//     )
//     console.log(devuelto);
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available

//     connection.end()
// } catch (err) {
//     console.log(err);
// }

