module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        type: 'string'
      },
      tokenIssuer: {
        enum: [0, 1]
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  payBill: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        billId: {
          integerString: [],
          minLength: 6
        },
        paymentId: {
          integerString: [],
          minLength: 6,
          maxLength: 13
        }
      },
      required: ['token', 'tokenIssuer', 'billId', 'paymentId'],
      additionalProperties: false
    }
  },

  // #2
  payedBillList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        referenceNumber: {
          type: 'string'
        },
        fromDate: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        billId: {
          type: 'string',
          minLength: 6
        },
        paymentId: {
          type: 'string',
          minLength: 6,
          maxLength: 13
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'number',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer', 'offset', 'size'],
      additionalProperties: false
    }
  }
};
