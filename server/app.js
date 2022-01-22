import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
// import ApiRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
// app.use('/api', ApiRouter);

app.use(express.static('./build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./build', 'index.html'));
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

export default app;
