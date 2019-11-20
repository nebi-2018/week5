const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.log("error", e.message);
  }
};

const getUser = async params => {
  try {
    const [rows] = await promisePool.execute(
      "SELECT * FROM wop_cat WHERE cat_id = ?;",
      params
    );
    return rows;
  } catch (e) {
    console.log("error", e.message);
    return { error: "error in database query" };
  }
};

module.exports = {
  getAllUsers
};
