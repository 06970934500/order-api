const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod;

const connectDB = async () => {
  try {

    mongod = await MongoMemoryServer.create();

    const uri = mongod.getUri();

    await mongoose.connect(uri);

    console.log("MongoDB em memória conectado");

  } catch (error) {

    console.error("Erro ao conectar DB", error);

  }
};

module.exports = connectDB;