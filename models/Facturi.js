var generate_model = require('./_model.js');
var ObjectId = require('mongoose').Schema.ObjectId;
generate_model("Facturi", {
        number: String,
        series: String,
        buyer: {type: ObjectId, ref: 'Client'},
        date: { type: Date, default: Date.now },
        currency: String,
        total: Number,
        seller: {
            name: String,
            cif: String,
            orc: String,
            address: String,
            city: String,
            region: String,
            country: String,
            bank: String,
            bankAccount: String
        },
        products: [{
            title: String,
            desc: String,
            amount: Number
        }]
    }
);
