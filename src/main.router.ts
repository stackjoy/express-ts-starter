import { Router } from "express";
import { testRouter } from "./routes/test.router";

export const mainRouter = Router();

// example:
mainRouter.use('/', testRouter);
