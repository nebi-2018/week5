"use strict";

const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.user_list_get);

router.get("/:id", userController.user_get);

router.post("/", userController.user_create_post);

router.put("/", userController.user_update_put);

router.delete("/:id", userController.user_delete);

module.exports = router;
