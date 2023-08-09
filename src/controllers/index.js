const shortid = require('shortid')
const bitlyModel = require('../models/index')

async function handleGenerateNewShortURL(req,res) {
    console.log("8",req.body);
    const redirecturl = req.body.redirectURL;

    if(!redirecturl) res.status(400).json({success: false, message: "URL is required"})

    const newShortId = shortid.generate(); 

    await bitlyModel.create({
        shortId: newShortId,
        redirectURL: redirecturl,
        visitHistory: []
    });

    return res.status(200).json({ success: true, message: "URL is Generated", id: newShortId });
}

async function handleGetByURL(req,res) {
    // console.log("22",req.params.id);
    const id = req.params.id;

    // if(!id) res.status(400).json({success: false, message: "ID not Found"})

    // const data = await bitlyModel.find({shortId: id});

    const data = await bitlyModel.findOneAndUpdate(
    { shortId: id },
    { $push: { visitHistory: { timestamps: Date.now() } } });

    // console.log(data);
    // return res.status(200).json({ success: true, data});
    res.redirect(data.redirectURL)
}

async function handleAnalytics(req,res) {
    const id = req.params.id;

    const analytics = await bitlyModel.findOne({ shortId: id });

    // console.log(data);
    return res.status(200).json({ success: true, totalClicks: analytics.visitHistory.length, analytics: analytics.visitHistory});
}

module.exports = {handleGenerateNewShortURL, handleGetByURL, handleAnalytics};