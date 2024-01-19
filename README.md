query {
  findAllUsers {
    id
    name
    email
  }
}
------------------------
query {
  getUser(id: "1") {
    id
    name
    email
  }
}
-------------------------
type Mutation {
  createUser(name: String!, email: String!): User
}
