## GraphQL-TypeORM(sqlite3)-TypeScript

npm install
npm start

API URL: http://localhost:8050/graphql

- Create user
mutation {
  createUser(
    data: {
      firstname: "User3"
      lastname: "Harly"
      nickname: "U3_H"
      email: "u3h@gmail.com"
      password: "very_secret"
    }
  ) {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}

- Get all users
query {
  users {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}

- Get user by id
query {
  user(id: "1") {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}

- Update user
mutation {
  updateUser(id: "1", data: { nickname: "new" }) {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}

- Delete user
mutation {
  deleteUser(id: "1")
}
