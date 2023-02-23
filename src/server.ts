import express from 'express';
import { routerList } from './routes';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
routerList(app);

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
