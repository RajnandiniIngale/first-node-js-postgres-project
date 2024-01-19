
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'graphql';
import userResolvers from './resolvers/userResolvers';

const prisma = new PrismaClient();

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  }
`);

const root = userResolvers;
