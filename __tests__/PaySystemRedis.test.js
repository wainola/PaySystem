const dotenv = require("dotenv");
const redis = require("redis");

dotenv.config();

describe("Pay system with Redis", () => {
  it("Works connecting to the database", async () => {
    console.log("ENVS::", process.env);
  });
});
