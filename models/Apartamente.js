var generate_model = require('./_model.js');

generate_model("Apartamente", {
        numar: String,
        serie: String,
        client: {
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
        },
        data: { type: Date, default: Date.now },
        tva: Number,
        produse: [{
            nume: String,
            um: Number,
            cantitate: Number,
            valoare: Number
        }]
    }
);
