import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './src/server/routes'
const app = express();
const port = process.env.PORT || 8081;

// Log with Morgan
app.use(morgan('dev'));

// Accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/dist'));

routes(app, {});

app.listen(port);
console.log(`listening on port ${port}`);
