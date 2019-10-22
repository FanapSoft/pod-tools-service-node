module.exports = {
  // #1
  payBill: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/doServiceCall',
    method: 'POST'
  },

  // #2
  payedBillList: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/doServiceCall',
    method: 'POST'
  }
};
