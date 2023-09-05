const newModel = require("../models/new.model");

const newController = {
  createNew: async (req, res) => {
    try {
      if (
        req.body.description === undefined
      )
        return res.send("not enough data");
      const newNew = new newModel();
      (newNew.title = req.body.title),
        (newNew.imageNew = req.body.imageNew),
        (newNew.description = req.body.description);
      try {
        const newPost = await newNew.save();
        res.send(newPost);
      } catch (error) {
        res.send("create failed");
      }
    } catch (error) {
      res.send(error);
    }
  },
  editNew: async (req, res) => {
      try {
      const newNeededEdit = newModel.findByIdAndUpdate(
        await { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            imageNew: req.body.imageNew,
            description: req.body.description,
          },
        },
        (err) => {
          if (err) {
            res.send("edit failed");
          } else {
            res.send("edit successfully");
          }
        }
      );
    } catch (error) {
      res.send(error);
    }
  },
  getAllNew : async (req, res) => {
    try {
       const allNew = await newModel.find({}).exec();
            res.send(allNew)
    } catch (error) {   
        console.log(error)
    }
  },
  deleteNew : async (req, res) => {
     try {
        const newNeededDelete = newModel.findByIdAndDelete(
            await {_id: req.params.id},
            (err) => {
                if(err) {
                    res.send("deleteFailed");
                }else {
                    res.send("delete successfully");
                }
            }
        )
     } catch (error) {
        res.send(error)
     }
  }
};

module.exports = newController;
