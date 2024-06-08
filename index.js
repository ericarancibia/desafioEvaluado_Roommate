import express from 'express'
import routerRoommate from './routes/roommate.route.js'
import routerGasto from './routes/gasto.route.js'
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));
app.use(express.static('views'));

app.use('/', routerRoommate)
app.use('/', routerGasto)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    });