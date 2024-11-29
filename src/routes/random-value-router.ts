import { Router } from "express";
import { getValueHandler } from "../controller/random-value";



export const router = Router();

router.get("/getValue/:seed", getValueHandler);