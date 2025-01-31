import express from "express";
import PetController from "../controller/PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", router.post("/", petController.criaPet.bind(petController)));

export default router;
