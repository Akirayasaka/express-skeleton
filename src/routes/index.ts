import { Express } from 'express';
import demoRouter from './demo';
import authRouter from './auth';

/** 路由清單 */
export const routerList = (app: Express) => {
  app.use('/demo', demoRouter);
  app.use('/auth', authRouter);
  // Sample: app.use('/xxx', xxx);
};
