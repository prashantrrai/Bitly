const mongoose = require("mongoose")

const urlschema = new mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true
    },
    redirectURL : {
        type: String,
        required: true,
    },
    visitHistory : [{timestamps: { type: Number}}],
},
    {timestamps: true}
)


const bitlyModel = mongoose.model("bitlyModel", urlschema)

module.exports = bitlyModel;