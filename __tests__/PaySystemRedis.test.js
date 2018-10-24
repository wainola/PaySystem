const Redis = require("../Redis/Redis");

let client = new Redis();

describe("Pay system with Redis", () => {
  it("Works connecting to the database and retreiving some stored value", async () => {
    const dataToStore = {
      key: "first_key",
      value: "firt stored value"
    };

    const r = await client.Set(dataToStore.key, dataToStore.value);

    const r2 = await client.Get(dataToStore.key);
    expect(r2).toBe(dataToStore.value)
  });
  it('set and retreive a hash value', async () => {
    const hashToStore = {
      animal: "dog",
      breed: "german sheperd",
      age: String(5)
    }
    const keyToUse = "hash_stored"

    const r = await client.HashSet(keyToUse, hashToStore)

    const getHashResponse = await client.HGetAll(keyToUse)
    expect(getHashResponse).toEqual(hashToStore)
  })
});
