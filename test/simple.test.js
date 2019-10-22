// External Modules
const expect = require('chai').expect;

// Main Module
const PodToolsService = require('../lib/main');

let apiToken = 'API TOKEN';
let podTools = new PodToolsService({ apiToken: apiToken });

// #1
describe('Method: payBill', function () {
  this.timeout(100000);
  let addSearchData = {
    // ------ REQUIRED ------
    billId: '4972808930150',
    paymentId: '19586740'

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
    // scApiToken: 'SC API TOKEN'
  };
  it('correct request', function (done) {
    podTools.payBill(addSearchData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('Method: payedBillList', function () {
  this.timeout(100000);
  let reverseGeoData = {
    // ------ REQUIRED ------
    offset: 0,
    size: 1

    // ------ OPTIONAL ------
    // id: 0,
    // referenceNumber: '',
    // fromDate: '1398/02/02',
    // toDate: '',
    // billId: '',
    // paymentId: '',
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
    // scApiToken: 'SC API TOKEN'
  };
  it('correct request', function (done) {
    podTools.payedBillList(reverseGeoData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
