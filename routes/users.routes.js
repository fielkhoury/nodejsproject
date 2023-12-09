const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();


router.get("/users", async (req, res) => {
      const users = await userModel.find({}, {
        password: 0,
      });
  
      if (!users) return res.status(500).json({ error: "No user exist" });
  
      return res.status(200).json(users);
  });


module.exports = router;