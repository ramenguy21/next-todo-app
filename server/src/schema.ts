import { buildSchema } from "graphql";

const schema = buildSchema(`
    type user {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    type list {
        userId: String!
        label: String!
    }

    type todo {
        listId: String!
        label: String!
        completed: Boolean!
    }

    type Query {
        getUser(id: ID!): user
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): user!
        deleteUser(id: ID!): ID!
    }
`);

export default schema;
