import express from 'express';

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', (req, res0)=>{
        return res0.send('Hello World');
    });
    return app.use("/" , router);
}

module.exports = initWebRoute;