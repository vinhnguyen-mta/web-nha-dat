const express = require("express");
const router = express.Router();
const { poolPromise } = require("../Server");
const sql = require("mssql");
router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    console.log("pool", pool);
    const result = await pool
      .request()
      .input("ID", sql.VarChar(50), req.body.name)
      .input("Name", sql.VarChar(50), req.body.lastname)
      .input("Address", sql.VarChar(50), req.body.email)
      .execute("InsertProfile")
      .then(function (recordSet) {
        res.status(200).json({ status: "Success" });
      });
  } catch (err) {
    res.status(400).json({ message: "invalid" });
    res.send(err.message);
  }
});
module.exports = {
  router,
};
