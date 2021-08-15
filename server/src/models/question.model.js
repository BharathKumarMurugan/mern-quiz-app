import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Question", questionSchema);
