import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ApiRouter from './routes/index.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB is connected...');
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use('/api', ApiRouter);

app.use(express.static(path.resolve(__dirname, 'server', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'server', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
