import * as express from 'express';
import * as bodyParser from "body-parser";
import { userController } from './controllers/userController';

const app: express.Application = express();

app.use(bodyParser.json());

app.use('/user', userController);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
