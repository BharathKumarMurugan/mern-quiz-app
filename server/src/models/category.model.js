import mongoose from "mongoose";
import Question from "./question.model";
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
