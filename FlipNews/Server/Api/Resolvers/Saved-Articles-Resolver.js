import Article from "../../Models/article";
import User from "../../Models/user";

import validator from "validator";
import { requireAuth } from "../../services/auth";

export default {
  createArticle: async (_, args, { user }) => {
    // const { title, imageUrl, content } = ArticleInput;

    try {
      await requireAuth(user);
      const article = {
        ...args
      };

      const FindUser = await User.findById(user._id);
      FindUser.savedarticles.unshift(article);
      FindUser.save();
      return article;
    } catch (error) {
      throw error;
    }
  },

  deleteArticle: async (_, { id }, { user }) => {
    try {
      await requireAuth(user);

      const FindUser = await User.findById(user._id);
      const Arr = await FindUser.savedarticles;
      const Re = await Arr.map(x => {
        return x.id;
      }).indexOf(id);

      if (!Re) {
        throw new Error("Not found!");
      }

      Arr.splice(Re, 1);

      await FindUser.save();

      return true;
    } catch (err) {
      throw err;
    }
  },

  getArticles: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      const FindUser = await User.findById(user._id);
      const Articles = await FindUser.savedarticles;
      return Articles;
    } catch (error) {
      throw error;
    }
  }
};
