import client from "./database";
import { randomUUID } from "crypto";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const userCollection = client.db("todo-app").collection("users")

const getUser = (args: { id: string }) => {
  return userCollection.findOne({id : args.id});
};

const createUser = (args: {
  name: string;
  email: string;
  password: string;
}): User => {
  // generate randon uuid for User object
  const generatedId = randomUUID().toString();
  // create User object and save
  const User = { id: generatedId, ...args };
  userCollection.insertOne({User})
  return User;
};

/*const updateUser = (args: {
  id: string;
  name?: string;
}): User => {
  // loop through users array and get object of User
  const index = users.findIndex((User) => User.id === args.id);
  const User = users[index];

  // update field if it is passed as an argument
  if (args.name) User.name = args.name;

  return User;
};*/

const deleteUser = (args: { id: string }): string => {
  userCollection.deleteOne({id : args.id})
  return args.id;
};

//these are async functions, not sure if gql supports ...
export const root = {
  getUser,
  createUser,
  //updateUser,
  deleteUser,
};
