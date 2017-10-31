export  default `
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    public: [Message!]!
    users: [User!]!
  }
`