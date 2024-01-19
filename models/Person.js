import mongoose from "mongoose";

const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    genderIdentity: String,
})

export {Person};