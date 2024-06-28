//Define las rutas para servis las vistas html
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '../views/index.html'));
});
router.get('/create.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '../views/create.html'));
});
router.get('/delete.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '../views/delete.html'));
});
router.get('/update.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '../views/update.html'));
});
router.get('/read.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '../views/read.html'));
});

export default router;
