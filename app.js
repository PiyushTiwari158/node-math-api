import express, { json } from 'express';
const app = express();
import mathRoutes from './src/routes/mathRoutes';
import logger from './src/middlewares/logger';
import errorHandler from './src/middlewares/error-handler';
require('dotenv').config();

app.use(json());
app.use(logger);
app.use('/api', mathRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;