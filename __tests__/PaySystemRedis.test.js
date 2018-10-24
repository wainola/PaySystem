const Redis = require("../Redis/Redis");
const uuid = require('uuid');

let client = new Redis();

describe("Pay system with Redis", () => {
  it("Works connecting to the database and retreiving some stored value", async () => {
    const dataToStore = {
      key: "first_key",
      value: "firt stored value"
    };

    const r = await client.Set(dataToStore.key, dataToStore.value);

    const r2 = await client.Get(dataToStore.key);
    expect(r2).toBe(dataToStore.value);
  });
  it('set and retreive a hash value', async () => {
    const hashToStore = {
      animal: "dog",
      breed: "german sheperd",
      age: String(5)
    }
    const keyToUse = "hash_stored";

    const r = await client.HashSet(keyToUse, hashToStore);

    const getHashResponse = await client.HGetAll(keyToUse);
    expect(getHashResponse).toEqual(hashToStore);
  })
  it('set and retreive a hash values using teh genKey method', async () => {
    const namespace = 'weather_api';
    const key = client.genKey(namespace);
    const hashToSet = {
      id: uuid.v4(),
      data: 'some random data'
    }
    const r = await client.HashSet(key, hashToSet)
    const getHashWithUuid = await client.HGetAll(key)
    expect(key.split('_').pop()).toHaveLength(36);
    expect(getHashWithUuid).toEqual(hashToSet);
  })
});
