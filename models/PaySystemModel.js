const uuid = require("uuid");
const payments = [];

class PaySystem {
  async createPayment(data) {
    const newPayment = {
      id: uuid.v4(),
      client: data.client,
      amount: data.amount,
      date: Date.now(),
      isItPayed: data.isItPayed
    };
    payments.push(newPayment);
    return newPayment;
  }

  async getPayment(id) {
    const payment = payments.find(x => x.id === id);
    return payment;
  }
}

module.exports = PaySystem;
