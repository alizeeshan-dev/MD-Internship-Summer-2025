
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alizeeshan:ali28122005@test.vsvby1s.mongodb.net/?retryWrites=true&w=majority&appName=test";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
