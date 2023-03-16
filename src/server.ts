import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { routerList } from './routes';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//#region 解決跨域問題
app.use(
  cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
  })
);
app.all('*', (req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
//#endregion

routerList(app);

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
