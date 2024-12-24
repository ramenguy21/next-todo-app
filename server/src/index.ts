import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./schema";
import client from "./database";
const server = express();

// setup graphql
server.all("/graphql", createHandler({ schema }));

const PORT = 3001;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(console.dir);
