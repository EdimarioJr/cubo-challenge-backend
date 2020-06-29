import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "The first name is obrigatory!"],
  },
  last_name: {
    type: String,
    required: [true, "The second name is obrigatory!"],
  },
  participation: {
    type: String,
    required: [true, "The participation name is obrigatory!"],
  },
});

export default mongoose.model("Users", UserSchema);
