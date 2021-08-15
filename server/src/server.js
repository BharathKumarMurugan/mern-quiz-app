require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/app.route';
import questionRouter from './routes/question.route';
const app = express();

const PORT = process.env.SERVER_PORT || 4040;

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
});
const db = mongoose.connection;
db.on('error', (err)=>console.error(err));
db.on('open',()=>console.log('Connected to Database'));

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);


app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));