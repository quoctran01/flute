const discountModel = require("../models/discount.model");
const { discountValidate } = require("../validations/discountValidation");

const discountController = {
  createDiscount: async (req, res) => {
    const discountExist = await discountModel.findOne({
      percentDiscount: req.body.percentDiscount,
    });
    if (discountExist) {
      return res.status(400).send("Existed persenDiscount");
    }
    const {err} = discountValidate(req.body.percentDiscount);

    if(err) {
        console.log("err")
    }

    const newDiscount = new discountModel();
    newDiscount.discountCode = req.body.discountCode;
    newDiscount.percentDiscount = req.body.percentDiscount;
    try {
      const discount = await newDiscount.save();
      res.send(discount);
    } catch (error) {
      res.send(error);
    }
  },
  updateDiscount: async (req, res) => {
      const discountUpdate = discountModel.findByIdAndUpdate(await {_id: req.params.id},
        {
          $set: {
            discountCode: req.body.discountCode,
            percentDiscount: req.body.percentDiscount 
          }
        }, (err) => {
          if(err) {
            res.send(err)
          }else {
            res.send("update successfully")
          }
        }
      )
  },
  getDiscount: async (req, res) => {
    try {
      const discount = await discountModel.findById({_id: req.params.id})
      res.send(discount)
    } catch (error) {
      res.send("not existed in db")
    }
  },
  getAllDiscount: async (req,res) => {
    try {
      const allDiscount = await discountModel.find({}).exec();
      res.send(allDiscount)
    } catch (error) {
      res.send(error)
    }
  },
  deleteDiscount: async (req, res) => {
    try {
      const discountNeedDelete =  discountModel.findByIdAndDelete(await {_id: req.params.id}, (err) => {
        if(err) {
          res.send("delete discout failed");
        } else {
          res.send("delte discount successfully");
        }
      })
    } catch (error) {
      res.send(error)
    }
  }
};
module.exports = discountController;
