import express from "express";
import { getContent,createContent } from "../Controller/content";
const router = new express.Router();

router.get("/", getContent);

router.post('/',createContent)

export default router;
