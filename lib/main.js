/**
 * @namespace podToolsService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

/**
 * podProductService
 * @memberOf podProductService
 */
class PodToolsService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-tools-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer;
  }

  // #1 API Token
  /**
   * @description This function
   * @param {payBillObj} data
   * @returns {Promise}
   */
  payBill (data) {
    let apiName = 'payBill';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    data.scProductId = products[apiName];
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, null, true);
  }

  // #2 API Token
  /**
   * @description This function
   * @param {payedBillListObj} data
   * @returns {Promise}
   */
  payedBillList (data) {
    let apiName = 'payedBillList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.fromDate && data.fromDate instanceof Date) {
      data.fromDate = utils.toShamsiDateTimeString(data.fromDate);
    }

    if (data.toDate && data.toDate instanceof Date) {
      data.toDate = utils.toShamsiDateTimeString(data.toDate);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    data.scProductId = products[apiName];
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, null, true);
  }
}

module.exports = PodToolsService;
