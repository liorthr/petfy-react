import express from 'express';
import userRoutes from './routes/users.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`My Server is running on http://localhost:${PORT}`);
});

