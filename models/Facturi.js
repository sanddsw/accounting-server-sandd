var generate_model = require('./_model.js');
var ObjectId = require('mongoose').Schema.ObjectId;
generate_model("Facturi", {
        numar: String,
        serie: String,
        client: ObjectId,
        data: { type: Date, default: Date.now },
        tva: Number,
        produse: [{
            nume: String,
            um: Number,
            cantitate: Number,
            valoare: Number
        }]

        //
        //: { //Adresa
        //  ct: String,   //Oras
        //  st: String,   //Strada
        //  nr: String    //Numarul
        //},
        //gps: { //Pozitie GPS
        //  lat: String,
        //  lng: String
        //},
        //hf: Boolean, //Are detalii completate
        //frm: {  //Detalii firma
        //  dn: String, //Numele firmei
        //  tf: String, //Numarul de telefon
        //  ae: String, //Adresa de email
        //  cui: String,
        //  nrc: String, //Nr reg Com
        //  wb: String, //Website
        //  fb: String, //Facebook
        //  at: {  //Detalii autorizatie
        //    nr: String, //Numar
        //    dt: String,
        //    file: String,
        //    _id: String//Data
        //  }
        //},
        //gid: String, //ID-ul google maps
        //tp: String, //Tipul Locatiei
        //pt: String, //URL-ul fotografiei de pe google
        //sf: Number //Status { 0: Safe, 1: Pending, 2: Unsafe, 3: Uncertain, 4: New }
    }
);
