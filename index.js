import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createItem, deleteItem, getItems, updateItem } from './controllers/itemController.js';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views')); configuracion para view engine

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use('/', router)


app.listen(port, () => {
    console.log(`Abrime => http://localhost:${port}`);
})
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
// app.get('/create.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'create.html'));
// });
// app.get('/delete.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'delete.html'));
// });
// app.get('/update.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'update.html'));
// });
// app.get('/read.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'read.html'));
// });


// app.post('/create', createItem);
// app.delete('/delete/:id', deleteItem);
// app.get('/items', getItems);
// app.put('/update', updateItem);

