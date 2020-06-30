import Users from "../db/model/User";
import User from "../db/model/User";

const userController = {
  index: async function (req, res) {
    const users = await Users.find({}, (err) => {
      if (err) return console.log("erro:", err);
    });
    return res.json(users);
  },

  create: async function (req, res) {
    const {first_name, last_name, participation} = req.body;
    let nParticipation = Number(participation);
    const newUser = new User({
      first_name,
      last_name,
      participation: nParticipation,
    });
    const retorno = await newUser.save();
    console.log(retorno);
    return res.send(retorno);
  },
};

export default userController;
