import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) =>{

    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("error in fetching products: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
        
    }

};

export const createProduct = async (req, res) =>{
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message:"Please provide all fields"})
    }

    if(product.price < 0) {
        return res.status(400).json({success:false, message:"The price must be upper than 0"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    }
 
    catch (error){
        console.error("Error in creating a product: ", error.message)
        res.status(500).json({success:false, message: "server error"});

    }
}

export const updateProduct = async (req, res) =>{
    const {id} = req.params;
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message:"Please provide all fields"})
    }

    if(product.price < 0) {
        return res.status(400).json({success:false, message:"The price must be upper than 0"})
    }

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(4040).json({success:false, message: "Invalid Product Id"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data:updatedProduct, message: "Product updated successfully."});
        
    } catch (error) {
        res.status(500).json({success:false, message: "Server error"})
        
    }
}

export const deleteProduct = async (req, res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(4040).json({success:false, message: "Invalid Product Id"})
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product Deleted"});
    }

    catch (error) {
        console.error("Error in deleting a product: ", error.message)
        res.status(500).json({success:false, message: "Server error"});

    }
}