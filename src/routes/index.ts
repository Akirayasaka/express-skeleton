import { Express } from 'express';
import demoRouter from './demo';

/** 路由清單 */
export const routerList = (app: Express) => {
  app.use('/demo', demoRouter);
  // Sample: app.use('/xxx', xxx);
};
