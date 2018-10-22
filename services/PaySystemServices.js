module.exports.makePaymentSystemServices = function({
  PaySystemModel,
  currentUser
}) {
  return {
    createPayment: async data => {
      const newPayment = await PaySystemModel.createPayment(data);
      return newPayment;
    },
    getPayment: async query => {
      const payment = await PaySystemModel.find(id);
      return payment;
    }
  };
};
