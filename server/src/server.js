const dns = require("node:dns");

dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`MarketHub API running on port ${PORT}`);
  });
};

startServer();
