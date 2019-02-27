let usersModels = require('../models/userModel');

class UsersController {
    constructor() {
        this.usersModels = new usersModels();
    };

    getAll(req, res) {
        this.usersModels.find(req.query,(err, data) => {
            if (err) {
                res.send('error...!');
            } else {
                res.send(data);
            }create
        });
    };
    create(req, res) {
        this.usersModels.create(req.body,(err, data) => {
            if (err) {
                res.send('error...!');
            } else {
                res.send(data);
            }
        });
    };
}

module.exports = UsersController;
