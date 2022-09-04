const express = require("express");
const {
  getRandomUser,
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
} = require("../../controller/user.controller");

const router = express.Router();

// GET ALL USERS - IF YOU WENT, YOU CAN USE QUERY PARAMETOR
// (http://localhost:5000/user/all?size=number)
router.get("/all", getUsers);

// GET A RANDOM USER ROUTE
router.get("/random", getRandomUser);

// SAVE A USER
router.post("save", saveUser);

// UPDATE A USER
router.patch("/update/:id", updateUser);

// DELETE A USER
router.delete("/delete/:id", deleteUser);

module.exports = router;
