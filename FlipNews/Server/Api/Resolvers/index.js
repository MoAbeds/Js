import NewsResolver from "./News-resolver";
import Articles from "./Saved-Articles-Resolver.js";
import Auth from "./Auth-resolvers";

export default {
  RootQuery: {
    news: NewsResolver.news,
    getArticles: Articles.getArticles,
    user: Auth.user
  },
  RootMutation: {
    login: Auth.login,

    createUser: Auth.createUser,
    createArticle: Articles.createArticle,
    deleteArticle: Articles.deleteArticle
  }
};
