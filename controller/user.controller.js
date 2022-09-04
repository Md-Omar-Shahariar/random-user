let users = require("../data/data.json");

// GET ALL USERS
module.exports.getUsers = (req, res) => {
  const { size } = req.query;
  const result = users.slice(0, size);
  res.send(result);
};

// GET A RANDOM USER
module.exports.getRandomUser = (req, res) => {
  const randomNumber = Math.floor(Math.random() * users.length);
  const result = users[randomNumber];
  res.send(result);
};

// SAVE A USER
module.exports.saveUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(users);
};

// UPDATE A USER
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const currentUser = req.body;

  const findUser = users.find((user) => user?.id === Number(id));
  // console.log(findUser);

  if (findUser) {
    findUser.id = currentUser?.id || findUser.id;
    findUser.address = currentUser?.address || findUser.address;
    findUser.gender = currentUser?.gender || findUser.gender;
    findUser.name = currentUser?.name || findUser.name;
    findUser.contact = currentUser?.contact || findUser.contact;
    findUser.photoUrl = currentUser?.photoUrl || findUser.photoUrl;
  } else {
    return res.send("User not found. Please give a valid id");
  }
  // console.log(findUser);

  res.send(findUser);
};

// DELETE A USER
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send(users);
};
