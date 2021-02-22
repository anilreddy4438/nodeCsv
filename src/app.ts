import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors'
import { RoutesConfig } from './routes/routes.config';
import { CsvRoutes } from './csv/csv.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 4000;
const routes: Array<RoutesConfig> = [];

app.use(bodyparser.json());
app.use(cors());
routes.push(new CsvRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});