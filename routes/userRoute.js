const express = require('express');
const router = express.Router();
const {userHome, getAllUsers, addUser, getUserById, updateUser, deleteUserById, deleteUsers} = require("../controllers/userController");

router.get("/", userHome);

router.get("/users", getAllUsers);

router.get("/users/:userId", getUserById);

router.post("/users", addUser);

router.put("/users/:userId", updateUser);

router.delete("/users", deleteUsers);

router.delete("/users/:userId", deleteUserById);

module.exports = router;