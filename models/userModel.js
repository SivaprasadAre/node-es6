let mongoose = require('mongoose');
let schema = mongoose.Schema;
let userSchema = new schema({
    email: {type: String},
    phoneNumber: {type: Number},
    name: {type: String},
    address: {type: String},
    lastmoddatetime: {type: Date},
    lastmoduserid: {type: String}
});
let userSchemaModelSchema = mongoose.model('userSchema', userSchema, 'userSchema');

class UserModel {
    constructor() {
        this.userSchemaModelSchema = userSchemaModelSchema;
    };

    find(query, callback) {
        this.userSchemaModelSchema.find({}, callback);
    };

    create(body, callback) {
        this.userSchemaModelSchema.create(body, callback);
    };
}

module.exports = UserModel;