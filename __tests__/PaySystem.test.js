const { createContainer, asClass, asFunction } = require("awilix");
const { makePaymentSystemServices } = require("../services/PaySystemServices");
const PaySystem = require("../models/PaySystemModel");
const uuid = require("uuid");

describe("Payment system", () => {
  it("works", async () => {
    const container = createContainer();

    container.register({
      makePaymentSystemServices: asFunction(makePaymentSystemServices).scoped(),
      PaySystem: asClass(PaySystem).singleton()
    });
    const payment = {
      client: "Nicolas Riquelme",
      amount: 3500,
      isItPayed: false
    };
    const paymentDesiredKeys = ["id", "client", "amount", "date", "isItPayed"];

    expect(
      Object.keys(await container.resolve("PaySystem").createPayment(payment))
    ).toMatchObject(paymentDesiredKeys);

    const { id } = await container.resolve("PaySystem").createPayment(payment);

    expect(await container.resolve("PaySystem").getPayment(id)).toBeDefined();
  });
});
