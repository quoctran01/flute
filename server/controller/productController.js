const productModel = require("../models/product.model");
const categoryModel = require("../models/category.model");
const { findByIdAndDelete } = require("../models/user.model");
const { productValidate } = require("../validations/productValidation");

const productController = {
  //   addProduct : async(req, res) => {
  //       const newProduct = new productModel(req.body);
  //       const saveProduct = await newProduct.save();
  //       if(req.body.category) {
  //           const categoryCode = categoryModel.findById(req.body.category);
  //           await categoryCode.updateOne({
  //               $push: {
  //                   products: saveProduct._id
  //               }
  //           })
  //           res.status(200).json(saveProduct);
  //       }
  //   },
  createProduct: async (req, res) => {
    try {
      const { err } = productValidate(req.body);
      if (err) return res.status(500).send("check data input");
      const productCodeExisted = await productModel.findOne({
        productCode: req.body.productCode,
      });
      if (productCodeExisted) {
        return res.status(400).json("Existed productCode in DB");
      }

      const newProduct = new productModel();
      newProduct.productCode = req.body.productCode;
      newProduct.nameProduct = req.body.nameProduct;
      newProduct.price = req.body.price;
      newProduct.imageProduct = req.body.imageProduct;
      newProduct.quantity = req.body.quantity;
      newProduct.status = req.body.status;
      newProduct.description = req.body.description;
      newProduct.category = req.body.category;

      const saveProduct = await newProduct.save();
      if (req.body.category) {
        const categoryCode = categoryModel.findById(req.body.category);
        await categoryCode.updateOne({
          $push: {
            products: saveProduct._id,
          },
        });
      }
      res.send(saveProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await productModel.findById({
        _id: req.params.id,
      });

      res.send(product);
    } catch (error) {
      res.send("error");
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.find({}).exec();
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      productModel.findByIdAndDelete(await { _id: req.params.id }, (err) => {
        if (err) {
          res.send("delete failed");
        } else {
          res.send("delete successfully");
        }
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  editProduct: async (req, res) => {
    if (
      req.body.productCode === undefined ||
      req.body.nameProduct === undefined ||
      req.body.price === undefined ||
      req.body.imageProduct === undefined ||
      req.body.quantity === undefined ||
      req.body.description === undefined
    )
      return res.send("err");
    productModel.findByIdAndUpdate(
      await { _id: req.params.id },
      {
        $set: {
          productCode: req.body.productCode,
          nameProduct: req.body.nameProduct,
          price: req.body.price,
          imageProduct: req.body.imageProduct,
          quantity: req.body.quantity,
          description: req.body.description,
        },
      },
      (err) => {
        if (err) {
          res.status(404).json("update Failed");
        } else {
          res.status(200).json("update successFully");
        }
      }
    );
  },
  searchProduct: async (req, res) => {
    try {
      const valueSearch = req.params.key;
      const arr = valueSearch.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str2 = arr.join(" ");
      const result = await productModel.find({
        $or: [
          {
            nameProduct: { $regex: str2 },
          },
        ],
      });
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = productController;
