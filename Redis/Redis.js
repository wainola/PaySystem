require("dotenv").config();
const redis = require("redis");
const { promisify } = require("util");
const uuid = require('uuid');
class Redis {
  constructor() {
    this.client = redis.createClient(process.env.REDIS_URL);
    this.client.on("connect", () => {
      console.log("Redis client conected!");
    });
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.getAllHashAsync = promisify(this.client.hgetall).bind(this.client);
  }

  async Set(key, value) {
    console.log("set client", key, value);
    return await this.client.set(key, value);
  }
  async Get(key) {
    return await this.getAsync(key);
  }

  async HashSet(key, hash) {
    return await this.client.HMSET(key, hash)
  }

  async HGetAll(key) {
    return await this.getAllHashAsync(key)
  }

  genKey(namespace){
    const key = `${namespace}_${uuid.v4()}`
    return key
  }
}
module.exports = Redis;
