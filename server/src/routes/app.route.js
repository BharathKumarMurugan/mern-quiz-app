import express from "express";
import categoryController from "../controllers/category.controller";
import questionController from "../controllers/question.controller";
import questionRouter from "./question.route";
const router = express.Router();

// fetch all categories
router.get("/category/all", categoryController.getAll);

// fetch one category
router.get("/category/:cid", categoryController.findOne);

// create new category
router.post("/category/create", categoryController.createCategory);

// fetch all questions from the category
router.get("/category/:cid/questions/all", categoryController.getAllQuestions);
// router.get("/category/:cid/questions/all", questionController.getAll);

// fetch one question
router.get("/category/:cid/questions/:qid", questionController.findOne);

// create new question
router.post(
  "/category/:cid/questions/create",
  questionController.createQuestion
);

export default router;
