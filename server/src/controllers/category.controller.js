import Category from "../models/category.model";

let categoryController = {
  // fetch a specific category by id
  findOne: async (req, res, next) => {
    try {
      const { cid } = req.params;
      const category = await Category.findById(cid).populate("questions");
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // fetch all categories
  getAll: async (req, res, next) => {
    try {
      const categories = await Category.find().populate("questions");
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // create a new category
  createCategory: async (req, res, next) => {
    try {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // update an existing category
  /*updateCategory: async (req, res, next)=>{
    try {
      const { cid } = req.params;
      const { name, questions } = req.body;
      const category = await Category.findById(cid);
      if(name != null){
        
      }
    } catch (err) {
      
    }
  }
  */

  // delete an existing category

  // fetch all questions in a specific category
  getAllQuestions: async (req, res, next) => {
    try {
      const { cid } = req.params;
      const category = await Category.findOne({ _id: req.params.cid })
        .populate({ path: "questions" });
      console.log(`category ::: ${category}`);
      res.json(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = categoryController;
