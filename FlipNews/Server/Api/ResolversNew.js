/*

const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

let Parser = require("rss-parser");
let parser = new Parser();

const User = require("../Models/user");
const Article = require("../Models/article");

module.exports = {
  createUser: async function({ userInput }, req) {
    const errors = [];
    // Check email valid
    if (!validator.isEmail(userInput.email)) {
      errors.push({ message: "E-Mail is invalid." });
    }
    if (
      //Check password
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 5 })
    ) {
      errors.push({ message: "Password too short!" });
    }
    // Check input
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }
    //Check if existingUser
    const existingUser = await User.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error("User exists already!");
      throw error;
    }
    // if false create user and hash password
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
      email: userInput.email,
      name: userInput.name,
      country: userInput.country,
      password: hashedPw
    });
    //Save user
    const createdUser = await user.save();
    //return the id abd info
    return { ...createdUser._doc, _id: createdUser._id.toString() };
  },

  // Login Func

  login: async function({ email, password }) {
    //search for email
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("User not found.");
      error.code = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Password is incorrect.");
      error.code = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email
      },
      "somesupersecretsecret",
      { expiresIn: "10h" }
    );
    return { token: token, userId: user._id.toString() };
  },

  createArticle: async function({ ArticleInput }, req) {
    if (!req.isAuth) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }
    const errors = [];
    if (
      validator.isEmpty(ArticleInput.title) ||
      !validator.isLength(ArticleInput.title, { min: 5 })
    ) {
      errors.push({ message: "Title is invalid." });
    }
    if (
      validator.isEmpty(ArticleInput.content) ||
      !validator.isLength(ArticleInput.content, { min: 5 })
    ) {
      errors.push({ message: "Content is invalid." });
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("Invalid user.");
      error.code = 401;
      throw error;
    }
    const article = new Article({
      title: postInput.title,
      content: postInput.content,
      imageUrl: postInput.imageUrl,
      creator: user
    });
    const createdArticle = await article.save();
    user.savedarticles.push(createdArticle);
    await user.save();
    return {
      ...createdArticle._doc,
      _id: createdArticle._id.toString(),
      createdAt: createdArticle.createdAt.toISOString()
    };
  },

  article: async function({ id }, req) {
    if (!req.isAuth) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }
    const article = await Article.findById(id).populate("creator");
    if (!article) {
      const error = new Error("No post found!");
      error.code = 404;
      throw error;
    }
    return {
      ...article._doc,
      _id: article._id.toString(),
      createdAt: article.createdAt.toISOString()
    };
  },

  deleteArticle: async function({ id }, req) {
    if (!req.isAuth) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }
    const article = await Article.findById(id);
    if (!article) {
      const error = new Error("No post found!");
      error.code = 404;
      throw error;
    }
    if (article.creator.toString() !== req.userId.toString()) {
      const error = new Error("Not authorized!");
      error.code = 403;
      throw error;
    }
    await Article.findByIdAndRemove(id);
    const user = await User.findById(req.userId);
    user.savedarticles.pull(id);
    await user.save();
    return true;
  },

  news: async function() {
    let feed = await parser.parseURL("https://aawsat.com/feed/news");
    let News = feed.items;
    console.log(News);
    return News;
  }
};
*/
