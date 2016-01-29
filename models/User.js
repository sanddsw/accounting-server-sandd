var generate_model = require('./_model.js');

generate_model("User", {
    nm: String,
    ae: String,
    nr: String,
    un: String,
    pw: String,
    rl: Number,
    ass: [require('mongoose').Schema.Types.ObjectId]
  }
);
