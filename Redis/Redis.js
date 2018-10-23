require("dotenv").config();
const redis = require("redis");
const { promisify } = require("util");
class Redis {
  constructor() {
    this.client = redis.createClient(process.env.REDIS_URL);
    this.client.on("connect", () => {
      console.log("Redis client conected!");
    });
    this.getAsync = promisify(this.client.get).bind(this.client);
  }

  async Set(key, value) {
    console.log("set client", key, value);
    return await this.client.set(key, value);
  }
  async Get(key) {
    return await this.getAsync(key);
  }
}

module.exports = Redis;
