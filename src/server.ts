import express from 'express';
import { routerList } from './routes';

const app = express();
const port = 3000;

app.use(express.json());
routerList(app);

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
