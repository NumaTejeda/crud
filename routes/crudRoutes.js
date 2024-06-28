//Define las rutas para servis las vistas html
import express from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/itemController.js";

const router = express.Router()

router.post('/create', createItem);
router.delete('/delete/:id', deleteItem);
router.get('/items', getItems);
router.put('/update', updateItem);

export default router;