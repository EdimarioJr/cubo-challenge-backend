import Users from "../db/model/User";

const userController = {
  index: async function (req, res) {
    const { first_name, last_name } = req.query;
    const users = await Users.find(
      first_name && last_name ? { first_name, last_name } : {},
      (err) => {
        if (err) return console.log("erro:", err);
      }
    );
    return res.json(users);
  },

  create: async function (req, res) {
    const { first_name, last_name, participation } = req.body;
    let newUser = {
      first_name,
      last_name,
      participation,
    };
    // removendo espaços antes ou depois das Strings
    Object.keys(newUser).forEach((prop) => {
      prop.trim();
    });
    // forçando o participation a ser um Number, não importa oq venha do frontend
    let nParticipation = Number(participation);
    newUser = new Users({
      ...newUser,
      participation: nParticipation,
    });
    const retorno = await newUser.save();
    return res.send(retorno);
  },

  destroy: async function (req, res) {
    const id = String(req.params.id);
    await Users.deleteOne({ _id: id }, (err) => {
      if (err) return res.send("Erro no delete:", err);
      res.send("Usuário deletado com sucesso!");
    });
  },
};

export default userController;
