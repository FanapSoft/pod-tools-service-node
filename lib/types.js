/**
 * @typedef {object} confObj
 * @property {string} apiToken
 * @property {string} [tokenIssuer]
 */

/**
 * @typedef {object} payBillObj
 * @property {string} billId
 * @property {string} paymentId
 * @property {number} [voucherHash]
 */

/**
 * @typedef {object} payedBillListObj
 * @property {number} offset
 * @property {number} [size]
 * @property {number} [id]
 * @property {string} [referenceNumber]
 * @property {string | Date} [fromDate]
 * @property {string | Date} [toDate]
 * @property {string} [billId]
 * @property {string} [paymentId]
 * @property {number} [voucherHash]
 */
