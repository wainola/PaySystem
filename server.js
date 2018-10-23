require("dotenv").config();
const redis = require("redis");

const client = redis.createClient(process.env.REDIS_URL);
client.set("test", "test value", redis.print);
client.get("test", (err, result) => {
  if (err) console.log("error", err);
  console.log("data saved!", result);
});
