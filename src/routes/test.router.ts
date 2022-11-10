import { Router } from 'express'

export const testRouter = Router();

testRouter.get('/', [], (async (req, res, next) => {
  return res.json({ express_app_is_running: true });
}));






