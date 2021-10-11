export default `
scalar Date


input UserInputData {
    email: String!
    name: String!
    password: String!
    country: String!
}

input ArticleInputData {
    title: String!
    content: String!
    imageUrl: String!,
    
}

type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    country: String!
    savedarticles: [Article!]!
}



type AuthData {
    token: String!
    userId: String!
}


type Source{
    id: String,
    name:String
}

type Article {
    source:Source,
    title: String,
    publishedAt: String,
    url: String,
    urlToImage: String,
    author:String,
    description: String,
    content:String,
    id: String

}

type News {
    id: String,

    title: String,
    image: String,
    link: String
    pubDate: String
    desc: String,
    isSelect: Boolean,

   
    
   
}
type Auth {
    token: String!
  }


type RootQuery {
    login(email: String!, password: String!): AuthData!
    article(id: ID!): Article!
    user: User!
    news(value:String!):[Article]
    getArticles:[Article]
}

type RootMutation {
    login(email: String!, password: String!): AuthData!

    createUser(
        email: String!,
    name: String!,
    password: String!,
    country: String!,
    ): Auth
    createArticle(   
        title: String,
        publishedAt: String,
        url: String,
        urlToImage: String,
        author:String,
        description: String,
        content:String,
        id: String
        ): Article!
    deleteArticle(id: String!): Boolean
}

schema {
    query: RootQuery
    mutation: RootMutation
}



`;
