import Question from "../models/question.model";
import Category from '../models/category.model';

let questionController = {
  // get one qustion
  findOne: async (req, res, next) => {
    try {
      const { qid } = req.params;
      const question = await Question.findById(qid);
      res.status(200).json(question);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // get all questions
  getAll: async (req, res, nxt) => {
    try {
      const questions = await Question.find({category: req.params.cid});
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // create a new question
  createQuestion: async (req, res, nxt) => {
    console.log("I am here");
    try {
      let data = Object.assign({category: req.params.cid}, req.body)
      const newQuestion = await Question.create(data);
      console.log(newQuestion);
      res.status(201).json(newQuestion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = questionController;
