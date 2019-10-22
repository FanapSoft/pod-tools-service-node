const PodToolsService = require('pod-tools-service');

// Variable Declaration & Initialization
let podTools = new PodToolsService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: payBill
let payBillData = {
  // ------ REQUIRED ------
  billId: '4972808930150',
  paymentId: '19386733'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podTools.payBill(payBillData)
  .then(function (result) {
    console.log('function: payBill ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error payBill ============>', error);
  });

// *****************************************************************
// #2
// function: payedBillList
let payedBillListData = {
  // ------ REQUIRED ------
  offset: 0

  // ------ OPTIONAL ------
  // id: 0,
  // referenceNumber: '00000',
  // fromDate: 'YYYY/MM/DD',
  // toDate: 'YYYY/MM/DD',
  // billId: '000000',
  // paymentId: '000000',
  // size: 1
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podTools.payedBillList(payedBillListData)
  .then(function (result) {
    console.log('function: payedBillList ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error payedBillList ============>', error);
  });
