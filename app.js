const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

class App {
    constructor() {
        this.express = express();
        this.mongoDBConnect();
        this.dataCarriers();
        this.mountRoutes();
        this.headers();
    };

    mongoDBConnect() {
        mongoose.connect('mongodb://localhost:27017/sivaprasad', {useNewUrlParser: true});
    };

    dataCarriers() {
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use(bodyParser.json());
    };

    headers() {
        this.express.use(function (req, res, next) {
            if (req.url.substr(-1) === '/') {
                return res.send({
                    message: "Welcome To NodeJS!"
                });
            }
            next();
        });
    };


    mountRoutes() {
        this.express.use('/v1', require('./routes'))
    };
}

const app = new App().express;

app.listen(8000);