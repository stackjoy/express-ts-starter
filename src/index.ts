import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { mainRouter } from "./main.router";

const compression = require("compression");
const app = express();

const devPort = process.argv[2];
const port = devPort || 3030;

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', mainRouter); //serve API Routes

app.listen(port, () => {
    console.log(`server started on http://127.0.0.1:${port}`);
});






