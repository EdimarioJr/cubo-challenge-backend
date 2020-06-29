import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://edjr:gs2WsKXzTg2q2pfY@cubo-challenge-mkjrg.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connection = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.on("connect", () => console.log("conectado ao banco!"));

export default connection;
