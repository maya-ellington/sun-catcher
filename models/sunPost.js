const mongoose = require("mongoose");

const EVENT_TYPE = ['sunrise', 'sunset'];

const sunPostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    photoUrl: String,
    date: Date,
    location: String,
    // sun_watchers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    //in the future, will be able to associate other users with sun events
    description: String,
    postType: { type: String, enum: EVENT_TYPE, default: 'sunset'},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SunPost', sunPostSchema);
