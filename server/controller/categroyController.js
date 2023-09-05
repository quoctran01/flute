const categoryModel = require("../models/category.model");

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const categoryCodeExisted = await categoryModel.findOne({
        categoryCode: req.body.categoryCode,
      });
      if (categoryCodeExisted) return res.status(400).json("existed in db");
      const newCategory = new categoryModel();
      (newCategory.categoryCode = req.body.categoryCode),
        (newCategory.categroyName = req.body.categroyName);

      const category = await newCategory.save();
      res.send(category);
    } catch (error) {
      res.send("error");
    }
  },
  getAllCategory: async (req, res) => {
    try {
      const categorys = await categoryModel.find({}).exec();
      res.send(categorys);
    } catch (error) {
      res.send("error");
    }
  },
  getCategory: async (req, res) => {
    try {
      const category = await categoryModel.findById({
        _id: req.params.id,
      });
      res.send(category);
    } catch (error) {
      res.send("error");
    }
  },
  deleteCategory: async (req, res) => {
    try {
      categoryModel.findByIdAndDelete(await { _id: req.params.id }, (err) => {
        if (err) res.status(404).send("delete failed");
        else res.status(200).send("delete successfully");
      });
    } catch (err) {
      res.status(505).send("failed");
    }
  },
  editCaegory: async (req, res) => {
   if(req.body.categroyName === undefined)
      return res.send("err")
      categoryModel.findByIdAndUpdate(
         await {_id: req.params.id},
         {
            $set: {
              categoryCode: req.body.categoryCode,
               categroyName: req.body.categroyName
            }
         },
         (err) => {
            if(err)
               res.status(404).json("Update category failed")
            else  
               res.status(200).json("Update caterory successfully");
         }
      )
  } 
};

module.exports = categoryController;
