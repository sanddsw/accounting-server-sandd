var generate_model = require('./_model.js');

generate_model("Client", {
        name: String,
        cif: String,
        orc: String,
        address: String,
        city: String,
        region: String,
        country: String,
        banks: [{
            name: String,
            account: String
        }]
    }
);
