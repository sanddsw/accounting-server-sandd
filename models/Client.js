var generate_model = require('./_model.js');

generate_model("Client", {
        nume: String,
        cif: String,
        orc: String,
        sediul: String,
        judet: String,
        banca: [{
            nume: String,
            cont: String,
            valuta: String
        }]
    }
);
