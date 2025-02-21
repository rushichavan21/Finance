const { request } = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = mongoose.ObjectId;
const UserData = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accountBalance:{
  type:Number,
  default:200000,
  },
 
});
const UserBasicModel = mongoose.model("UserBasic", UserData);
module.exports={
  UserBasicModel,
}
