var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const { sql, config, poolPromise } = require("./Server");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded((extended = true)));

app.get("/status", async (request, response) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Standard`;
    return response.status(200).json({
      status: true,
      result: {
        result : result.recordsets[0],
      },
    });
  } catch (err) {
    console.error("Error:", err);
  } finally {
    sql.close();
  }
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
app.listen(5000, function () {
  console.log("Server is running..");
});
