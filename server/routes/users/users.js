const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser
} = require("../../controllers/user/user");
const { verifyUser } = require("../../utils/verifyToken");

const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET user by ID
router.get("/:id", verifyUser, getUser);

module.exports = router;
