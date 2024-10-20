import express from 'express';
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/thuvienhau', (req, res)=>{
        return res.send('Thu Vien HAU');
    });


    return app.use("/" , router);
}

module.exports = initWebRoute;