const express = require("express");
const user = require("../../controller/user.controller");

const router = express.Router();

// GET ALL USERS - IF YOU WENT, YOU CAN USE QUERY PARAMETOR
// (http://localhost:5000/user/all?size=number)
router.get("/all", user.getUsers);

// GET A RANDOM USER ROUTE
router.get("/random", user.getRandomUser);

// SAVE A USER
router.post("/save", user.saveUser);

// UPDATE A USER
router.patch("/update/:id", user.updateUser);

//Bulk-Update
router.patch("/bulk-update/:ids", user.updateMultipleUser);

// DELETE A USER
router.delete("/delete/:id", user.deleteUser);

module.exports = router;
