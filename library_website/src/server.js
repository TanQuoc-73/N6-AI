import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



viewEngine(app);
initWebRoute(app);


let port = process.env.PORT || 6969;
//PORT ===underfind => PORT = 6969 : nếu server không chạy thì dẫn về port 6969

app.listen(port, () => {
    console.log(`Backend Nodejs is running on port ${port}`);
})