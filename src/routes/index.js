const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetByURL,
  handleAnalytics
} = require("../controllers/index");
const bitlyRoutes = express.Router();
const bitlyModel = require("../models/index");

bitlyRoutes.post("/", handleGenerateNewShortURL);

bitlyRoutes.get('/:id', handleGetByURL)
// bitlyRoutes.get("/:id", async (req, res) => {
//   console.log("9", req.params.id);
//   const id = req.params.id;


//   const data = await bitlyModel.findByIdAndUpdate(
//     { shortId: id },
//     { $push: { visitHistory: { timestamps: Date.now() } } },
//     { new: true }
//   );

//   if (!data) {
//     return res.status(404).json({ success: false, message: "URL not found" });
//   }

//   return res.status(200).json({ success: true, data });
// })

bitlyRoutes.get('/analytics/:id', handleAnalytics)

module.exports = bitlyRoutes;
