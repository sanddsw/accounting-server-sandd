var generate_model = require('./_model.js');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

generate_model("User",

    {
        nume: String,
        email: String,
        username: String,
        roles: [{type: ObjectId, ref: "UserRole"}],
        password: String
    }
    
    
    
);

generate_model('UserRole', {
    company: {type: ObjectId, ref: "Company"},
    user: {type: ObjectId, ref: "User"},
    privileges: [{
        name: String,
        read: Boolean,
        write: Boolean
    }]
});
