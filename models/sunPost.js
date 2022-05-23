const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
    text: String
})

const sunPostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // referencing a model
    photoUrl: String,
    date: Date,
    location: String,
    sun_watchers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    description: String,
    sunQuote: { type: mongoose.Schema.Types.ObjectId, ref: "Quote" },
    postType: { type: String, enum: ["sunrise", "sunset"] },
    comments: [commentsSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SunPost', sunPostSchema);
