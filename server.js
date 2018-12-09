import express from express;
import bodyParser from 'body-parser';
import cors from 'cors';
import winston from 'winston'

const app = express();
const port = process.env.PORT || 5600;

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1', (req, res) => {
    res.status(200).send('Welcome to WEconnect Api');
});


app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});