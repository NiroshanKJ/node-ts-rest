import express, { Application } from 'express';
import ApiRoutes from './routes/api';
import WebRoutes from './routes/web';

const app: Application = express();

app.set('view engine', 'pug');

app.use('/api', ApiRoutes);
app.use('/', WebRoutes);

app.listen(5002, () => {
    console.log('Server started on http://localhost:5002');
});