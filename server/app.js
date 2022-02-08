import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import ApiRouter from './routes/index.js';
// import loadDotEnv from './config/dotenv.js';

// loadDotEnv();

const __dirname = path.resolve();
const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is connected...');
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: process.env.ORIGIN }));

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
