const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let blogSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 5,
      maxlength: 50,
      unique:true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      lowercase: true, 
    },

    // token: {
    //   type: String,
    // },
  date:{
    type:Date,
  },
    createdAt: { type: Date, default: Date.now(), index: { expiresIn: 300 } },
    source: { type: String },
  
    updatedAt: { type: Date, default: Date.now(), index: { expiresIn: 300 } },
    source: { type: String },
  },
  {
    timestamps: true,
    collection: "blog",
  },

);

module.exports = mongoose.model("Blog", blogSchema);
