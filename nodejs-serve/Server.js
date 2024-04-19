const sql = require("mssql");

const config = {
  server: "localhost",
  user: "sa",
  password: "123",
  database: "web-nha-dat",
  port: 1433,
  options: {
    encrypt: true,
  },
  trustServerCertificate: true,
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));
  
module.exports = {
  sql,
  config,
  poolPromise,
};

async function connectAndQuery() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Standard`;
    console.dir(result);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    sql.close();
  }
}

connectAndQuery();
