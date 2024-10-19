import express from 'express';

let configViewEngine = (app) => {
    //config view engine
    app.set('view engine', 'ejs');
    app.set('views', '/library_website/src/server.js');
    //config static file
    app.use(express.static('./src/public'));
}