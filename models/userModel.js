"use strict";

const pool = require("../database/db");

const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute("SELECT * FROM wop_user");

    return rows;
  } catch (e) {
    console.log("error", e.message);

    return { error: "error in database query" };
  }
};

const getUser = async params => {
  try {
    const [rows] = await promisePool.execute(
      "SELECT * FROM wop_user WHERE user_id = ?;",

      params
    );

    return rows;
  } catch (e) {
    console.log("error", e.message);

    return { error: "error in database query" };
  }
};

const addUser = async params => {
  try {
    const [rows] = await promisePool.execute(
      "INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?);",

      params
    );

    return rows;
  } catch (e) {
    console.log("error", e.message);

    return { error: "error in database query" };
  }
};

const updateUser = async params => {
  try {
    const [rows] = await promisePool.execute(
      "UPDATE wop_user SET name = ?, password = ? WHERE user_id = ?;",

      params
    );

    return rows;
  } catch (e) {
    console.log("error", e.message);
  }
};

const deleteUser = async params => {
  try {
    const [rows] = await promisePool.execute(
      "DELETE FROM wop_user WHERE cat_id = ?;",

      params
    );

    return rows;
  } catch (e) {
    console.log("error", e.message);
  }
};

module.exports = {
  getAllUsers,

  getUser,

  addUser
};
