//CRUD
export  default `

  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    teams: [Team!]!
  }
  
  type Query{
    getUser(id: Int!): User!
    getAll: [User!]!
  }
  
  type Mutation{
    createUser(username: String!, email: String!, password: String!): User!
  }
  
`