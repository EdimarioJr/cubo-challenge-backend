import mongoose from "mongoose";

function connectMongo() {
  const DB_URL =
    "mongodb+srv://edjr:gs2WsKXzTg2q2pfY@cubo-challenge-mkjrg.mongodb.net/<dbname>?retryWrites=true&w=majority";

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => console.log("conectado ao banco!"));
}

export default connectMongo;
