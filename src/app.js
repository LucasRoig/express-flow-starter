//@flow
import express from 'express'
import morgan from 'morgan'
import config from './config'

import HelloController from "./Controllers/HelloController";
const PORT = config.port;
const app = express();
app.use(morgan('dev'));

const helloController = new HelloController();
app.get('/', helloController.sayHello)

app.listen(PORT, () => {
    console.log('app listening on port', PORT)
})