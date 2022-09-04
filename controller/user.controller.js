let users = require("../data/data.json");

// GET ALL USERS
const getUsers = (req, res) => {
  const { size } = req.query;
  const result = users.slice(0, size);
  res.send(result);
};

// GET A RANDOM USER
const getRandomUser = (req, res) => {
  const randomNumber = Math.floor(Math.random() * users.length);
  const result = users[randomNumber];
  res.send(result);
};

// SAVE A USER
const saveUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(users);
};

// UPDATE A USER
const updateUser = (req, res) => {
  const { id } = req.params;
  const currentUser = req.body;
  const findUser = users.find((user) => user?.id === Number(id));

  if (findUser) {
    findUser.id = currentUser.id;
    findUser.address = currentUser.address;
    findUser.gender = currentUser.gender;
    findUser.name = currentUser.name;
    findUser.contact = currentUser.contact;
    findUser.photoUrl = currentUser.photoUrl;
  } else {
    return res.send("User not found. Please give a valid id");
  }

  res.send(findUser);
};

// DELETE A USER
const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send(users);
};

module.exports = { getRandomUser, getUsers, saveUser, updateUser, deleteUser };
