import express from "express";
import { createIntern } from "../controllers/createInterns.js";
import { getIntern } from "../controllers/getIntern.js";

const router = express.Router();

router.post("/create/intern", createIntern);
router.get("/get/intern", getIntern);
export default router;
