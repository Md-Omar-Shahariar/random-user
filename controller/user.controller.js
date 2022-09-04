let users = require("../data/data.json");
console.log(users);

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

  if (
    !user?.id ||
    !user?.gender ||
    !user?.name ||
    !user?.contact ||
    !user?.address ||
    !user?.photoUrl
  ) {
    res.send("Missing Property");
  } else {
    users.push(user);
    res.send(users);
  }
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
module.exports.updateMultipleUser = (req, res) => {
  const { ids } = req.params;
  const idString = ids.slice(1, ids.length - 1);
  const idArray = idString.split(",");

  const data = req.body;
  console.log(idArray);
  console.log(data.length);
  console.log(idArray.length);

  if (idArray.length != data.length) {
    res.send("Can't Assign");
  } else {
    const UpdatedArray = idArray.map((id, index) => {
      const findUser = users.find((user) => user?.id === Number(id));
      // console.log(findUser);

      if (findUser) {
        findUser.id = data[index]?.id || findUser.id;
        findUser.address = data[index]?.address || findUser.address;
        findUser.gender = data[index]?.gender || findUser.gender;
        findUser.name = data[index]?.name || findUser.name;
        findUser.contact = data[index]?.contact || findUser.contact;
        findUser.photoUrl = data[index]?.photoUrl || findUser.photoUrl;
      } else {
        return res.send("User not found. Please give a valid id");
      }
      return findUser;
      // console.log(findUser);
    });
    // console.log(users);
    res.send(UpdatedArray);
  }
};

// DELETE A USER
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send(users);
};
