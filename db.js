const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const userSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
});

const adminSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    creatorId: ObjectId,
});

const purchageSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId,
});

const usermodel=mongoose.model("user",userSchema);
const adminmodel=mongoose.model("admin",adminSchema);
const coursemodel=mongoose.model("course",courseSchema);
const purchagemodel=mongoose.model("purchage",purchageSchema);


module.exports={
    usermodel,
    adminmodel,
    coursemodel,
    purchagemodel
}