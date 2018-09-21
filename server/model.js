// import and connect model with mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authorDB', {useNewUrlParser: true}, errs => console.log(errs?errs:"run db"));

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is missing"],
        minlength: [3, "Minimum 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description can't be blank"],
        minlength: [10, "Minimum 10 characters"],
        maxlength: [200, "Maximum 200 charactes"]
    },
    price: {
        type: Number,
        required: [true, "Price is missing"],
        min: [1, "Unfortunately, nothing is for free, minimum price should be $1"]
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [3, "Invalid location"]
    },
    url: {
        type: String,
        required: [true, "Image is required"]
    }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        minlength: [2, "Minimum 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    products: [ProductSchema]
} , { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("User", UserSchema);
module.exports = { User, Product};

