require("dotenv").config();

describe("Pay system with Redis", () => {
  it("Works connecting to the database", async () => {
    console.log("ENVS::", process.env.REDIS_URL);
  });
});
