var generate_model = require('./_model.js');

generate_model("Client", {
        nume: String,
        cif: String,
        orc: String,
        sediu: String,
        oras: String,
        judet: String,
        tara: String,
        banca: [{
            nume: String,
            cont: String
        }]
    }
);
