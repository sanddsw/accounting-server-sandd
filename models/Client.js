var generate_model = require('./_model.js');

generate_model("Client", {
        nume: String,
        cif: String,
        orc: String,
        adresa: {
            sediu: String,
            sediu2: String,
            oras: String,
            judet: String,
            tara: String
        },
        banca: [{
            nume: String,
            cont: String,
            valuta: String
        }]
    }
);
