const Redis = require("../Redis/Redis");

describe("Pay system with Redis", () => {
  it("Works connecting to the database", async () => {
    const client = new Redis();
    const dataToStore = {
      key: "first_key",
      value: "firt stored value"
    };

    const r = await client.Set(dataToStore.key, dataToStore.value);

    const r2 = await client.Get(dataToStore.key);
    console.log("r2:::", r2);
  });
});
