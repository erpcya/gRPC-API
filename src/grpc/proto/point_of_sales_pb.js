// source: proto/point_of_sales.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');
goog.object.extend(proto, proto_core_functionality_pb);
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
goog.object.extend(proto, proto_base_data_type_pb);
var proto_client_pb = require('../proto/client_pb.js');
goog.object.extend(proto, proto_client_pb);
goog.exportSymbol('proto.data.Address', null, global);
goog.exportSymbol('proto.data.AvailableDocumentType', null, global);
goog.exportSymbol('proto.data.AvailablePaymentMethod', null, global);
goog.exportSymbol('proto.data.AvailablePriceList', null, global);
goog.exportSymbol('proto.data.AvailableRefund', null, global);
goog.exportSymbol('proto.data.AvailableWarehouse', null, global);
goog.exportSymbol('proto.data.City', null, global);
goog.exportSymbol('proto.data.CreateCustomerBankAccountRequest', null, global);
goog.exportSymbol('proto.data.CreateCustomerRequest', null, global);
goog.exportSymbol('proto.data.CreateOrderLineRequest', null, global);
goog.exportSymbol('proto.data.CreateOrderRequest', null, global);
goog.exportSymbol('proto.data.CreatePaymentRequest', null, global);
goog.exportSymbol('proto.data.Customer', null, global);
goog.exportSymbol('proto.data.CustomerBankAccount', null, global);
goog.exportSymbol('proto.data.DeleteCustomerBankAccountRequest', null, global);
goog.exportSymbol('proto.data.DeleteOrderLineRequest', null, global);
goog.exportSymbol('proto.data.DeleteOrderRequest', null, global);
goog.exportSymbol('proto.data.DeletePaymentRequest', null, global);
goog.exportSymbol('proto.data.GetAvailableRefundRequest', null, global);
goog.exportSymbol('proto.data.GetCustomerBankAccountRequest', null, global);
goog.exportSymbol('proto.data.GetCustomerRequest', null, global);
goog.exportSymbol('proto.data.GetKeyLayoutRequest', null, global);
goog.exportSymbol('proto.data.GetOrderRequest', null, global);
goog.exportSymbol('proto.data.GetProductPriceRequest', null, global);
goog.exportSymbol('proto.data.Key', null, global);
goog.exportSymbol('proto.data.KeyLayout', null, global);
goog.exportSymbol('proto.data.ListAvailableCurrenciesRequest', null, global);
goog.exportSymbol('proto.data.ListAvailableCurrenciesResponse', null, global);
goog.exportSymbol('proto.data.ListAvailableDocumentTypesRequest', null, global);
goog.exportSymbol('proto.data.ListAvailableDocumentTypesResponse', null, global);
goog.exportSymbol('proto.data.ListAvailablePaymentMethodsRequest', null, global);
goog.exportSymbol('proto.data.ListAvailablePaymentMethodsResponse', null, global);
goog.exportSymbol('proto.data.ListAvailablePriceListRequest', null, global);
goog.exportSymbol('proto.data.ListAvailablePriceListResponse', null, global);
goog.exportSymbol('proto.data.ListAvailableWarehousesRequest', null, global);
goog.exportSymbol('proto.data.ListAvailableWarehousesResponse', null, global);
goog.exportSymbol('proto.data.ListCustomerBankAccountsRequest', null, global);
goog.exportSymbol('proto.data.ListCustomerBankAccountsResponse', null, global);
goog.exportSymbol('proto.data.ListOrderLinesRequest', null, global);
goog.exportSymbol('proto.data.ListOrderLinesResponse', null, global);
goog.exportSymbol('proto.data.ListOrdersRequest', null, global);
goog.exportSymbol('proto.data.ListOrdersResponse', null, global);
goog.exportSymbol('proto.data.ListPaymentsRequest', null, global);
goog.exportSymbol('proto.data.ListPaymentsResponse', null, global);
goog.exportSymbol('proto.data.ListPointOfSalesRequest', null, global);
goog.exportSymbol('proto.data.ListPointOfSalesResponse', null, global);
goog.exportSymbol('proto.data.ListProductPriceRequest', null, global);
goog.exportSymbol('proto.data.ListProductPriceResponse', null, global);
goog.exportSymbol('proto.data.Order', null, global);
goog.exportSymbol('proto.data.OrderLine', null, global);
goog.exportSymbol('proto.data.Payment', null, global);
goog.exportSymbol('proto.data.PointOfSales', null, global);
goog.exportSymbol('proto.data.PointOfSalesRequest', null, global);
goog.exportSymbol('proto.data.PrintTicketRequest', null, global);
goog.exportSymbol('proto.data.PrintTicketResponse', null, global);
goog.exportSymbol('proto.data.ProcessOrderRequest', null, global);
goog.exportSymbol('proto.data.Region', null, global);
goog.exportSymbol('proto.data.TenderTypeRefund', null, global);
goog.exportSymbol('proto.data.UpdateCustomerBankAccountRequest', null, global);
goog.exportSymbol('proto.data.UpdateCustomerRequest', null, global);
goog.exportSymbol('proto.data.UpdateOrderLineRequest', null, global);
goog.exportSymbol('proto.data.UpdateOrderRequest', null, global);
goog.exportSymbol('proto.data.UpdatePaymentRequest', null, global);
goog.exportSymbol('proto.data.ValidatePINRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListCustomerBankAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListCustomerBankAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListCustomerBankAccountsRequest.displayName = 'proto.data.ListCustomerBankAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListCustomerBankAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListCustomerBankAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListCustomerBankAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListCustomerBankAccountsResponse.displayName = 'proto.data.ListCustomerBankAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateCustomerBankAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateCustomerBankAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateCustomerBankAccountRequest.displayName = 'proto.data.CreateCustomerBankAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateCustomerBankAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UpdateCustomerBankAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateCustomerBankAccountRequest.displayName = 'proto.data.UpdateCustomerBankAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeleteCustomerBankAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeleteCustomerBankAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteCustomerBankAccountRequest.displayName = 'proto.data.DeleteCustomerBankAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetCustomerBankAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetCustomerBankAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetCustomerBankAccountRequest.displayName = 'proto.data.GetCustomerBankAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CustomerBankAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CustomerBankAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CustomerBankAccount.displayName = 'proto.data.CustomerBankAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PrintTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PrintTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PrintTicketRequest.displayName = 'proto.data.PrintTicketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PrintTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PrintTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PrintTicketResponse.displayName = 'proto.data.PrintTicketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetAvailableRefundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetAvailableRefundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetAvailableRefundRequest.displayName = 'proto.data.GetAvailableRefundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.AvailableRefund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.AvailableRefund.repeatedFields_, null);
};
goog.inherits(proto.data.AvailableRefund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.AvailableRefund.displayName = 'proto.data.AvailableRefund';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.TenderTypeRefund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.TenderTypeRefund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.TenderTypeRefund.displayName = 'proto.data.TenderTypeRefund';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateCustomerRequest.displayName = 'proto.data.CreateCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UpdateCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateCustomerRequest.displayName = 'proto.data.UpdateCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetCustomerRequest.displayName = 'proto.data.GetCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.Customer.repeatedFields_, null);
};
goog.inherits(proto.data.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Customer.displayName = 'proto.data.Customer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Address.displayName = 'proto.data.Address';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.City.displayName = 'proto.data.City';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Region = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Region, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Region.displayName = 'proto.data.Region';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.AvailableWarehouse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.AvailableWarehouse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.AvailableWarehouse.displayName = 'proto.data.AvailableWarehouse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.AvailablePaymentMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.AvailablePaymentMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.AvailablePaymentMethod.displayName = 'proto.data.AvailablePaymentMethod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.AvailableDocumentType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.AvailableDocumentType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.AvailableDocumentType.displayName = 'proto.data.AvailableDocumentType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.AvailablePriceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.AvailablePriceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.AvailablePriceList.displayName = 'proto.data.AvailablePriceList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableWarehousesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListAvailableWarehousesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableWarehousesRequest.displayName = 'proto.data.ListAvailableWarehousesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableDocumentTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListAvailableDocumentTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableDocumentTypesRequest.displayName = 'proto.data.ListAvailableDocumentTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableWarehousesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListAvailableWarehousesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListAvailableWarehousesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableWarehousesResponse.displayName = 'proto.data.ListAvailableWarehousesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailablePaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListAvailablePaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailablePaymentMethodsRequest.displayName = 'proto.data.ListAvailablePaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailablePaymentMethodsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListAvailablePaymentMethodsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListAvailablePaymentMethodsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailablePaymentMethodsResponse.displayName = 'proto.data.ListAvailablePaymentMethodsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableDocumentTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListAvailableDocumentTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListAvailableDocumentTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableDocumentTypesResponse.displayName = 'proto.data.ListAvailableDocumentTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailablePriceListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListAvailablePriceListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailablePriceListRequest.displayName = 'proto.data.ListAvailablePriceListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailablePriceListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListAvailablePriceListResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListAvailablePriceListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailablePriceListResponse.displayName = 'proto.data.ListAvailablePriceListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableCurrenciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListAvailableCurrenciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableCurrenciesRequest.displayName = 'proto.data.ListAvailableCurrenciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListAvailableCurrenciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListAvailableCurrenciesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListAvailableCurrenciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListAvailableCurrenciesResponse.displayName = 'proto.data.ListAvailableCurrenciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPointOfSalesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPointOfSalesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPointOfSalesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPointOfSalesResponse.displayName = 'proto.data.ListPointOfSalesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProductPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListProductPriceResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListProductPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProductPriceResponse.displayName = 'proto.data.ListProductPriceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListOrdersResponse.displayName = 'proto.data.ListOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListOrdersRequest.displayName = 'proto.data.ListOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListOrderLinesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListOrderLinesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListOrderLinesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListOrderLinesResponse.displayName = 'proto.data.ListOrderLinesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListOrderLinesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListOrderLinesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListOrderLinesRequest.displayName = 'proto.data.ListOrderLinesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProductPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListProductPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProductPriceRequest.displayName = 'proto.data.ListProductPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPointOfSalesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPointOfSalesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPointOfSalesRequest.displayName = 'proto.data.ListPointOfSalesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PointOfSalesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PointOfSalesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PointOfSalesRequest.displayName = 'proto.data.PointOfSalesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PointOfSales = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PointOfSales, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PointOfSales.displayName = 'proto.data.PointOfSales';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateOrderRequest.displayName = 'proto.data.CreateOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ProcessOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ProcessOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ProcessOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ProcessOrderRequest.displayName = 'proto.data.ProcessOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreatePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreatePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreatePaymentRequest.displayName = 'proto.data.CreatePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdatePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UpdatePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdatePaymentRequest.displayName = 'proto.data.UpdatePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeletePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeletePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeletePaymentRequest.displayName = 'proto.data.DeletePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPaymentsRequest.displayName = 'proto.data.ListPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ValidatePINRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ValidatePINRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ValidatePINRequest.displayName = 'proto.data.ValidatePINRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPaymentsResponse.displayName = 'proto.data.ListPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Payment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Payment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Payment.displayName = 'proto.data.Payment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeleteOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeleteOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteOrderRequest.displayName = 'proto.data.DeleteOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeleteOrderLineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeleteOrderLineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteOrderLineRequest.displayName = 'proto.data.DeleteOrderLineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateOrderLineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateOrderLineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateOrderLineRequest.displayName = 'proto.data.CreateOrderLineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UpdateOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateOrderRequest.displayName = 'proto.data.UpdateOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateOrderLineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UpdateOrderLineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateOrderLineRequest.displayName = 'proto.data.UpdateOrderLineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetOrderRequest.displayName = 'proto.data.GetOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetKeyLayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetKeyLayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetKeyLayoutRequest.displayName = 'proto.data.GetKeyLayoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Order.displayName = 'proto.data.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.OrderLine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.OrderLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.OrderLine.displayName = 'proto.data.OrderLine';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetProductPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetProductPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetProductPriceRequest.displayName = 'proto.data.GetProductPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.KeyLayout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.KeyLayout.repeatedFields_, null);
};
goog.inherits(proto.data.KeyLayout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.KeyLayout.displayName = 'proto.data.KeyLayout';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Key.displayName = 'proto.data.Key';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListCustomerBankAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListCustomerBankAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListCustomerBankAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    customerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListCustomerBankAccountsRequest}
 */
proto.data.ListCustomerBankAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListCustomerBankAccountsRequest;
  return proto.data.ListCustomerBankAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListCustomerBankAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListCustomerBankAccountsRequest}
 */
proto.data.ListCustomerBankAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListCustomerBankAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListCustomerBankAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListCustomerBankAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCustomerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListCustomerBankAccountsRequest} returns this
*/
proto.data.ListCustomerBankAccountsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListCustomerBankAccountsRequest} returns this
 */
proto.data.ListCustomerBankAccountsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_uuid = 2;
 * @return {string}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.getCustomerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListCustomerBankAccountsRequest} returns this
 */
proto.data.ListCustomerBankAccountsRequest.prototype.setCustomerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListCustomerBankAccountsRequest} returns this
 */
proto.data.ListCustomerBankAccountsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListCustomerBankAccountsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListCustomerBankAccountsRequest} returns this
 */
proto.data.ListCustomerBankAccountsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListCustomerBankAccountsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListCustomerBankAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListCustomerBankAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListCustomerBankAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerBankAccountsList: jspb.Message.toObjectList(msg.getCustomerBankAccountsList(),
    proto.data.CustomerBankAccount.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListCustomerBankAccountsResponse}
 */
proto.data.ListCustomerBankAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListCustomerBankAccountsResponse;
  return proto.data.ListCustomerBankAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListCustomerBankAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListCustomerBankAccountsResponse}
 */
proto.data.ListCustomerBankAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.CustomerBankAccount;
      reader.readMessage(value,proto.data.CustomerBankAccount.deserializeBinaryFromReader);
      msg.addCustomerBankAccounts(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListCustomerBankAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListCustomerBankAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListCustomerBankAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCustomerBankAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.CustomerBankAccount.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListCustomerBankAccountsResponse} returns this
 */
proto.data.ListCustomerBankAccountsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated CustomerBankAccount customer_bank_accounts = 2;
 * @return {!Array<!proto.data.CustomerBankAccount>}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.getCustomerBankAccountsList = function() {
  return /** @type{!Array<!proto.data.CustomerBankAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.CustomerBankAccount, 2));
};


/**
 * @param {!Array<!proto.data.CustomerBankAccount>} value
 * @return {!proto.data.ListCustomerBankAccountsResponse} returns this
*/
proto.data.ListCustomerBankAccountsResponse.prototype.setCustomerBankAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.CustomerBankAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.CustomerBankAccount}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.addCustomerBankAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.CustomerBankAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListCustomerBankAccountsResponse} returns this
 */
proto.data.ListCustomerBankAccountsResponse.prototype.clearCustomerBankAccountsList = function() {
  return this.setCustomerBankAccountsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListCustomerBankAccountsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListCustomerBankAccountsResponse} returns this
 */
proto.data.ListCustomerBankAccountsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateCustomerBankAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateCustomerBankAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateCustomerBankAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    customerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    country: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    driverLicense: jspb.Message.getFieldWithDefault(msg, 7, ""),
    socialSecurityNumber: jspb.Message.getFieldWithDefault(msg, 8, ""),
    name: jspb.Message.getFieldWithDefault(msg, 9, ""),
    state: jspb.Message.getFieldWithDefault(msg, 10, ""),
    street: jspb.Message.getFieldWithDefault(msg, 11, ""),
    zip: jspb.Message.getFieldWithDefault(msg, 12, ""),
    bankAccountType: jspb.Message.getFieldWithDefault(msg, 13, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    isAch: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    addressVerified: jspb.Message.getFieldWithDefault(msg, 16, ""),
    zipVerified: jspb.Message.getFieldWithDefault(msg, 17, ""),
    routingNo: jspb.Message.getFieldWithDefault(msg, 18, ""),
    iban: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isPayrollAccount: jspb.Message.getBooleanFieldWithDefault(msg, 20, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateCustomerBankAccountRequest}
 */
proto.data.CreateCustomerBankAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateCustomerBankAccountRequest;
  return proto.data.CreateCustomerBankAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateCustomerBankAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateCustomerBankAccountRequest}
 */
proto.data.CreateCustomerBankAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverLicense(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialSecurityNumber(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setZip(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankAccountType(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAch(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressVerified(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipVerified(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingNo(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setIban(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayrollAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateCustomerBankAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateCustomerBankAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateCustomerBankAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCustomerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDriverLicense();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSocialSecurityNumber();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getZip();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBankAccountType();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIsAch();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getAddressVerified();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getZipVerified();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getRoutingNo();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIban();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsPayrollAccount();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
*/
proto.data.CreateCustomerBankAccountRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_uuid = 2;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getCustomerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setCustomerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pos_uuid = 3;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string driver_license = 7;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getDriverLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setDriverLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string social_security_number = 8;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getSocialSecurityNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setSocialSecurityNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string state = 10;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string street = 11;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string zip = 12;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getZip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setZip = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string bank_account_type = 13;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getBankAccountType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setBankAccountType = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string bank_uuid = 14;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool is_ach = 15;
 * @return {boolean}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getIsAch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setIsAch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string address_verified = 16;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getAddressVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setAddressVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string zip_verified = 17;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getZipVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setZipVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string routing_no = 18;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getRoutingNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setRoutingNo = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string iban = 19;
 * @return {string}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getIban = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setIban = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_payroll_account = 20;
 * @return {boolean}
 */
proto.data.CreateCustomerBankAccountRequest.prototype.getIsPayrollAccount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.CreateCustomerBankAccountRequest} returns this
 */
proto.data.CreateCustomerBankAccountRequest.prototype.setIsPayrollAccount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateCustomerBankAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateCustomerBankAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateCustomerBankAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    customerBankAccountUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    country: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    driverLicense: jspb.Message.getFieldWithDefault(msg, 6, ""),
    socialSecurityNumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    state: jspb.Message.getFieldWithDefault(msg, 9, ""),
    street: jspb.Message.getFieldWithDefault(msg, 10, ""),
    zip: jspb.Message.getFieldWithDefault(msg, 11, ""),
    bankAccountType: jspb.Message.getFieldWithDefault(msg, 12, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    isAch: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    addressVerified: jspb.Message.getFieldWithDefault(msg, 15, ""),
    zipVerified: jspb.Message.getFieldWithDefault(msg, 16, ""),
    routingNo: jspb.Message.getFieldWithDefault(msg, 17, ""),
    iban: jspb.Message.getFieldWithDefault(msg, 18, ""),
    isPayrollAccount: jspb.Message.getBooleanFieldWithDefault(msg, 19, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateCustomerBankAccountRequest}
 */
proto.data.UpdateCustomerBankAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateCustomerBankAccountRequest;
  return proto.data.UpdateCustomerBankAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateCustomerBankAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateCustomerBankAccountRequest}
 */
proto.data.UpdateCustomerBankAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerBankAccountUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverLicense(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialSecurityNumber(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setZip(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankAccountType(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAch(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressVerified(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipVerified(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingNo(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setIban(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayrollAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateCustomerBankAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateCustomerBankAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateCustomerBankAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCustomerBankAccountUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDriverLicense();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSocialSecurityNumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getZip();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBankAccountType();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIsAch();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getAddressVerified();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getZipVerified();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRoutingNo();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIban();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIsPayrollAccount();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
*/
proto.data.UpdateCustomerBankAccountRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_bank_account_uuid = 2;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getCustomerBankAccountUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setCustomerBankAccountUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string country = 4;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string driver_license = 6;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getDriverLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setDriverLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string social_security_number = 7;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getSocialSecurityNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setSocialSecurityNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string state = 9;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string street = 10;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string zip = 11;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getZip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setZip = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string bank_account_type = 12;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getBankAccountType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setBankAccountType = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string bank_uuid = 13;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool is_ach = 14;
 * @return {boolean}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getIsAch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setIsAch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string address_verified = 15;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getAddressVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setAddressVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string zip_verified = 16;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getZipVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setZipVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string routing_no = 17;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getRoutingNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setRoutingNo = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string iban = 18;
 * @return {string}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getIban = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setIban = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool is_payroll_account = 19;
 * @return {boolean}
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.getIsPayrollAccount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.UpdateCustomerBankAccountRequest} returns this
 */
proto.data.UpdateCustomerBankAccountRequest.prototype.setIsPayrollAccount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteCustomerBankAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteCustomerBankAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteCustomerBankAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    customerBankAccountUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeleteCustomerBankAccountRequest}
 */
proto.data.DeleteCustomerBankAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteCustomerBankAccountRequest;
  return proto.data.DeleteCustomerBankAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteCustomerBankAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteCustomerBankAccountRequest}
 */
proto.data.DeleteCustomerBankAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerBankAccountUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteCustomerBankAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteCustomerBankAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteCustomerBankAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCustomerBankAccountUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteCustomerBankAccountRequest} returns this
*/
proto.data.DeleteCustomerBankAccountRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteCustomerBankAccountRequest} returns this
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_bank_account_uuid = 2;
 * @return {string}
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.getCustomerBankAccountUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteCustomerBankAccountRequest} returns this
 */
proto.data.DeleteCustomerBankAccountRequest.prototype.setCustomerBankAccountUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetCustomerBankAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetCustomerBankAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetCustomerBankAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetCustomerBankAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    customerBankAccountUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetCustomerBankAccountRequest}
 */
proto.data.GetCustomerBankAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetCustomerBankAccountRequest;
  return proto.data.GetCustomerBankAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetCustomerBankAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetCustomerBankAccountRequest}
 */
proto.data.GetCustomerBankAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerBankAccountUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetCustomerBankAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetCustomerBankAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetCustomerBankAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetCustomerBankAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCustomerBankAccountUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetCustomerBankAccountRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetCustomerBankAccountRequest} returns this
*/
proto.data.GetCustomerBankAccountRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetCustomerBankAccountRequest} returns this
 */
proto.data.GetCustomerBankAccountRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetCustomerBankAccountRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string customer_bank_account_uuid = 2;
 * @return {string}
 */
proto.data.GetCustomerBankAccountRequest.prototype.getCustomerBankAccountUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerBankAccountRequest} returns this
 */
proto.data.GetCustomerBankAccountRequest.prototype.setCustomerBankAccountUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CustomerBankAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CustomerBankAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CustomerBankAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CustomerBankAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerBankAccountUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    country: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    driverLicense: jspb.Message.getFieldWithDefault(msg, 6, ""),
    socialSecurityNumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    state: jspb.Message.getFieldWithDefault(msg, 9, ""),
    street: jspb.Message.getFieldWithDefault(msg, 10, ""),
    zip: jspb.Message.getFieldWithDefault(msg, 11, ""),
    bankAccountType: jspb.Message.getFieldWithDefault(msg, 12, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    isAch: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    addressVerified: jspb.Message.getFieldWithDefault(msg, 15, ""),
    zipVerified: jspb.Message.getFieldWithDefault(msg, 16, ""),
    routingNo: jspb.Message.getFieldWithDefault(msg, 17, ""),
    iban: jspb.Message.getFieldWithDefault(msg, 18, ""),
    isPayrollAccount: jspb.Message.getBooleanFieldWithDefault(msg, 19, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CustomerBankAccount}
 */
proto.data.CustomerBankAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CustomerBankAccount;
  return proto.data.CustomerBankAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CustomerBankAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CustomerBankAccount}
 */
proto.data.CustomerBankAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerBankAccountUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverLicense(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialSecurityNumber(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setZip(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankAccountType(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAch(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressVerified(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipVerified(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingNo(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setIban(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayrollAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CustomerBankAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CustomerBankAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CustomerBankAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CustomerBankAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerBankAccountUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDriverLicense();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSocialSecurityNumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getZip();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBankAccountType();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIsAch();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getAddressVerified();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getZipVerified();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRoutingNo();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIban();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIsPayrollAccount();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
};


/**
 * optional string customer_uuid = 1;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getCustomerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setCustomerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_bank_account_uuid = 2;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getCustomerBankAccountUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setCustomerBankAccountUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string country = 4;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string driver_license = 6;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getDriverLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setDriverLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string social_security_number = 7;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getSocialSecurityNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setSocialSecurityNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string state = 9;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string street = 10;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string zip = 11;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getZip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setZip = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string bank_account_type = 12;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getBankAccountType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setBankAccountType = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string bank_uuid = 13;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool is_ach = 14;
 * @return {boolean}
 */
proto.data.CustomerBankAccount.prototype.getIsAch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setIsAch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string address_verified = 15;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getAddressVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setAddressVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string zip_verified = 16;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getZipVerified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setZipVerified = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string routing_no = 17;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getRoutingNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setRoutingNo = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string iban = 18;
 * @return {string}
 */
proto.data.CustomerBankAccount.prototype.getIban = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setIban = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool is_payroll_account = 19;
 * @return {boolean}
 */
proto.data.CustomerBankAccount.prototype.getIsPayrollAccount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.CustomerBankAccount} returns this
 */
proto.data.CustomerBankAccount.prototype.setIsPayrollAccount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PrintTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PrintTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PrintTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrintTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PrintTicketRequest}
 */
proto.data.PrintTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PrintTicketRequest;
  return proto.data.PrintTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PrintTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PrintTicketRequest}
 */
proto.data.PrintTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PrintTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PrintTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PrintTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrintTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.PrintTicketRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.PrintTicketRequest} returns this
*/
proto.data.PrintTicketRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PrintTicketRequest} returns this
 */
proto.data.PrintTicketRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PrintTicketRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.PrintTicketRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrintTicketRequest} returns this
 */
proto.data.PrintTicketRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_uuid = 3;
 * @return {string}
 */
proto.data.PrintTicketRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrintTicketRequest} returns this
 */
proto.data.PrintTicketRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PrintTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PrintTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PrintTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrintTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PrintTicketResponse}
 */
proto.data.PrintTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PrintTicketResponse;
  return proto.data.PrintTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PrintTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PrintTicketResponse}
 */
proto.data.PrintTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PrintTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PrintTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PrintTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrintTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.data.PrintTicketResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrintTicketResponse} returns this
 */
proto.data.PrintTicketResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetAvailableRefundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetAvailableRefundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetAvailableRefundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAvailableRefundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetAvailableRefundRequest}
 */
proto.data.GetAvailableRefundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetAvailableRefundRequest;
  return proto.data.GetAvailableRefundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetAvailableRefundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetAvailableRefundRequest}
 */
proto.data.GetAvailableRefundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetAvailableRefundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetAvailableRefundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetAvailableRefundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAvailableRefundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetAvailableRefundRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetAvailableRefundRequest} returns this
*/
proto.data.GetAvailableRefundRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetAvailableRefundRequest} returns this
 */
proto.data.GetAvailableRefundRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetAvailableRefundRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.GetAvailableRefundRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAvailableRefundRequest} returns this
 */
proto.data.GetAvailableRefundRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date = 3;
 * @return {string}
 */
proto.data.GetAvailableRefundRequest.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAvailableRefundRequest} returns this
 */
proto.data.GetAvailableRefundRequest.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.AvailableRefund.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.AvailableRefund.prototype.toObject = function(opt_includeInstance) {
  return proto.data.AvailableRefund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.AvailableRefund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableRefund.toObject = function(includeInstance, msg) {
  var f, obj = {
    refund: (f = msg.getRefund()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    tenderTypeRefundsList: jspb.Message.toObjectList(msg.getTenderTypeRefundsList(),
    proto.data.TenderTypeRefund.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.AvailableRefund}
 */
proto.data.AvailableRefund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.AvailableRefund;
  return proto.data.AvailableRefund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.AvailableRefund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.AvailableRefund}
 */
proto.data.AvailableRefund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setRefund(value);
      break;
    case 2:
      var value = new proto.data.TenderTypeRefund;
      reader.readMessage(value,proto.data.TenderTypeRefund.deserializeBinaryFromReader);
      msg.addTenderTypeRefunds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.AvailableRefund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.AvailableRefund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.AvailableRefund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableRefund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefund();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getTenderTypeRefundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.TenderTypeRefund.serializeBinaryToWriter
    );
  }
};


/**
 * optional Decimal refund = 1;
 * @return {?proto.data.Decimal}
 */
proto.data.AvailableRefund.prototype.getRefund = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 1));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.AvailableRefund} returns this
*/
proto.data.AvailableRefund.prototype.setRefund = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.AvailableRefund} returns this
 */
proto.data.AvailableRefund.prototype.clearRefund = function() {
  return this.setRefund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.AvailableRefund.prototype.hasRefund = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TenderTypeRefund tender_type_refunds = 2;
 * @return {!Array<!proto.data.TenderTypeRefund>}
 */
proto.data.AvailableRefund.prototype.getTenderTypeRefundsList = function() {
  return /** @type{!Array<!proto.data.TenderTypeRefund>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.TenderTypeRefund, 2));
};


/**
 * @param {!Array<!proto.data.TenderTypeRefund>} value
 * @return {!proto.data.AvailableRefund} returns this
*/
proto.data.AvailableRefund.prototype.setTenderTypeRefundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.TenderTypeRefund=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.TenderTypeRefund}
 */
proto.data.AvailableRefund.prototype.addTenderTypeRefunds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.TenderTypeRefund, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.AvailableRefund} returns this
 */
proto.data.AvailableRefund.prototype.clearTenderTypeRefundsList = function() {
  return this.setTenderTypeRefundsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.TenderTypeRefund.prototype.toObject = function(opt_includeInstance) {
  return proto.data.TenderTypeRefund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.TenderTypeRefund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TenderTypeRefund.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenderType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refund: (f = msg.getRefund()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.TenderTypeRefund}
 */
proto.data.TenderTypeRefund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.TenderTypeRefund;
  return proto.data.TenderTypeRefund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.TenderTypeRefund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.TenderTypeRefund}
 */
proto.data.TenderTypeRefund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenderType(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setRefund(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.TenderTypeRefund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.TenderTypeRefund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.TenderTypeRefund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.TenderTypeRefund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenderType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefund();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tender_type = 1;
 * @return {string}
 */
proto.data.TenderTypeRefund.prototype.getTenderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.TenderTypeRefund} returns this
 */
proto.data.TenderTypeRefund.prototype.setTenderType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Decimal refund = 2;
 * @return {?proto.data.Decimal}
 */
proto.data.TenderTypeRefund.prototype.getRefund = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 2));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.TenderTypeRefund} returns this
*/
proto.data.TenderTypeRefund.prototype.setRefund = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.TenderTypeRefund} returns this
 */
proto.data.TenderTypeRefund.prototype.clearRefund = function() {
  return this.setRefund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.TenderTypeRefund.prototype.hasRefund = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    taxId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    duns: jspb.Message.getFieldWithDefault(msg, 4, ""),
    naics: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contactName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    email: jspb.Message.getFieldWithDefault(msg, 10, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    businessPartnerGroupUuid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    address1: jspb.Message.getFieldWithDefault(msg, 13, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 14, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 15, ""),
    address4: jspb.Message.getFieldWithDefault(msg, 16, ""),
    cityUuid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    cityName: jspb.Message.getFieldWithDefault(msg, 18, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 19, ""),
    regionUuid: jspb.Message.getFieldWithDefault(msg, 20, ""),
    regionName: jspb.Message.getFieldWithDefault(msg, 21, ""),
    countryUuid: jspb.Message.getFieldWithDefault(msg, 22, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 23, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateCustomerRequest}
 */
proto.data.CreateCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateCustomerRequest;
  return proto.data.CreateCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateCustomerRequest}
 */
proto.data.CreateCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuns(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNaics(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessPartnerGroupUuid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress4(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityUuid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityName(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionUuid(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionName(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryUuid(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaxId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDuns();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNaics();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContactName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBusinessPartnerGroupUuid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getAddress4();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCityUuid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCityName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getRegionUuid();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getRegionName();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getCountryUuid();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateCustomerRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateCustomerRequest} returns this
*/
proto.data.CreateCustomerRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateCustomerRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tax_id = 3;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getTaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setTaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string duns = 4;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getDuns = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setDuns = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string naics = 5;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getNaics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setNaics = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string last_name = 7;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string contact_name = 9;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getContactName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setContactName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string email = 10;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string phone = 11;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string business_partner_group_uuid = 12;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getBusinessPartnerGroupUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setBusinessPartnerGroupUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string address1 = 13;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string address2 = 14;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string address3 = 15;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string address4 = 16;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getAddress4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setAddress4 = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string city_uuid = 17;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getCityUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setCityUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string city_name = 18;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getCityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setCityName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string postal_code = 19;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string region_uuid = 20;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getRegionUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setRegionUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string region_name = 21;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getRegionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setRegionName = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string country_uuid = 22;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getCountryUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setCountryUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string pos_uuid = 23;
 * @return {string}
 */
proto.data.CreateCustomerRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateCustomerRequest} returns this
 */
proto.data.CreateCustomerRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    taxId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    duns: jspb.Message.getFieldWithDefault(msg, 5, ""),
    naics: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    contactName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    email: jspb.Message.getFieldWithDefault(msg, 11, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 12, ""),
    address1: jspb.Message.getFieldWithDefault(msg, 13, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 14, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 15, ""),
    address4: jspb.Message.getFieldWithDefault(msg, 16, ""),
    cityUuid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    cityName: jspb.Message.getFieldWithDefault(msg, 18, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 19, ""),
    regionUuid: jspb.Message.getFieldWithDefault(msg, 20, ""),
    regionName: jspb.Message.getFieldWithDefault(msg, 21, ""),
    countryUuid: jspb.Message.getFieldWithDefault(msg, 22, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 23, ""),
    addressUuid: jspb.Message.getFieldWithDefault(msg, 24, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateCustomerRequest}
 */
proto.data.UpdateCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateCustomerRequest;
  return proto.data.UpdateCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateCustomerRequest}
 */
proto.data.UpdateCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuns(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNaics(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress4(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityUuid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityName(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionUuid(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionName(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryUuid(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTaxId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDuns();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNaics();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getContactName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getAddress4();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCityUuid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCityName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getRegionUuid();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getRegionName();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getCountryUuid();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getAddressUuid();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateCustomerRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
*/
proto.data.UpdateCustomerRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateCustomerRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tax_id = 4;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getTaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setTaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string duns = 5;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getDuns = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setDuns = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string naics = 6;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getNaics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setNaics = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string last_name = 8;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string contact_name = 10;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getContactName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setContactName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string email = 11;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string address1 = 13;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string address2 = 14;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string address3 = 15;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string address4 = 16;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getAddress4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setAddress4 = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string city_uuid = 17;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getCityUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setCityUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string city_name = 18;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getCityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setCityName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string postal_code = 19;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string region_uuid = 20;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getRegionUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setRegionUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string region_name = 21;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getRegionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setRegionName = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string country_uuid = 22;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getCountryUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setCountryUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string pos_uuid = 23;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string address_uuid = 24;
 * @return {string}
 */
proto.data.UpdateCustomerRequest.prototype.getAddressUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateCustomerRequest} returns this
 */
proto.data.UpdateCustomerRequest.prototype.setAddressUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    searchValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contactName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetCustomerRequest}
 */
proto.data.GetCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetCustomerRequest;
  return proto.data.GetCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetCustomerRequest}
 */
proto.data.GetCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContactName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetCustomerRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetCustomerRequest} returns this
*/
proto.data.GetCustomerRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetCustomerRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string search_value = 2;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string contact_name = 6;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getContactName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setContactName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string postal_code = 8;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string phone = 9;
 * @return {string}
 */
proto.data.GetCustomerRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetCustomerRequest} returns this
 */
proto.data.GetCustomerRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.Customer.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    taxId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    duns: jspb.Message.getFieldWithDefault(msg, 5, ""),
    naics: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.data.Address.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Customer}
 */
proto.data.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Customer;
  return proto.data.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Customer}
 */
proto.data.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuns(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNaics(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = new proto.data.Address;
      reader.readMessage(value,proto.data.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTaxId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDuns();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNaics();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.data.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Customer.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Customer.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.Customer.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tax_id = 4;
 * @return {string}
 */
proto.data.Customer.prototype.getTaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setTaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string duns = 5;
 * @return {string}
 */
proto.data.Customer.prototype.getDuns = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setDuns = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string naics = 6;
 * @return {string}
 */
proto.data.Customer.prototype.getNaics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setNaics = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.data.Customer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string last_name = 8;
 * @return {string}
 */
proto.data.Customer.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.data.Customer.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated Address addresses = 10;
 * @return {!Array<!proto.data.Address>}
 */
proto.data.Customer.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.data.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Address, 10));
};


/**
 * @param {!Array<!proto.data.Address>} value
 * @return {!proto.data.Customer} returns this
*/
proto.data.Customer.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Address}
 */
proto.data.Customer.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.Customer} returns this
 */
proto.data.Customer.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    region: (f = msg.getRegion()) && proto.data.Region.toObject(includeInstance, f),
    city: (f = msg.getCity()) && proto.data.City.toObject(includeInstance, f),
    address1: jspb.Message.getFieldWithDefault(msg, 6, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 7, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 8, ""),
    address4: jspb.Message.getFieldWithDefault(msg, 9, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 10, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
    isDefaultShipping: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    isDefaultBilling: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Address}
 */
proto.data.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Address;
  return proto.data.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Address}
 */
proto.data.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = new proto.data.Region;
      reader.readMessage(value,proto.data.Region.deserializeBinaryFromReader);
      msg.setRegion(value);
      break;
    case 5:
      var value = new proto.data.City;
      reader.readMessage(value,proto.data.City.deserializeBinaryFromReader);
      msg.setCity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress4(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefaultShipping(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefaultBilling(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.data.Region.serializeBinaryToWriter
    );
  }
  f = message.getCity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.data.City.serializeBinaryToWriter
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAddress4();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getIsDefaultShipping();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIsDefaultBilling();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.Address.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.Address.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Region region = 4;
 * @return {?proto.data.Region}
 */
proto.data.Address.prototype.getRegion = function() {
  return /** @type{?proto.data.Region} */ (
    jspb.Message.getWrapperField(this, proto.data.Region, 4));
};


/**
 * @param {?proto.data.Region|undefined} value
 * @return {!proto.data.Address} returns this
*/
proto.data.Address.prototype.setRegion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.clearRegion = function() {
  return this.setRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Address.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional City city = 5;
 * @return {?proto.data.City}
 */
proto.data.Address.prototype.getCity = function() {
  return /** @type{?proto.data.City} */ (
    jspb.Message.getWrapperField(this, proto.data.City, 5));
};


/**
 * @param {?proto.data.City|undefined} value
 * @return {!proto.data.Address} returns this
*/
proto.data.Address.prototype.setCity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.clearCity = function() {
  return this.setCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Address.prototype.hasCity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string address1 = 6;
 * @return {string}
 */
proto.data.Address.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string address2 = 7;
 * @return {string}
 */
proto.data.Address.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string address3 = 8;
 * @return {string}
 */
proto.data.Address.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string address4 = 9;
 * @return {string}
 */
proto.data.Address.prototype.getAddress4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setAddress4 = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string phone = 10;
 * @return {string}
 */
proto.data.Address.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string postal_code = 11;
 * @return {string}
 */
proto.data.Address.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string country_code = 12;
 * @return {string}
 */
proto.data.Address.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool is_default_shipping = 13;
 * @return {boolean}
 */
proto.data.Address.prototype.getIsDefaultShipping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setIsDefaultShipping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool is_default_billing = 14;
 * @return {boolean}
 */
proto.data.Address.prototype.getIsDefaultBilling = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.Address} returns this
 */
proto.data.Address.prototype.setIsDefaultBilling = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.City.prototype.toObject = function(opt_includeInstance) {
  return proto.data.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.City}
 */
proto.data.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.City;
  return proto.data.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.City}
 */
proto.data.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.City.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.City} returns this
 */
proto.data.City.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.City.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.City} returns this
 */
proto.data.City.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.City.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.City} returns this
 */
proto.data.City.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Region.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Region.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Region} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Region.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Region}
 */
proto.data.Region.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Region;
  return proto.data.Region.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Region} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Region}
 */
proto.data.Region.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Region.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Region.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Region} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Region.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.Region.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Region} returns this
 */
proto.data.Region.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.Region.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Region} returns this
 */
proto.data.Region.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.Region.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Region} returns this
 */
proto.data.Region.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.AvailableWarehouse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.AvailableWarehouse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.AvailableWarehouse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableWarehouse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isPosRequiredPin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.AvailableWarehouse}
 */
proto.data.AvailableWarehouse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.AvailableWarehouse;
  return proto.data.AvailableWarehouse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.AvailableWarehouse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.AvailableWarehouse}
 */
proto.data.AvailableWarehouse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPosRequiredPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.AvailableWarehouse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.AvailableWarehouse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.AvailableWarehouse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableWarehouse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsPosRequiredPin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.AvailableWarehouse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.AvailableWarehouse} returns this
 */
proto.data.AvailableWarehouse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.AvailableWarehouse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableWarehouse} returns this
 */
proto.data.AvailableWarehouse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.data.AvailableWarehouse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableWarehouse} returns this
 */
proto.data.AvailableWarehouse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.data.AvailableWarehouse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableWarehouse} returns this
 */
proto.data.AvailableWarehouse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_pos_required_pin = 6;
 * @return {boolean}
 */
proto.data.AvailableWarehouse.prototype.getIsPosRequiredPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailableWarehouse} returns this
 */
proto.data.AvailableWarehouse.prototype.setIsPosRequiredPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.AvailablePaymentMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.data.AvailablePaymentMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.AvailablePaymentMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailablePaymentMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tenderType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isPosRequiredPin: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isAllowedToRefund: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isAllowedToRefundOpen: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    maximumRefundAllowed: (f = msg.getMaximumRefundAllowed()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    maximumDailyRefundAllowed: (f = msg.getMaximumDailyRefundAllowed()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    refundReferenceCurrency: (f = msg.getRefundReferenceCurrency()) && proto_core_functionality_pb.Currency.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.AvailablePaymentMethod}
 */
proto.data.AvailablePaymentMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.AvailablePaymentMethod;
  return proto.data.AvailablePaymentMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.AvailablePaymentMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.AvailablePaymentMethod}
 */
proto.data.AvailablePaymentMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenderType(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPosRequiredPin(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowedToRefund(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowedToRefundOpen(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMaximumRefundAllowed(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMaximumDailyRefundAllowed(value);
      break;
    case 12:
      var value = new proto_core_functionality_pb.Currency;
      reader.readMessage(value,proto_core_functionality_pb.Currency.deserializeBinaryFromReader);
      msg.setRefundReferenceCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.AvailablePaymentMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.AvailablePaymentMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.AvailablePaymentMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailablePaymentMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTenderType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsPosRequiredPin();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsAllowedToRefund();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsAllowedToRefundOpen();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getMaximumRefundAllowed();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getMaximumDailyRefundAllowed();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getRefundReferenceCurrency();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_core_functionality_pb.Currency.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.AvailablePaymentMethod.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.AvailablePaymentMethod.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.data.AvailablePaymentMethod.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.data.AvailablePaymentMethod.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string tender_type = 6;
 * @return {string}
 */
proto.data.AvailablePaymentMethod.prototype.getTenderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setTenderType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool is_pos_required_pin = 7;
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.getIsPosRequiredPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setIsPosRequiredPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_allowed_to_refund = 8;
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.getIsAllowedToRefund = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setIsAllowedToRefund = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_allowed_to_refund_open = 9;
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.getIsAllowedToRefundOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.setIsAllowedToRefundOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional Decimal maximum_refund_allowed = 10;
 * @return {?proto.data.Decimal}
 */
proto.data.AvailablePaymentMethod.prototype.getMaximumRefundAllowed = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 10));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
*/
proto.data.AvailablePaymentMethod.prototype.setMaximumRefundAllowed = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.clearMaximumRefundAllowed = function() {
  return this.setMaximumRefundAllowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.hasMaximumRefundAllowed = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Decimal maximum_daily_refund_allowed = 11;
 * @return {?proto.data.Decimal}
 */
proto.data.AvailablePaymentMethod.prototype.getMaximumDailyRefundAllowed = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 11));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
*/
proto.data.AvailablePaymentMethod.prototype.setMaximumDailyRefundAllowed = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.clearMaximumDailyRefundAllowed = function() {
  return this.setMaximumDailyRefundAllowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.hasMaximumDailyRefundAllowed = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Currency refund_reference_currency = 12;
 * @return {?proto.data.Currency}
 */
proto.data.AvailablePaymentMethod.prototype.getRefundReferenceCurrency = function() {
  return /** @type{?proto.data.Currency} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Currency, 12));
};


/**
 * @param {?proto.data.Currency|undefined} value
 * @return {!proto.data.AvailablePaymentMethod} returns this
*/
proto.data.AvailablePaymentMethod.prototype.setRefundReferenceCurrency = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.AvailablePaymentMethod} returns this
 */
proto.data.AvailablePaymentMethod.prototype.clearRefundReferenceCurrency = function() {
  return this.setRefundReferenceCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.AvailablePaymentMethod.prototype.hasRefundReferenceCurrency = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.AvailableDocumentType.prototype.toObject = function(opt_includeInstance) {
  return proto.data.AvailableDocumentType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.AvailableDocumentType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableDocumentType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isPosRequiredPin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.AvailableDocumentType}
 */
proto.data.AvailableDocumentType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.AvailableDocumentType;
  return proto.data.AvailableDocumentType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.AvailableDocumentType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.AvailableDocumentType}
 */
proto.data.AvailableDocumentType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPosRequiredPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.AvailableDocumentType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.AvailableDocumentType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.AvailableDocumentType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailableDocumentType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsPosRequiredPin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.AvailableDocumentType.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.AvailableDocumentType} returns this
 */
proto.data.AvailableDocumentType.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.AvailableDocumentType.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableDocumentType} returns this
 */
proto.data.AvailableDocumentType.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.data.AvailableDocumentType.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableDocumentType} returns this
 */
proto.data.AvailableDocumentType.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.data.AvailableDocumentType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailableDocumentType} returns this
 */
proto.data.AvailableDocumentType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_pos_required_pin = 6;
 * @return {boolean}
 */
proto.data.AvailableDocumentType.prototype.getIsPosRequiredPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailableDocumentType} returns this
 */
proto.data.AvailableDocumentType.prototype.setIsPosRequiredPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.AvailablePriceList.prototype.toObject = function(opt_includeInstance) {
  return proto.data.AvailablePriceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.AvailablePriceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailablePriceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isPosRequiredPin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.AvailablePriceList}
 */
proto.data.AvailablePriceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.AvailablePriceList;
  return proto.data.AvailablePriceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.AvailablePriceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.AvailablePriceList}
 */
proto.data.AvailablePriceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPosRequiredPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.AvailablePriceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.AvailablePriceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.AvailablePriceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.AvailablePriceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsPosRequiredPin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.AvailablePriceList.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.AvailablePriceList} returns this
 */
proto.data.AvailablePriceList.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.AvailablePriceList.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePriceList} returns this
 */
proto.data.AvailablePriceList.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.data.AvailablePriceList.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePriceList} returns this
 */
proto.data.AvailablePriceList.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.data.AvailablePriceList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.AvailablePriceList} returns this
 */
proto.data.AvailablePriceList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_pos_required_pin = 6;
 * @return {boolean}
 */
proto.data.AvailablePriceList.prototype.getIsPosRequiredPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.AvailablePriceList} returns this
 */
proto.data.AvailablePriceList.prototype.setIsPosRequiredPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableWarehousesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableWarehousesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableWarehousesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableWarehousesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableWarehousesRequest}
 */
proto.data.ListAvailableWarehousesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableWarehousesRequest;
  return proto.data.ListAvailableWarehousesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableWarehousesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableWarehousesRequest}
 */
proto.data.ListAvailableWarehousesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableWarehousesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableWarehousesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableWarehousesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableWarehousesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListAvailableWarehousesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListAvailableWarehousesRequest} returns this
*/
proto.data.ListAvailableWarehousesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListAvailableWarehousesRequest} returns this
 */
proto.data.ListAvailableWarehousesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListAvailableWarehousesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListAvailableWarehousesRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableWarehousesRequest} returns this
 */
proto.data.ListAvailableWarehousesRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListAvailableWarehousesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableWarehousesRequest} returns this
 */
proto.data.ListAvailableWarehousesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListAvailableWarehousesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableWarehousesRequest} returns this
 */
proto.data.ListAvailableWarehousesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableDocumentTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableDocumentTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableDocumentTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableDocumentTypesRequest}
 */
proto.data.ListAvailableDocumentTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableDocumentTypesRequest;
  return proto.data.ListAvailableDocumentTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableDocumentTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableDocumentTypesRequest}
 */
proto.data.ListAvailableDocumentTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableDocumentTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableDocumentTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableDocumentTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListAvailableDocumentTypesRequest} returns this
*/
proto.data.ListAvailableDocumentTypesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListAvailableDocumentTypesRequest} returns this
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableDocumentTypesRequest} returns this
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableDocumentTypesRequest} returns this
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableDocumentTypesRequest} returns this
 */
proto.data.ListAvailableDocumentTypesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListAvailableWarehousesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableWarehousesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableWarehousesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableWarehousesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableWarehousesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    warehousesList: jspb.Message.toObjectList(msg.getWarehousesList(),
    proto.data.AvailableWarehouse.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableWarehousesResponse}
 */
proto.data.ListAvailableWarehousesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableWarehousesResponse;
  return proto.data.ListAvailableWarehousesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableWarehousesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableWarehousesResponse}
 */
proto.data.ListAvailableWarehousesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.AvailableWarehouse;
      reader.readMessage(value,proto.data.AvailableWarehouse.deserializeBinaryFromReader);
      msg.addWarehouses(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableWarehousesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableWarehousesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableWarehousesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableWarehousesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWarehousesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.AvailableWarehouse.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListAvailableWarehousesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableWarehousesResponse} returns this
 */
proto.data.ListAvailableWarehousesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AvailableWarehouse warehouses = 2;
 * @return {!Array<!proto.data.AvailableWarehouse>}
 */
proto.data.ListAvailableWarehousesResponse.prototype.getWarehousesList = function() {
  return /** @type{!Array<!proto.data.AvailableWarehouse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.AvailableWarehouse, 2));
};


/**
 * @param {!Array<!proto.data.AvailableWarehouse>} value
 * @return {!proto.data.ListAvailableWarehousesResponse} returns this
*/
proto.data.ListAvailableWarehousesResponse.prototype.setWarehousesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.AvailableWarehouse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.AvailableWarehouse}
 */
proto.data.ListAvailableWarehousesResponse.prototype.addWarehouses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.AvailableWarehouse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListAvailableWarehousesResponse} returns this
 */
proto.data.ListAvailableWarehousesResponse.prototype.clearWarehousesList = function() {
  return this.setWarehousesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListAvailableWarehousesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableWarehousesResponse} returns this
 */
proto.data.ListAvailableWarehousesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailablePaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailablePaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailablePaymentMethodsRequest}
 */
proto.data.ListAvailablePaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailablePaymentMethodsRequest;
  return proto.data.ListAvailablePaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailablePaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailablePaymentMethodsRequest}
 */
proto.data.ListAvailablePaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailablePaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailablePaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListAvailablePaymentMethodsRequest} returns this
*/
proto.data.ListAvailablePaymentMethodsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListAvailablePaymentMethodsRequest} returns this
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePaymentMethodsRequest} returns this
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailablePaymentMethodsRequest} returns this
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePaymentMethodsRequest} returns this
 */
proto.data.ListAvailablePaymentMethodsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListAvailablePaymentMethodsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailablePaymentMethodsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailablePaymentMethodsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePaymentMethodsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    proto.data.AvailablePaymentMethod.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailablePaymentMethodsResponse}
 */
proto.data.ListAvailablePaymentMethodsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailablePaymentMethodsResponse;
  return proto.data.ListAvailablePaymentMethodsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailablePaymentMethodsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailablePaymentMethodsResponse}
 */
proto.data.ListAvailablePaymentMethodsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.AvailablePaymentMethod;
      reader.readMessage(value,proto.data.AvailablePaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailablePaymentMethodsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailablePaymentMethodsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePaymentMethodsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.AvailablePaymentMethod.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailablePaymentMethodsResponse} returns this
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AvailablePaymentMethod payment_methods = 2;
 * @return {!Array<!proto.data.AvailablePaymentMethod>}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.data.AvailablePaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.AvailablePaymentMethod, 2));
};


/**
 * @param {!Array<!proto.data.AvailablePaymentMethod>} value
 * @return {!proto.data.ListAvailablePaymentMethodsResponse} returns this
*/
proto.data.ListAvailablePaymentMethodsResponse.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.AvailablePaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.AvailablePaymentMethod}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.AvailablePaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListAvailablePaymentMethodsResponse} returns this
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePaymentMethodsResponse} returns this
 */
proto.data.ListAvailablePaymentMethodsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListAvailableDocumentTypesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableDocumentTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableDocumentTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableDocumentTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    documentTypesList: jspb.Message.toObjectList(msg.getDocumentTypesList(),
    proto.data.AvailableDocumentType.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableDocumentTypesResponse}
 */
proto.data.ListAvailableDocumentTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableDocumentTypesResponse;
  return proto.data.ListAvailableDocumentTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableDocumentTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableDocumentTypesResponse}
 */
proto.data.ListAvailableDocumentTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.AvailableDocumentType;
      reader.readMessage(value,proto.data.AvailableDocumentType.deserializeBinaryFromReader);
      msg.addDocumentTypes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableDocumentTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableDocumentTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableDocumentTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.AvailableDocumentType.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableDocumentTypesResponse} returns this
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AvailableDocumentType document_types = 2;
 * @return {!Array<!proto.data.AvailableDocumentType>}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.getDocumentTypesList = function() {
  return /** @type{!Array<!proto.data.AvailableDocumentType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.AvailableDocumentType, 2));
};


/**
 * @param {!Array<!proto.data.AvailableDocumentType>} value
 * @return {!proto.data.ListAvailableDocumentTypesResponse} returns this
*/
proto.data.ListAvailableDocumentTypesResponse.prototype.setDocumentTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.AvailableDocumentType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.AvailableDocumentType}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.addDocumentTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.AvailableDocumentType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListAvailableDocumentTypesResponse} returns this
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.clearDocumentTypesList = function() {
  return this.setDocumentTypesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableDocumentTypesResponse} returns this
 */
proto.data.ListAvailableDocumentTypesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailablePriceListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailablePriceListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailablePriceListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePriceListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailablePriceListRequest}
 */
proto.data.ListAvailablePriceListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailablePriceListRequest;
  return proto.data.ListAvailablePriceListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailablePriceListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailablePriceListRequest}
 */
proto.data.ListAvailablePriceListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailablePriceListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailablePriceListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailablePriceListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePriceListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListAvailablePriceListRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListAvailablePriceListRequest} returns this
*/
proto.data.ListAvailablePriceListRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListAvailablePriceListRequest} returns this
 */
proto.data.ListAvailablePriceListRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListAvailablePriceListRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListAvailablePriceListRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePriceListRequest} returns this
 */
proto.data.ListAvailablePriceListRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListAvailablePriceListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailablePriceListRequest} returns this
 */
proto.data.ListAvailablePriceListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListAvailablePriceListRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePriceListRequest} returns this
 */
proto.data.ListAvailablePriceListRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListAvailablePriceListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailablePriceListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailablePriceListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailablePriceListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePriceListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priceListList: jspb.Message.toObjectList(msg.getPriceListList(),
    proto.data.AvailablePriceList.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailablePriceListResponse}
 */
proto.data.ListAvailablePriceListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailablePriceListResponse;
  return proto.data.ListAvailablePriceListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailablePriceListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailablePriceListResponse}
 */
proto.data.ListAvailablePriceListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.AvailablePriceList;
      reader.readMessage(value,proto.data.AvailablePriceList.deserializeBinaryFromReader);
      msg.addPriceList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailablePriceListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailablePriceListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailablePriceListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailablePriceListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPriceListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.AvailablePriceList.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListAvailablePriceListResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailablePriceListResponse} returns this
 */
proto.data.ListAvailablePriceListResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AvailablePriceList price_list = 2;
 * @return {!Array<!proto.data.AvailablePriceList>}
 */
proto.data.ListAvailablePriceListResponse.prototype.getPriceListList = function() {
  return /** @type{!Array<!proto.data.AvailablePriceList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.AvailablePriceList, 2));
};


/**
 * @param {!Array<!proto.data.AvailablePriceList>} value
 * @return {!proto.data.ListAvailablePriceListResponse} returns this
*/
proto.data.ListAvailablePriceListResponse.prototype.setPriceListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.AvailablePriceList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.AvailablePriceList}
 */
proto.data.ListAvailablePriceListResponse.prototype.addPriceList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.AvailablePriceList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListAvailablePriceListResponse} returns this
 */
proto.data.ListAvailablePriceListResponse.prototype.clearPriceListList = function() {
  return this.setPriceListList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListAvailablePriceListResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailablePriceListResponse} returns this
 */
proto.data.ListAvailablePriceListResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableCurrenciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableCurrenciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableCurrenciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableCurrenciesRequest}
 */
proto.data.ListAvailableCurrenciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableCurrenciesRequest;
  return proto.data.ListAvailableCurrenciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableCurrenciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableCurrenciesRequest}
 */
proto.data.ListAvailableCurrenciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableCurrenciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableCurrenciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableCurrenciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListAvailableCurrenciesRequest} returns this
*/
proto.data.ListAvailableCurrenciesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListAvailableCurrenciesRequest} returns this
 */
proto.data.ListAvailableCurrenciesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableCurrenciesRequest} returns this
 */
proto.data.ListAvailableCurrenciesRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableCurrenciesRequest} returns this
 */
proto.data.ListAvailableCurrenciesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListAvailableCurrenciesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableCurrenciesRequest} returns this
 */
proto.data.ListAvailableCurrenciesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListAvailableCurrenciesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListAvailableCurrenciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListAvailableCurrenciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableCurrenciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currenciesList: jspb.Message.toObjectList(msg.getCurrenciesList(),
    proto_core_functionality_pb.Currency.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListAvailableCurrenciesResponse}
 */
proto.data.ListAvailableCurrenciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListAvailableCurrenciesResponse;
  return proto.data.ListAvailableCurrenciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListAvailableCurrenciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListAvailableCurrenciesResponse}
 */
proto.data.ListAvailableCurrenciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_core_functionality_pb.Currency;
      reader.readMessage(value,proto_core_functionality_pb.Currency.deserializeBinaryFromReader);
      msg.addCurrencies(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListAvailableCurrenciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListAvailableCurrenciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListAvailableCurrenciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCurrenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_core_functionality_pb.Currency.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListAvailableCurrenciesResponse} returns this
 */
proto.data.ListAvailableCurrenciesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Currency currencies = 2;
 * @return {!Array<!proto.data.Currency>}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.getCurrenciesList = function() {
  return /** @type{!Array<!proto.data.Currency>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_core_functionality_pb.Currency, 2));
};


/**
 * @param {!Array<!proto.data.Currency>} value
 * @return {!proto.data.ListAvailableCurrenciesResponse} returns this
*/
proto.data.ListAvailableCurrenciesResponse.prototype.setCurrenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Currency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Currency}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.addCurrencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Currency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListAvailableCurrenciesResponse} returns this
 */
proto.data.ListAvailableCurrenciesResponse.prototype.clearCurrenciesList = function() {
  return this.setCurrenciesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListAvailableCurrenciesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListAvailableCurrenciesResponse} returns this
 */
proto.data.ListAvailableCurrenciesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPointOfSalesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPointOfSalesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPointOfSalesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPointOfSalesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPointOfSalesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sellingPointsList: jspb.Message.toObjectList(msg.getSellingPointsList(),
    proto.data.PointOfSales.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPointOfSalesResponse}
 */
proto.data.ListPointOfSalesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPointOfSalesResponse;
  return proto.data.ListPointOfSalesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPointOfSalesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPointOfSalesResponse}
 */
proto.data.ListPointOfSalesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.PointOfSales;
      reader.readMessage(value,proto.data.PointOfSales.deserializeBinaryFromReader);
      msg.addSellingPoints(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPointOfSalesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPointOfSalesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPointOfSalesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPointOfSalesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSellingPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.PointOfSales.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPointOfSalesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPointOfSalesResponse} returns this
 */
proto.data.ListPointOfSalesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PointOfSales selling_points = 2;
 * @return {!Array<!proto.data.PointOfSales>}
 */
proto.data.ListPointOfSalesResponse.prototype.getSellingPointsList = function() {
  return /** @type{!Array<!proto.data.PointOfSales>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.PointOfSales, 2));
};


/**
 * @param {!Array<!proto.data.PointOfSales>} value
 * @return {!proto.data.ListPointOfSalesResponse} returns this
*/
proto.data.ListPointOfSalesResponse.prototype.setSellingPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PointOfSales=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PointOfSales}
 */
proto.data.ListPointOfSalesResponse.prototype.addSellingPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PointOfSales, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPointOfSalesResponse} returns this
 */
proto.data.ListPointOfSalesResponse.prototype.clearSellingPointsList = function() {
  return this.setSellingPointsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPointOfSalesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPointOfSalesResponse} returns this
 */
proto.data.ListPointOfSalesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListProductPriceResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProductPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProductPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProductPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProductPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productPricesList: jspb.Message.toObjectList(msg.getProductPricesList(),
    proto_core_functionality_pb.ProductPrice.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProductPriceResponse}
 */
proto.data.ListProductPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProductPriceResponse;
  return proto.data.ListProductPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProductPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProductPriceResponse}
 */
proto.data.ListProductPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_core_functionality_pb.ProductPrice;
      reader.readMessage(value,proto_core_functionality_pb.ProductPrice.deserializeBinaryFromReader);
      msg.addProductPrices(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProductPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProductPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProductPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProductPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProductPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_core_functionality_pb.ProductPrice.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListProductPriceResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProductPriceResponse} returns this
 */
proto.data.ListProductPriceResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProductPrice product_prices = 2;
 * @return {!Array<!proto.data.ProductPrice>}
 */
proto.data.ListProductPriceResponse.prototype.getProductPricesList = function() {
  return /** @type{!Array<!proto.data.ProductPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_core_functionality_pb.ProductPrice, 2));
};


/**
 * @param {!Array<!proto.data.ProductPrice>} value
 * @return {!proto.data.ListProductPriceResponse} returns this
*/
proto.data.ListProductPriceResponse.prototype.setProductPricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ProductPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ProductPrice}
 */
proto.data.ListProductPriceResponse.prototype.addProductPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ProductPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListProductPriceResponse} returns this
 */
proto.data.ListProductPriceResponse.prototype.clearProductPricesList = function() {
  return this.setProductPricesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListProductPriceResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceResponse} returns this
 */
proto.data.ListProductPriceResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListOrdersResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.data.Order.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListOrdersResponse}
 */
proto.data.ListOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListOrdersResponse;
  return proto.data.ListOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListOrdersResponse}
 */
proto.data.ListOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.Order;
      reader.readMessage(value,proto.data.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.Order.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListOrdersResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListOrdersResponse} returns this
 */
proto.data.ListOrdersResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Order orders = 2;
 * @return {!Array<!proto.data.Order>}
 */
proto.data.ListOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.data.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Order, 2));
};


/**
 * @param {!Array<!proto.data.Order>} value
 * @return {!proto.data.ListOrdersResponse} returns this
*/
proto.data.ListOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Order}
 */
proto.data.ListOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListOrdersResponse} returns this
 */
proto.data.ListOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListOrdersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersResponse} returns this
 */
proto.data.ListOrdersResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documentNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    businessPartnerUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    grandTotal: (f = msg.getGrandTotal()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    openAmount: (f = msg.getOpenAmount()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    isPaid: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isProcessed: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isAisleSeller: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isInvoiced: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    dateOrderedFrom: jspb.Message.getFieldWithDefault(msg, 11, ""),
    dateOrderedTo: jspb.Message.getFieldWithDefault(msg, 12, ""),
    salesRepresentativeUuid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 14, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 15, ""),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListOrdersRequest}
 */
proto.data.ListOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListOrdersRequest;
  return proto.data.ListOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListOrdersRequest}
 */
proto.data.ListOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentNo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessPartnerUuid(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setGrandTotal(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setOpenAmount(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProcessed(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAisleSeller(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInvoiced(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateOrderedFrom(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateOrderedTo(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesRepresentativeUuid(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 16:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentNo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBusinessPartnerUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGrandTotal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getOpenAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getIsPaid();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsProcessed();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsAisleSeller();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsInvoiced();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDateOrderedFrom();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDateOrderedTo();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSalesRepresentativeUuid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListOrdersRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListOrdersRequest} returns this
*/
proto.data.ListOrdersRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string document_no = 3;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getDocumentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setDocumentNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string business_partner_uuid = 4;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getBusinessPartnerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setBusinessPartnerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Decimal grand_total = 5;
 * @return {?proto.data.Decimal}
 */
proto.data.ListOrdersRequest.prototype.getGrandTotal = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 5));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ListOrdersRequest} returns this
*/
proto.data.ListOrdersRequest.prototype.setGrandTotal = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.clearGrandTotal = function() {
  return this.setGrandTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.hasGrandTotal = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Decimal open_amount = 6;
 * @return {?proto.data.Decimal}
 */
proto.data.ListOrdersRequest.prototype.getOpenAmount = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 6));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ListOrdersRequest} returns this
*/
proto.data.ListOrdersRequest.prototype.setOpenAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.clearOpenAmount = function() {
  return this.setOpenAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.hasOpenAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_paid = 7;
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.getIsPaid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setIsPaid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_processed = 8;
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.getIsProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setIsProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_aisle_seller = 9;
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.getIsAisleSeller = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setIsAisleSeller = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_invoiced = 10;
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.getIsInvoiced = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setIsInvoiced = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string date_ordered_from = 11;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getDateOrderedFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setDateOrderedFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string date_ordered_to = 12;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getDateOrderedTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setDateOrderedTo = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string sales_representative_uuid = 13;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getSalesRepresentativeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setSalesRepresentativeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 page_size = 14;
 * @return {number}
 */
proto.data.ListOrdersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string page_token = 15;
 * @return {string}
 */
proto.data.ListOrdersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional Criteria criteria = 16;
 * @return {?proto.data.Criteria}
 */
proto.data.ListOrdersRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 16));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListOrdersRequest} returns this
*/
proto.data.ListOrdersRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListOrdersRequest} returns this
 */
proto.data.ListOrdersRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListOrdersRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListOrderLinesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListOrderLinesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListOrderLinesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListOrderLinesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrderLinesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    orderLinesList: jspb.Message.toObjectList(msg.getOrderLinesList(),
    proto.data.OrderLine.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListOrderLinesResponse}
 */
proto.data.ListOrderLinesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListOrderLinesResponse;
  return proto.data.ListOrderLinesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListOrderLinesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListOrderLinesResponse}
 */
proto.data.ListOrderLinesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.OrderLine;
      reader.readMessage(value,proto.data.OrderLine.deserializeBinaryFromReader);
      msg.addOrderLines(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListOrderLinesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListOrderLinesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListOrderLinesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrderLinesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrderLinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.OrderLine.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListOrderLinesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListOrderLinesResponse} returns this
 */
proto.data.ListOrderLinesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated OrderLine order_lines = 2;
 * @return {!Array<!proto.data.OrderLine>}
 */
proto.data.ListOrderLinesResponse.prototype.getOrderLinesList = function() {
  return /** @type{!Array<!proto.data.OrderLine>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.OrderLine, 2));
};


/**
 * @param {!Array<!proto.data.OrderLine>} value
 * @return {!proto.data.ListOrderLinesResponse} returns this
*/
proto.data.ListOrderLinesResponse.prototype.setOrderLinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.OrderLine=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.OrderLine}
 */
proto.data.ListOrderLinesResponse.prototype.addOrderLines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.OrderLine, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListOrderLinesResponse} returns this
 */
proto.data.ListOrderLinesResponse.prototype.clearOrderLinesList = function() {
  return this.setOrderLinesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListOrderLinesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrderLinesResponse} returns this
 */
proto.data.ListOrderLinesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListOrderLinesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListOrderLinesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListOrderLinesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrderLinesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListOrderLinesRequest}
 */
proto.data.ListOrderLinesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListOrderLinesRequest;
  return proto.data.ListOrderLinesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListOrderLinesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListOrderLinesRequest}
 */
proto.data.ListOrderLinesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListOrderLinesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListOrderLinesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListOrderLinesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListOrderLinesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListOrderLinesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListOrderLinesRequest} returns this
*/
proto.data.ListOrderLinesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListOrderLinesRequest} returns this
 */
proto.data.ListOrderLinesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListOrderLinesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.ListOrderLinesRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrderLinesRequest} returns this
 */
proto.data.ListOrderLinesRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListOrderLinesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListOrderLinesRequest} returns this
 */
proto.data.ListOrderLinesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListOrderLinesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListOrderLinesRequest} returns this
 */
proto.data.ListOrderLinesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProductPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProductPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProductPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProductPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    searchValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    businessPartnerUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validFrom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProductPriceRequest}
 */
proto.data.ListProductPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProductPriceRequest;
  return proto.data.ListProductPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProductPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProductPriceRequest}
 */
proto.data.ListProductPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessPartnerUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidFrom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProductPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProductPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProductPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProductPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBusinessPartnerUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidFrom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListProductPriceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListProductPriceRequest} returns this
*/
proto.data.ListProductPriceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListProductPriceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string search_value = 2;
 * @return {string}
 */
proto.data.ListProductPriceRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string business_partner_uuid = 3;
 * @return {string}
 */
proto.data.ListProductPriceRequest.prototype.getBusinessPartnerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setBusinessPartnerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string valid_from = 4;
 * @return {string}
 */
proto.data.ListProductPriceRequest.prototype.getValidFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setValidFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pos_uuid = 5;
 * @return {string}
 */
proto.data.ListProductPriceRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Criteria criteria = 6;
 * @return {?proto.data.Criteria}
 */
proto.data.ListProductPriceRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 6));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListProductPriceRequest} returns this
*/
proto.data.ListProductPriceRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListProductPriceRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.data.ListProductPriceRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.data.ListProductPriceRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProductPriceRequest} returns this
 */
proto.data.ListProductPriceRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPointOfSalesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPointOfSalesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPointOfSalesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPointOfSalesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPointOfSalesRequest}
 */
proto.data.ListPointOfSalesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPointOfSalesRequest;
  return proto.data.ListPointOfSalesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPointOfSalesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPointOfSalesRequest}
 */
proto.data.ListPointOfSalesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPointOfSalesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPointOfSalesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPointOfSalesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPointOfSalesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPointOfSalesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPointOfSalesRequest} returns this
*/
proto.data.ListPointOfSalesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPointOfSalesRequest} returns this
 */
proto.data.ListPointOfSalesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPointOfSalesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListPointOfSalesRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPointOfSalesRequest} returns this
 */
proto.data.ListPointOfSalesRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListPointOfSalesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPointOfSalesRequest} returns this
 */
proto.data.ListPointOfSalesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListPointOfSalesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPointOfSalesRequest} returns this
 */
proto.data.ListPointOfSalesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PointOfSalesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PointOfSalesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PointOfSalesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PointOfSalesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PointOfSalesRequest}
 */
proto.data.PointOfSalesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PointOfSalesRequest;
  return proto.data.PointOfSalesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PointOfSalesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PointOfSalesRequest}
 */
proto.data.PointOfSalesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PointOfSalesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PointOfSalesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PointOfSalesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PointOfSalesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.PointOfSalesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.PointOfSalesRequest} returns this
*/
proto.data.PointOfSalesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSalesRequest} returns this
 */
proto.data.PointOfSalesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSalesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.PointOfSalesRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSalesRequest} returns this
 */
proto.data.PointOfSalesRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PointOfSales.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PointOfSales.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PointOfSales} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PointOfSales.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    help: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isModifyPrice: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isPosRequiredPin: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isAisleSeller: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isSharedPos: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    documentType: (f = msg.getDocumentType()) && proto_core_functionality_pb.DocumentType.toObject(includeInstance, f),
    cashBankAccount: (f = msg.getCashBankAccount()) && proto_core_functionality_pb.BankAccount.toObject(includeInstance, f),
    cashTransferBankAccount: (f = msg.getCashTransferBankAccount()) && proto_core_functionality_pb.BankAccount.toObject(includeInstance, f),
    salesRepresentative: (f = msg.getSalesRepresentative()) && proto_core_functionality_pb.SalesRepresentative.toObject(includeInstance, f),
    templateBusinessPartner: (f = msg.getTemplateBusinessPartner()) && proto_core_functionality_pb.BusinessPartner.toObject(includeInstance, f),
    priceList: (f = msg.getPriceList()) && proto_core_functionality_pb.PriceList.toObject(includeInstance, f),
    warehouse: (f = msg.getWarehouse()) && proto_core_functionality_pb.Warehouse.toObject(includeInstance, f),
    displayCurrency: (f = msg.getDisplayCurrency()) && proto_core_functionality_pb.Currency.toObject(includeInstance, f),
    conversionTypeUuid: jspb.Message.getFieldWithDefault(msg, 18, ""),
    keyLayoutUuid: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isAllowsModifyQuantity: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isAllowsReturnOrder: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isAllowsCollectOrder: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isAllowsCreateOrder: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isDisplayTaxAmount: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isDisplayDiscount: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    maximumRefundAllowed: (f = msg.getMaximumRefundAllowed()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    maximumDailyRefundAllowed: (f = msg.getMaximumDailyRefundAllowed()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    refundReferenceCurrency: (f = msg.getRefundReferenceCurrency()) && proto_core_functionality_pb.Currency.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PointOfSales}
 */
proto.data.PointOfSales.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PointOfSales;
  return proto.data.PointOfSales.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PointOfSales} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PointOfSales}
 */
proto.data.PointOfSales.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsModifyPrice(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPosRequiredPin(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAisleSeller(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSharedPos(value);
      break;
    case 10:
      var value = new proto_core_functionality_pb.DocumentType;
      reader.readMessage(value,proto_core_functionality_pb.DocumentType.deserializeBinaryFromReader);
      msg.setDocumentType(value);
      break;
    case 11:
      var value = new proto_core_functionality_pb.BankAccount;
      reader.readMessage(value,proto_core_functionality_pb.BankAccount.deserializeBinaryFromReader);
      msg.setCashBankAccount(value);
      break;
    case 12:
      var value = new proto_core_functionality_pb.BankAccount;
      reader.readMessage(value,proto_core_functionality_pb.BankAccount.deserializeBinaryFromReader);
      msg.setCashTransferBankAccount(value);
      break;
    case 13:
      var value = new proto_core_functionality_pb.SalesRepresentative;
      reader.readMessage(value,proto_core_functionality_pb.SalesRepresentative.deserializeBinaryFromReader);
      msg.setSalesRepresentative(value);
      break;
    case 14:
      var value = new proto_core_functionality_pb.BusinessPartner;
      reader.readMessage(value,proto_core_functionality_pb.BusinessPartner.deserializeBinaryFromReader);
      msg.setTemplateBusinessPartner(value);
      break;
    case 15:
      var value = new proto_core_functionality_pb.PriceList;
      reader.readMessage(value,proto_core_functionality_pb.PriceList.deserializeBinaryFromReader);
      msg.setPriceList(value);
      break;
    case 16:
      var value = new proto_core_functionality_pb.Warehouse;
      reader.readMessage(value,proto_core_functionality_pb.Warehouse.deserializeBinaryFromReader);
      msg.setWarehouse(value);
      break;
    case 17:
      var value = new proto_core_functionality_pb.Currency;
      reader.readMessage(value,proto_core_functionality_pb.Currency.deserializeBinaryFromReader);
      msg.setDisplayCurrency(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversionTypeUuid(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyLayoutUuid(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowsModifyQuantity(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowsReturnOrder(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowsCollectOrder(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllowsCreateOrder(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDisplayTaxAmount(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDisplayDiscount(value);
      break;
    case 26:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMaximumRefundAllowed(value);
      break;
    case 27:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMaximumDailyRefundAllowed(value);
      break;
    case 28:
      var value = new proto_core_functionality_pb.Currency;
      reader.readMessage(value,proto_core_functionality_pb.Currency.deserializeBinaryFromReader);
      msg.setRefundReferenceCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PointOfSales.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PointOfSales.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PointOfSales} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PointOfSales.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsModifyPrice();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsPosRequiredPin();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsAisleSeller();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsSharedPos();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDocumentType();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_core_functionality_pb.DocumentType.serializeBinaryToWriter
    );
  }
  f = message.getCashBankAccount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_core_functionality_pb.BankAccount.serializeBinaryToWriter
    );
  }
  f = message.getCashTransferBankAccount();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_core_functionality_pb.BankAccount.serializeBinaryToWriter
    );
  }
  f = message.getSalesRepresentative();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_core_functionality_pb.SalesRepresentative.serializeBinaryToWriter
    );
  }
  f = message.getTemplateBusinessPartner();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_core_functionality_pb.BusinessPartner.serializeBinaryToWriter
    );
  }
  f = message.getPriceList();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_core_functionality_pb.PriceList.serializeBinaryToWriter
    );
  }
  f = message.getWarehouse();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_core_functionality_pb.Warehouse.serializeBinaryToWriter
    );
  }
  f = message.getDisplayCurrency();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_core_functionality_pb.Currency.serializeBinaryToWriter
    );
  }
  f = message.getConversionTypeUuid();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getKeyLayoutUuid();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsAllowsModifyQuantity();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsAllowsReturnOrder();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsAllowsCollectOrder();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsAllowsCreateOrder();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getIsDisplayTaxAmount();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getIsDisplayDiscount();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getMaximumRefundAllowed();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getMaximumDailyRefundAllowed();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getRefundReferenceCurrency();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_core_functionality_pb.Currency.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.PointOfSales.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string help = 5;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_modify_price = 6;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsModifyPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsModifyPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_pos_required_pin = 7;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsPosRequiredPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsPosRequiredPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_aisle_seller = 8;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsAisleSeller = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsAisleSeller = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_shared_pos = 9;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsSharedPos = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsSharedPos = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional DocumentType document_type = 10;
 * @return {?proto.data.DocumentType}
 */
proto.data.PointOfSales.prototype.getDocumentType = function() {
  return /** @type{?proto.data.DocumentType} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.DocumentType, 10));
};


/**
 * @param {?proto.data.DocumentType|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setDocumentType = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearDocumentType = function() {
  return this.setDocumentType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasDocumentType = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BankAccount cash_bank_account = 11;
 * @return {?proto.data.BankAccount}
 */
proto.data.PointOfSales.prototype.getCashBankAccount = function() {
  return /** @type{?proto.data.BankAccount} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.BankAccount, 11));
};


/**
 * @param {?proto.data.BankAccount|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setCashBankAccount = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearCashBankAccount = function() {
  return this.setCashBankAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasCashBankAccount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BankAccount cash_transfer_bank_account = 12;
 * @return {?proto.data.BankAccount}
 */
proto.data.PointOfSales.prototype.getCashTransferBankAccount = function() {
  return /** @type{?proto.data.BankAccount} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.BankAccount, 12));
};


/**
 * @param {?proto.data.BankAccount|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setCashTransferBankAccount = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearCashTransferBankAccount = function() {
  return this.setCashTransferBankAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasCashTransferBankAccount = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SalesRepresentative sales_representative = 13;
 * @return {?proto.data.SalesRepresentative}
 */
proto.data.PointOfSales.prototype.getSalesRepresentative = function() {
  return /** @type{?proto.data.SalesRepresentative} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.SalesRepresentative, 13));
};


/**
 * @param {?proto.data.SalesRepresentative|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setSalesRepresentative = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearSalesRepresentative = function() {
  return this.setSalesRepresentative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasSalesRepresentative = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional BusinessPartner template_business_partner = 14;
 * @return {?proto.data.BusinessPartner}
 */
proto.data.PointOfSales.prototype.getTemplateBusinessPartner = function() {
  return /** @type{?proto.data.BusinessPartner} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.BusinessPartner, 14));
};


/**
 * @param {?proto.data.BusinessPartner|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setTemplateBusinessPartner = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearTemplateBusinessPartner = function() {
  return this.setTemplateBusinessPartner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasTemplateBusinessPartner = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PriceList price_list = 15;
 * @return {?proto.data.PriceList}
 */
proto.data.PointOfSales.prototype.getPriceList = function() {
  return /** @type{?proto.data.PriceList} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.PriceList, 15));
};


/**
 * @param {?proto.data.PriceList|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setPriceList = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearPriceList = function() {
  return this.setPriceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasPriceList = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Warehouse warehouse = 16;
 * @return {?proto.data.Warehouse}
 */
proto.data.PointOfSales.prototype.getWarehouse = function() {
  return /** @type{?proto.data.Warehouse} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Warehouse, 16));
};


/**
 * @param {?proto.data.Warehouse|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setWarehouse = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearWarehouse = function() {
  return this.setWarehouse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasWarehouse = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Currency display_currency = 17;
 * @return {?proto.data.Currency}
 */
proto.data.PointOfSales.prototype.getDisplayCurrency = function() {
  return /** @type{?proto.data.Currency} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Currency, 17));
};


/**
 * @param {?proto.data.Currency|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setDisplayCurrency = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearDisplayCurrency = function() {
  return this.setDisplayCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasDisplayCurrency = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string conversion_type_uuid = 18;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getConversionTypeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setConversionTypeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string key_layout_uuid = 19;
 * @return {string}
 */
proto.data.PointOfSales.prototype.getKeyLayoutUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setKeyLayoutUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_allows_modify_quantity = 20;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsAllowsModifyQuantity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsAllowsModifyQuantity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool is_allows_return_order = 21;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsAllowsReturnOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsAllowsReturnOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_allows_collect_order = 22;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsAllowsCollectOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsAllowsCollectOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool is_allows_create_order = 23;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsAllowsCreateOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsAllowsCreateOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool is_display_tax_amount = 24;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsDisplayTaxAmount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsDisplayTaxAmount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool is_display_discount = 25;
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.getIsDisplayDiscount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.setIsDisplayDiscount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional Decimal maximum_refund_allowed = 26;
 * @return {?proto.data.Decimal}
 */
proto.data.PointOfSales.prototype.getMaximumRefundAllowed = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 26));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setMaximumRefundAllowed = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearMaximumRefundAllowed = function() {
  return this.setMaximumRefundAllowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasMaximumRefundAllowed = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Decimal maximum_daily_refund_allowed = 27;
 * @return {?proto.data.Decimal}
 */
proto.data.PointOfSales.prototype.getMaximumDailyRefundAllowed = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 27));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setMaximumDailyRefundAllowed = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearMaximumDailyRefundAllowed = function() {
  return this.setMaximumDailyRefundAllowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasMaximumDailyRefundAllowed = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Currency refund_reference_currency = 28;
 * @return {?proto.data.Currency}
 */
proto.data.PointOfSales.prototype.getRefundReferenceCurrency = function() {
  return /** @type{?proto.data.Currency} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Currency, 28));
};


/**
 * @param {?proto.data.Currency|undefined} value
 * @return {!proto.data.PointOfSales} returns this
*/
proto.data.PointOfSales.prototype.setRefundReferenceCurrency = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PointOfSales} returns this
 */
proto.data.PointOfSales.prototype.clearRefundReferenceCurrency = function() {
  return this.setRefundReferenceCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PointOfSales.prototype.hasRefundReferenceCurrency = function() {
  return jspb.Message.getField(this, 28) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    documentTypeUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    priceListUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    warehouseUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    salesRepresentativeUuid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateOrderRequest}
 */
proto.data.CreateOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateOrderRequest;
  return proto.data.CreateOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateOrderRequest}
 */
proto.data.CreateOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentTypeUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriceListUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalesRepresentativeUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentTypeUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPriceListUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWarehouseUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSalesRepresentativeUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateOrderRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateOrderRequest} returns this
*/
proto.data.CreateOrderRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateOrderRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_uuid = 3;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getCustomerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setCustomerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string document_type_uuid = 4;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getDocumentTypeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setDocumentTypeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string price_list_uuid = 5;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getPriceListUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setPriceListUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string warehouse_uuid = 6;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getWarehouseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setWarehouseUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sales_representative_uuid = 7;
 * @return {string}
 */
proto.data.CreateOrderRequest.prototype.getSalesRepresentativeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderRequest} returns this
 */
proto.data.CreateOrderRequest.prototype.setSalesRepresentativeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ProcessOrderRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ProcessOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ProcessOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ProcessOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ProcessOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createPayments: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    proto.data.CreatePaymentRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ProcessOrderRequest}
 */
proto.data.ProcessOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ProcessOrderRequest;
  return proto.data.ProcessOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ProcessOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ProcessOrderRequest}
 */
proto.data.ProcessOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreatePayments(value);
      break;
    case 5:
      var value = new proto.data.CreatePaymentRequest;
      reader.readMessage(value,proto.data.CreatePaymentRequest.deserializeBinaryFromReader);
      msg.addPayments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ProcessOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ProcessOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ProcessOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ProcessOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatePayments();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.CreatePaymentRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ProcessOrderRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ProcessOrderRequest} returns this
*/
proto.data.ProcessOrderRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ProcessOrderRequest} returns this
 */
proto.data.ProcessOrderRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ProcessOrderRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ProcessOrderRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ProcessOrderRequest} returns this
 */
proto.data.ProcessOrderRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_uuid = 3;
 * @return {string}
 */
proto.data.ProcessOrderRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ProcessOrderRequest} returns this
 */
proto.data.ProcessOrderRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool create_payments = 4;
 * @return {boolean}
 */
proto.data.ProcessOrderRequest.prototype.getCreatePayments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ProcessOrderRequest} returns this
 */
proto.data.ProcessOrderRequest.prototype.setCreatePayments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated CreatePaymentRequest payments = 5;
 * @return {!Array<!proto.data.CreatePaymentRequest>}
 */
proto.data.ProcessOrderRequest.prototype.getPaymentsList = function() {
  return /** @type{!Array<!proto.data.CreatePaymentRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.CreatePaymentRequest, 5));
};


/**
 * @param {!Array<!proto.data.CreatePaymentRequest>} value
 * @return {!proto.data.ProcessOrderRequest} returns this
*/
proto.data.ProcessOrderRequest.prototype.setPaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.CreatePaymentRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.CreatePaymentRequest}
 */
proto.data.ProcessOrderRequest.prototype.addPayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.CreatePaymentRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ProcessOrderRequest} returns this
 */
proto.data.ProcessOrderRequest.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreatePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreatePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreatePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreatePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invoiceUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    referenceNo: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, ""),
    amount: (f = msg.getAmount()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    paymentDate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    tenderTypeCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
    currencyUuid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    paymentMethodUuid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    paymentAccountDate: jspb.Message.getFieldWithDefault(msg, 13, ""),
    isRefund: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreatePaymentRequest}
 */
proto.data.CreatePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreatePaymentRequest;
  return proto.data.CreatePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreatePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreatePaymentRequest}
 */
proto.data.CreatePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceNo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentDate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenderTypeCode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyUuid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodUuid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountDate(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRefund(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreatePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreatePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreatePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreatePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvoiceUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReferenceNo();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPaymentDate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTenderTypeCode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCurrencyUuid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPaymentMethodUuid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPaymentAccountDate();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIsRefund();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreatePaymentRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreatePaymentRequest} returns this
*/
proto.data.CreatePaymentRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreatePaymentRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_uuid = 3;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string invoice_uuid = 4;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getInvoiceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setInvoiceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string bank_uuid = 5;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reference_no = 6;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getReferenceNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setReferenceNo = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Decimal amount = 8;
 * @return {?proto.data.Decimal}
 */
proto.data.CreatePaymentRequest.prototype.getAmount = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 8));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.CreatePaymentRequest} returns this
*/
proto.data.CreatePaymentRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreatePaymentRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string payment_date = 9;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getPaymentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setPaymentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string tender_type_code = 10;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getTenderTypeCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setTenderTypeCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string currency_uuid = 11;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getCurrencyUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setCurrencyUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string payment_method_uuid = 12;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getPaymentMethodUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setPaymentMethodUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payment_account_date = 13;
 * @return {string}
 */
proto.data.CreatePaymentRequest.prototype.getPaymentAccountDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setPaymentAccountDate = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool is_refund = 14;
 * @return {boolean}
 */
proto.data.CreatePaymentRequest.prototype.getIsRefund = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.CreatePaymentRequest} returns this
 */
proto.data.CreatePaymentRequest.prototype.setIsRefund = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdatePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdatePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdatePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdatePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    paymentUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    referenceNo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    amount: (f = msg.getAmount()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    paymentDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tenderTypeCode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    paymentMethodUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    paymentAccountDate: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdatePaymentRequest}
 */
proto.data.UpdatePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdatePaymentRequest;
  return proto.data.UpdatePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdatePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdatePaymentRequest}
 */
proto.data.UpdatePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenderTypeCode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdatePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdatePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdatePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdatePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPaymentUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReferenceNo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPaymentDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTenderTypeCode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPaymentMethodUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPaymentAccountDate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdatePaymentRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
*/
proto.data.UpdatePaymentRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdatePaymentRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string payment_uuid = 2;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getPaymentUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setPaymentUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bank_uuid = 3;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reference_no = 4;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getReferenceNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setReferenceNo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Decimal amount = 6;
 * @return {?proto.data.Decimal}
 */
proto.data.UpdatePaymentRequest.prototype.getAmount = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 6));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
*/
proto.data.UpdatePaymentRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdatePaymentRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string payment_date = 7;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getPaymentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setPaymentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string tender_type_code = 8;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getTenderTypeCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setTenderTypeCode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string payment_method_uuid = 9;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getPaymentMethodUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setPaymentMethodUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payment_account_date = 10;
 * @return {string}
 */
proto.data.UpdatePaymentRequest.prototype.getPaymentAccountDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdatePaymentRequest} returns this
 */
proto.data.UpdatePaymentRequest.prototype.setPaymentAccountDate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeletePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeletePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeletePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    paymentUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeletePaymentRequest}
 */
proto.data.DeletePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeletePaymentRequest;
  return proto.data.DeletePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeletePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeletePaymentRequest}
 */
proto.data.DeletePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeletePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeletePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeletePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPaymentUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeletePaymentRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeletePaymentRequest} returns this
*/
proto.data.DeletePaymentRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeletePaymentRequest} returns this
 */
proto.data.DeletePaymentRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeletePaymentRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string payment_uuid = 2;
 * @return {string}
 */
proto.data.DeletePaymentRequest.prototype.getPaymentUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeletePaymentRequest} returns this
 */
proto.data.DeletePaymentRequest.prototype.setPaymentUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPaymentsRequest}
 */
proto.data.ListPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPaymentsRequest;
  return proto.data.ListPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPaymentsRequest}
 */
proto.data.ListPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPaymentsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPaymentsRequest} returns this
*/
proto.data.ListPaymentsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPaymentsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ListPaymentsRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_uuid = 3;
 * @return {string}
 */
proto.data.ListPaymentsRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListPaymentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListPaymentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Criteria criteria = 6;
 * @return {?proto.data.Criteria}
 */
proto.data.ListPaymentsRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 6));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListPaymentsRequest} returns this
*/
proto.data.ListPaymentsRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPaymentsRequest} returns this
 */
proto.data.ListPaymentsRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPaymentsRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ValidatePINRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ValidatePINRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ValidatePINRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ValidatePINRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pin: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ValidatePINRequest}
 */
proto.data.ValidatePINRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ValidatePINRequest;
  return proto.data.ValidatePINRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ValidatePINRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ValidatePINRequest}
 */
proto.data.ValidatePINRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ValidatePINRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ValidatePINRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ValidatePINRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ValidatePINRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ValidatePINRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ValidatePINRequest} returns this
*/
proto.data.ValidatePINRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ValidatePINRequest} returns this
 */
proto.data.ValidatePINRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ValidatePINRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pos_uuid = 2;
 * @return {string}
 */
proto.data.ValidatePINRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ValidatePINRequest} returns this
 */
proto.data.ValidatePINRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pin = 3;
 * @return {string}
 */
proto.data.ValidatePINRequest.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ValidatePINRequest} returns this
 */
proto.data.ValidatePINRequest.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPaymentsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    proto.data.Payment.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPaymentsResponse}
 */
proto.data.ListPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPaymentsResponse;
  return proto.data.ListPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPaymentsResponse}
 */
proto.data.ListPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.Payment;
      reader.readMessage(value,proto.data.Payment.deserializeBinaryFromReader);
      msg.addPayments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.Payment.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPaymentsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPaymentsResponse} returns this
 */
proto.data.ListPaymentsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Payment payments = 2;
 * @return {!Array<!proto.data.Payment>}
 */
proto.data.ListPaymentsResponse.prototype.getPaymentsList = function() {
  return /** @type{!Array<!proto.data.Payment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Payment, 2));
};


/**
 * @param {!Array<!proto.data.Payment>} value
 * @return {!proto.data.ListPaymentsResponse} returns this
*/
proto.data.ListPaymentsResponse.prototype.setPaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Payment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Payment}
 */
proto.data.ListPaymentsResponse.prototype.addPayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Payment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPaymentsResponse} returns this
 */
proto.data.ListPaymentsResponse.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPaymentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPaymentsResponse} returns this
 */
proto.data.ListPaymentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Payment.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Payment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Payment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Payment.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    documentNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    collectingAgent: (f = msg.getCollectingAgent()) && proto_core_functionality_pb.SalesRepresentative.toObject(includeInstance, f),
    documentStatus: (f = msg.getDocumentStatus()) && proto_base_data_type_pb.DocumentStatus.toObject(includeInstance, f),
    customer: (f = msg.getCustomer()) && proto.data.Customer.toObject(includeInstance, f),
    posUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    invoiceUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    bankUuid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    referenceNo: jspb.Message.getFieldWithDefault(msg, 11, ""),
    description: jspb.Message.getFieldWithDefault(msg, 12, ""),
    amount: (f = msg.getAmount()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    paymentDate: jspb.Message.getFieldWithDefault(msg, 14, ""),
    paymentAccountDate: jspb.Message.getFieldWithDefault(msg, 15, ""),
    tenderTypeCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    currencyUuid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    isRefund: jspb.Message.getBooleanFieldWithDefault(msg, 18, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Payment}
 */
proto.data.Payment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Payment;
  return proto.data.Payment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Payment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Payment}
 */
proto.data.Payment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentNo(value);
      break;
    case 4:
      var value = new proto_core_functionality_pb.SalesRepresentative;
      reader.readMessage(value,proto_core_functionality_pb.SalesRepresentative.deserializeBinaryFromReader);
      msg.setCollectingAgent(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.DocumentStatus;
      reader.readMessage(value,proto_base_data_type_pb.DocumentStatus.deserializeBinaryFromReader);
      msg.setDocumentStatus(value);
      break;
    case 6:
      var value = new proto.data.Customer;
      reader.readMessage(value,proto.data.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankUuid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceNo(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 13:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentDate(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountDate(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenderTypeCode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyUuid(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRefund(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Payment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Payment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Payment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Payment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDocumentNo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollectingAgent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_core_functionality_pb.SalesRepresentative.serializeBinaryToWriter
    );
  }
  f = message.getDocumentStatus();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.DocumentStatus.serializeBinaryToWriter
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.data.Customer.serializeBinaryToWriter
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInvoiceUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBankUuid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getReferenceNo();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPaymentDate();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPaymentAccountDate();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTenderTypeCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCurrencyUuid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIsRefund();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Payment.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Payment.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string document_no = 3;
 * @return {string}
 */
proto.data.Payment.prototype.getDocumentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setDocumentNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SalesRepresentative collecting_agent = 4;
 * @return {?proto.data.SalesRepresentative}
 */
proto.data.Payment.prototype.getCollectingAgent = function() {
  return /** @type{?proto.data.SalesRepresentative} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.SalesRepresentative, 4));
};


/**
 * @param {?proto.data.SalesRepresentative|undefined} value
 * @return {!proto.data.Payment} returns this
*/
proto.data.Payment.prototype.setCollectingAgent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.clearCollectingAgent = function() {
  return this.setCollectingAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Payment.prototype.hasCollectingAgent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DocumentStatus document_status = 5;
 * @return {?proto.data.DocumentStatus}
 */
proto.data.Payment.prototype.getDocumentStatus = function() {
  return /** @type{?proto.data.DocumentStatus} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.DocumentStatus, 5));
};


/**
 * @param {?proto.data.DocumentStatus|undefined} value
 * @return {!proto.data.Payment} returns this
*/
proto.data.Payment.prototype.setDocumentStatus = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.clearDocumentStatus = function() {
  return this.setDocumentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Payment.prototype.hasDocumentStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Customer customer = 6;
 * @return {?proto.data.Customer}
 */
proto.data.Payment.prototype.getCustomer = function() {
  return /** @type{?proto.data.Customer} */ (
    jspb.Message.getWrapperField(this, proto.data.Customer, 6));
};


/**
 * @param {?proto.data.Customer|undefined} value
 * @return {!proto.data.Payment} returns this
*/
proto.data.Payment.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Payment.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string pos_uuid = 7;
 * @return {string}
 */
proto.data.Payment.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string order_uuid = 8;
 * @return {string}
 */
proto.data.Payment.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string invoice_uuid = 9;
 * @return {string}
 */
proto.data.Payment.prototype.getInvoiceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setInvoiceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string bank_uuid = 10;
 * @return {string}
 */
proto.data.Payment.prototype.getBankUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setBankUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string reference_no = 11;
 * @return {string}
 */
proto.data.Payment.prototype.getReferenceNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setReferenceNo = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string description = 12;
 * @return {string}
 */
proto.data.Payment.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional Decimal amount = 13;
 * @return {?proto.data.Decimal}
 */
proto.data.Payment.prototype.getAmount = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 13));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Payment} returns this
*/
proto.data.Payment.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Payment.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string payment_date = 14;
 * @return {string}
 */
proto.data.Payment.prototype.getPaymentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setPaymentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string payment_account_date = 15;
 * @return {string}
 */
proto.data.Payment.prototype.getPaymentAccountDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setPaymentAccountDate = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string tender_type_code = 16;
 * @return {string}
 */
proto.data.Payment.prototype.getTenderTypeCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setTenderTypeCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string currency_uuid = 17;
 * @return {string}
 */
proto.data.Payment.prototype.getCurrencyUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setCurrencyUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool is_refund = 18;
 * @return {boolean}
 */
proto.data.Payment.prototype.getIsRefund = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.Payment} returns this
 */
proto.data.Payment.prototype.setIsRefund = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeleteOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeleteOrderRequest}
 */
proto.data.DeleteOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteOrderRequest;
  return proto.data.DeleteOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteOrderRequest}
 */
proto.data.DeleteOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeleteOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteOrderRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteOrderRequest} returns this
*/
proto.data.DeleteOrderRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteOrderRequest} returns this
 */
proto.data.DeleteOrderRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteOrderRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.DeleteOrderRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteOrderRequest} returns this
 */
proto.data.DeleteOrderRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeleteOrderLineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteOrderLineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteOrderLineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteOrderLineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderLineUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeleteOrderLineRequest}
 */
proto.data.DeleteOrderLineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteOrderLineRequest;
  return proto.data.DeleteOrderLineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteOrderLineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteOrderLineRequest}
 */
proto.data.DeleteOrderLineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderLineUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeleteOrderLineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteOrderLineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteOrderLineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteOrderLineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderLineUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteOrderLineRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteOrderLineRequest} returns this
*/
proto.data.DeleteOrderLineRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteOrderLineRequest} returns this
 */
proto.data.DeleteOrderLineRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteOrderLineRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_line_uuid = 2;
 * @return {string}
 */
proto.data.DeleteOrderLineRequest.prototype.getOrderLineUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteOrderLineRequest} returns this
 */
proto.data.DeleteOrderLineRequest.prototype.setOrderLineUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateOrderLineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateOrderLineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateOrderLineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateOrderLineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chargeUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    quantity: (f = msg.getQuantity()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    discountRate: (f = msg.getDiscountRate()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    warehouseUuid: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateOrderLineRequest}
 */
proto.data.CreateOrderLineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateOrderLineRequest;
  return proto.data.CreateOrderLineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateOrderLineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateOrderLineRequest}
 */
proto.data.CreateOrderLineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChargeUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setDiscountRate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateOrderLineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateOrderLineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateOrderLineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateOrderLineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChargeUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getDiscountRate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getWarehouseUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateOrderLineRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
*/
proto.data.CreateOrderLineRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateOrderLineRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.CreateOrderLineRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string product_uuid = 3;
 * @return {string}
 */
proto.data.CreateOrderLineRequest.prototype.getProductUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.setProductUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string charge_uuid = 4;
 * @return {string}
 */
proto.data.CreateOrderLineRequest.prototype.getChargeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.setChargeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.data.CreateOrderLineRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Decimal quantity = 6;
 * @return {?proto.data.Decimal}
 */
proto.data.CreateOrderLineRequest.prototype.getQuantity = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 6));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
*/
proto.data.CreateOrderLineRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateOrderLineRequest.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Decimal price = 7;
 * @return {?proto.data.Decimal}
 */
proto.data.CreateOrderLineRequest.prototype.getPrice = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 7));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
*/
proto.data.CreateOrderLineRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateOrderLineRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal discount_rate = 8;
 * @return {?proto.data.Decimal}
 */
proto.data.CreateOrderLineRequest.prototype.getDiscountRate = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 8));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
*/
proto.data.CreateOrderLineRequest.prototype.setDiscountRate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.clearDiscountRate = function() {
  return this.setDiscountRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateOrderLineRequest.prototype.hasDiscountRate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string warehouse_uuid = 9;
 * @return {string}
 */
proto.data.CreateOrderLineRequest.prototype.getWarehouseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateOrderLineRequest} returns this
 */
proto.data.CreateOrderLineRequest.prototype.setWarehouseUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    documentTypeUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    priceListUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    warehouseUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateOrderRequest}
 */
proto.data.UpdateOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateOrderRequest;
  return proto.data.UpdateOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateOrderRequest}
 */
proto.data.UpdateOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentTypeUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriceListUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDocumentTypeUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPriceListUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWarehouseUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateOrderRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateOrderRequest} returns this
*/
proto.data.UpdateOrderRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateOrderRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pos_uuid = 3;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string customer_uuid = 4;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getCustomerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setCustomerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string document_type_uuid = 5;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getDocumentTypeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setDocumentTypeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string price_list_uuid = 6;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getPriceListUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setPriceListUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string warehouse_uuid = 7;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getWarehouseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setWarehouseUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.data.UpdateOrderRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderRequest} returns this
 */
proto.data.UpdateOrderRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateOrderLineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateOrderLineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateOrderLineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateOrderLineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderLineUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    quantity: (f = msg.getQuantity()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    discountRate: (f = msg.getDiscountRate()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    isAddQuantity: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    warehouseUuid: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateOrderLineRequest}
 */
proto.data.UpdateOrderLineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateOrderLineRequest;
  return proto.data.UpdateOrderLineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateOrderLineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateOrderLineRequest}
 */
proto.data.UpdateOrderLineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderLineUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setDiscountRate(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAddQuantity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateOrderLineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateOrderLineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateOrderLineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateOrderLineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderLineUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getDiscountRate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getIsAddQuantity();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getWarehouseUuid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateOrderLineRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
*/
proto.data.UpdateOrderLineRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateOrderLineRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_line_uuid = 2;
 * @return {string}
 */
proto.data.UpdateOrderLineRequest.prototype.getOrderLineUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.setOrderLineUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.data.UpdateOrderLineRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Decimal quantity = 6;
 * @return {?proto.data.Decimal}
 */
proto.data.UpdateOrderLineRequest.prototype.getQuantity = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 6));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
*/
proto.data.UpdateOrderLineRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateOrderLineRequest.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Decimal price = 7;
 * @return {?proto.data.Decimal}
 */
proto.data.UpdateOrderLineRequest.prototype.getPrice = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 7));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
*/
proto.data.UpdateOrderLineRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateOrderLineRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal discount_rate = 8;
 * @return {?proto.data.Decimal}
 */
proto.data.UpdateOrderLineRequest.prototype.getDiscountRate = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 8));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
*/
proto.data.UpdateOrderLineRequest.prototype.setDiscountRate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.clearDiscountRate = function() {
  return this.setDiscountRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateOrderLineRequest.prototype.hasDiscountRate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_add_quantity = 9;
 * @return {boolean}
 */
proto.data.UpdateOrderLineRequest.prototype.getIsAddQuantity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.setIsAddQuantity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string warehouse_uuid = 10;
 * @return {string}
 */
proto.data.UpdateOrderLineRequest.prototype.getWarehouseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateOrderLineRequest} returns this
 */
proto.data.UpdateOrderLineRequest.prototype.setWarehouseUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetOrderRequest}
 */
proto.data.GetOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetOrderRequest;
  return proto.data.GetOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetOrderRequest}
 */
proto.data.GetOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetOrderRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetOrderRequest} returns this
*/
proto.data.GetOrderRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetOrderRequest} returns this
 */
proto.data.GetOrderRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetOrderRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.GetOrderRequest.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetOrderRequest} returns this
 */
proto.data.GetOrderRequest.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetKeyLayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetKeyLayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetKeyLayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetKeyLayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    keyLayoutUuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetKeyLayoutRequest}
 */
proto.data.GetKeyLayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetKeyLayoutRequest;
  return proto.data.GetKeyLayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetKeyLayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetKeyLayoutRequest}
 */
proto.data.GetKeyLayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyLayoutUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetKeyLayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetKeyLayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetKeyLayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetKeyLayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyLayoutUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetKeyLayoutRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetKeyLayoutRequest} returns this
*/
proto.data.GetKeyLayoutRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetKeyLayoutRequest} returns this
 */
proto.data.GetKeyLayoutRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetKeyLayoutRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key_layout_uuid = 2;
 * @return {string}
 */
proto.data.GetKeyLayoutRequest.prototype.getKeyLayoutUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetKeyLayoutRequest} returns this
 */
proto.data.GetKeyLayoutRequest.prototype.setKeyLayoutUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    documentNo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    documentType: (f = msg.getDocumentType()) && proto_core_functionality_pb.DocumentType.toObject(includeInstance, f),
    salesRepresentative: (f = msg.getSalesRepresentative()) && proto_core_functionality_pb.SalesRepresentative.toObject(includeInstance, f),
    documentStatus: (f = msg.getDocumentStatus()) && proto_base_data_type_pb.DocumentStatus.toObject(includeInstance, f),
    totalLines: (f = msg.getTotalLines()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    grandTotal: (f = msg.getGrandTotal()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    dateOrdered: jspb.Message.getFieldWithDefault(msg, 9, ""),
    customer: (f = msg.getCustomer()) && proto.data.Customer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Order}
 */
proto.data.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Order;
  return proto.data.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Order}
 */
proto.data.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentNo(value);
      break;
    case 4:
      var value = new proto_core_functionality_pb.DocumentType;
      reader.readMessage(value,proto_core_functionality_pb.DocumentType.deserializeBinaryFromReader);
      msg.setDocumentType(value);
      break;
    case 5:
      var value = new proto_core_functionality_pb.SalesRepresentative;
      reader.readMessage(value,proto_core_functionality_pb.SalesRepresentative.deserializeBinaryFromReader);
      msg.setSalesRepresentative(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.DocumentStatus;
      reader.readMessage(value,proto_base_data_type_pb.DocumentStatus.deserializeBinaryFromReader);
      msg.setDocumentStatus(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setTotalLines(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setGrandTotal(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateOrdered(value);
      break;
    case 10:
      var value = new proto.data.Customer;
      reader.readMessage(value,proto.data.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDocumentNo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_core_functionality_pb.DocumentType.serializeBinaryToWriter
    );
  }
  f = message.getSalesRepresentative();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_core_functionality_pb.SalesRepresentative.serializeBinaryToWriter
    );
  }
  f = message.getDocumentStatus();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_base_data_type_pb.DocumentStatus.serializeBinaryToWriter
    );
  }
  f = message.getTotalLines();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getGrandTotal();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getDateOrdered();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.data.Customer.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Order.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Order.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string document_no = 3;
 * @return {string}
 */
proto.data.Order.prototype.getDocumentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.setDocumentNo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DocumentType document_type = 4;
 * @return {?proto.data.DocumentType}
 */
proto.data.Order.prototype.getDocumentType = function() {
  return /** @type{?proto.data.DocumentType} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.DocumentType, 4));
};


/**
 * @param {?proto.data.DocumentType|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setDocumentType = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearDocumentType = function() {
  return this.setDocumentType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasDocumentType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SalesRepresentative sales_representative = 5;
 * @return {?proto.data.SalesRepresentative}
 */
proto.data.Order.prototype.getSalesRepresentative = function() {
  return /** @type{?proto.data.SalesRepresentative} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.SalesRepresentative, 5));
};


/**
 * @param {?proto.data.SalesRepresentative|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setSalesRepresentative = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearSalesRepresentative = function() {
  return this.setSalesRepresentative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasSalesRepresentative = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DocumentStatus document_status = 6;
 * @return {?proto.data.DocumentStatus}
 */
proto.data.Order.prototype.getDocumentStatus = function() {
  return /** @type{?proto.data.DocumentStatus} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.DocumentStatus, 6));
};


/**
 * @param {?proto.data.DocumentStatus|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setDocumentStatus = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearDocumentStatus = function() {
  return this.setDocumentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasDocumentStatus = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Decimal total_lines = 7;
 * @return {?proto.data.Decimal}
 */
proto.data.Order.prototype.getTotalLines = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 7));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setTotalLines = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearTotalLines = function() {
  return this.setTotalLines(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasTotalLines = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal grand_total = 8;
 * @return {?proto.data.Decimal}
 */
proto.data.Order.prototype.getGrandTotal = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 8));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setGrandTotal = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearGrandTotal = function() {
  return this.setGrandTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasGrandTotal = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string date_ordered = 9;
 * @return {string}
 */
proto.data.Order.prototype.getDateOrdered = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.setDateOrdered = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Customer customer = 10;
 * @return {?proto.data.Customer}
 */
proto.data.Order.prototype.getCustomer = function() {
  return /** @type{?proto.data.Customer} */ (
    jspb.Message.getWrapperField(this, proto.data.Customer, 10));
};


/**
 * @param {?proto.data.Customer|undefined} value
 * @return {!proto.data.Order} returns this
*/
proto.data.Order.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Order} returns this
 */
proto.data.Order.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Order.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.OrderLine.prototype.toObject = function(opt_includeInstance) {
  return proto.data.OrderLine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.OrderLine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.OrderLine.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    product: (f = msg.getProduct()) && proto_core_functionality_pb.Product.toObject(includeInstance, f),
    charge: (f = msg.getCharge()) && proto_core_functionality_pb.Charge.toObject(includeInstance, f),
    lineDescription: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    warehouse: (f = msg.getWarehouse()) && proto_core_functionality_pb.Warehouse.toObject(includeInstance, f),
    quantity: (f = msg.getQuantity()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    priceList: (f = msg.getPriceList()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    discountRate: (f = msg.getDiscountRate()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    taxRate: (f = msg.getTaxRate()) && proto_core_functionality_pb.TaxRate.toObject(includeInstance, f),
    lineNetAmount: (f = msg.getLineNetAmount()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    line: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.OrderLine}
 */
proto.data.OrderLine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.OrderLine;
  return proto.data.OrderLine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.OrderLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.OrderLine}
 */
proto.data.OrderLine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderUuid(value);
      break;
    case 3:
      var value = new proto_core_functionality_pb.Product;
      reader.readMessage(value,proto_core_functionality_pb.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 4:
      var value = new proto_core_functionality_pb.Charge;
      reader.readMessage(value,proto_core_functionality_pb.Charge.deserializeBinaryFromReader);
      msg.setCharge(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLineDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto_core_functionality_pb.Warehouse;
      reader.readMessage(value,proto_core_functionality_pb.Warehouse.deserializeBinaryFromReader);
      msg.setWarehouse(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 9:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPriceList(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setDiscountRate(value);
      break;
    case 12:
      var value = new proto_core_functionality_pb.TaxRate;
      reader.readMessage(value,proto_core_functionality_pb.TaxRate.deserializeBinaryFromReader);
      msg.setTaxRate(value);
      break;
    case 13:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setLineNetAmount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLine(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.OrderLine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.OrderLine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.OrderLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.OrderLine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_core_functionality_pb.Product.serializeBinaryToWriter
    );
  }
  f = message.getCharge();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_core_functionality_pb.Charge.serializeBinaryToWriter
    );
  }
  f = message.getLineDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWarehouse();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_core_functionality_pb.Warehouse.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPriceList();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getDiscountRate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getTaxRate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_core_functionality_pb.TaxRate.serializeBinaryToWriter
    );
  }
  f = message.getLineNetAmount();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.OrderLine.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_uuid = 2;
 * @return {string}
 */
proto.data.OrderLine.prototype.getOrderUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.setOrderUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Product product = 3;
 * @return {?proto.data.Product}
 */
proto.data.OrderLine.prototype.getProduct = function() {
  return /** @type{?proto.data.Product} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Product, 3));
};


/**
 * @param {?proto.data.Product|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Charge charge = 4;
 * @return {?proto.data.Charge}
 */
proto.data.OrderLine.prototype.getCharge = function() {
  return /** @type{?proto.data.Charge} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Charge, 4));
};


/**
 * @param {?proto.data.Charge|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setCharge = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearCharge = function() {
  return this.setCharge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasCharge = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string line_description = 5;
 * @return {string}
 */
proto.data.OrderLine.prototype.getLineDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.setLineDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.data.OrderLine.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Warehouse warehouse = 7;
 * @return {?proto.data.Warehouse}
 */
proto.data.OrderLine.prototype.getWarehouse = function() {
  return /** @type{?proto.data.Warehouse} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.Warehouse, 7));
};


/**
 * @param {?proto.data.Warehouse|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setWarehouse = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearWarehouse = function() {
  return this.setWarehouse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasWarehouse = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal quantity = 8;
 * @return {?proto.data.Decimal}
 */
proto.data.OrderLine.prototype.getQuantity = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 8));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Decimal price_list = 9;
 * @return {?proto.data.Decimal}
 */
proto.data.OrderLine.prototype.getPriceList = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 9));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setPriceList = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearPriceList = function() {
  return this.setPriceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasPriceList = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Decimal price = 10;
 * @return {?proto.data.Decimal}
 */
proto.data.OrderLine.prototype.getPrice = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 10));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Decimal discount_rate = 11;
 * @return {?proto.data.Decimal}
 */
proto.data.OrderLine.prototype.getDiscountRate = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 11));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setDiscountRate = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearDiscountRate = function() {
  return this.setDiscountRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasDiscountRate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional TaxRate tax_rate = 12;
 * @return {?proto.data.TaxRate}
 */
proto.data.OrderLine.prototype.getTaxRate = function() {
  return /** @type{?proto.data.TaxRate} */ (
    jspb.Message.getWrapperField(this, proto_core_functionality_pb.TaxRate, 12));
};


/**
 * @param {?proto.data.TaxRate|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setTaxRate = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearTaxRate = function() {
  return this.setTaxRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasTaxRate = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Decimal line_net_amount = 13;
 * @return {?proto.data.Decimal}
 */
proto.data.OrderLine.prototype.getLineNetAmount = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 13));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.OrderLine} returns this
*/
proto.data.OrderLine.prototype.setLineNetAmount = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.clearLineNetAmount = function() {
  return this.setLineNetAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.OrderLine.prototype.hasLineNetAmount = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 line = 14;
 * @return {number}
 */
proto.data.OrderLine.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.OrderLine} returns this
 */
proto.data.OrderLine.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetProductPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetProductPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetProductPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetProductPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    searchValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    upc: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    businessPartnerUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    validFrom: jspb.Message.getFieldWithDefault(msg, 7, ""),
    posUuid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetProductPriceRequest}
 */
proto.data.GetProductPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetProductPriceRequest;
  return proto.data.GetProductPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetProductPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetProductPriceRequest}
 */
proto.data.GetProductPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpc(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessPartnerUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidFrom(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetProductPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetProductPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetProductPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetProductPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpc();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBusinessPartnerUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getValidFrom();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPosUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetProductPriceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetProductPriceRequest} returns this
*/
proto.data.GetProductPriceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetProductPriceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string search_value = 2;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string upc = 3;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getUpc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setUpc = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string business_partner_uuid = 6;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getBusinessPartnerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setBusinessPartnerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string valid_from = 7;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getValidFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setValidFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string pos_uuid = 8;
 * @return {string}
 */
proto.data.GetProductPriceRequest.prototype.getPosUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetProductPriceRequest} returns this
 */
proto.data.GetProductPriceRequest.prototype.setPosUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.KeyLayout.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.KeyLayout.prototype.toObject = function(opt_includeInstance) {
  return proto.data.KeyLayout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.KeyLayout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.KeyLayout.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    help: jspb.Message.getFieldWithDefault(msg, 5, ""),
    layoutType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    columns: jspb.Message.getFieldWithDefault(msg, 7, 0),
    color: jspb.Message.getFieldWithDefault(msg, 8, ""),
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.data.Key.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.KeyLayout}
 */
proto.data.KeyLayout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.KeyLayout;
  return proto.data.KeyLayout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.KeyLayout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.KeyLayout}
 */
proto.data.KeyLayout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLayoutType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColumns(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 9:
      var value = new proto.data.Key;
      reader.readMessage(value,proto.data.Key.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.KeyLayout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.KeyLayout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.KeyLayout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.KeyLayout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLayoutType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColumns();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.data.Key.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.KeyLayout.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string help = 5;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string layout_type = 6;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getLayoutType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setLayoutType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 columns = 7;
 * @return {number}
 */
proto.data.KeyLayout.prototype.getColumns = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setColumns = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string color = 8;
 * @return {string}
 */
proto.data.KeyLayout.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Key keys = 9;
 * @return {!Array<!proto.data.Key>}
 */
proto.data.KeyLayout.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.data.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Key, 9));
};


/**
 * @param {!Array<!proto.data.Key>} value
 * @return {!proto.data.KeyLayout} returns this
*/
proto.data.KeyLayout.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.data.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Key}
 */
proto.data.KeyLayout.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.data.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.KeyLayout} returns this
 */
proto.data.KeyLayout.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    subKeyLayoutUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    color: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 7, 0),
    spanX: jspb.Message.getFieldWithDefault(msg, 8, 0),
    spanY: jspb.Message.getFieldWithDefault(msg, 9, 0),
    productValue: jspb.Message.getFieldWithDefault(msg, 10, ""),
    quantity: (f = msg.getQuantity()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    resourceReference: (f = msg.getResourceReference()) && proto_base_data_type_pb.ResourceReference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Key}
 */
proto.data.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Key;
  return proto.data.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Key}
 */
proto.data.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubKeyLayoutUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpanX(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpanY(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductValue(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 12:
      var value = new proto_base_data_type_pb.ResourceReference;
      reader.readMessage(value,proto_base_data_type_pb.ResourceReference.deserializeBinaryFromReader);
      msg.setResourceReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubKeyLayoutUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSpanX();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getSpanY();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getProductValue();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getResourceReference();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_base_data_type_pb.ResourceReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Key.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Key.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.Key.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.Key.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sub_key_layout_uuid = 5;
 * @return {string}
 */
proto.data.Key.prototype.getSubKeyLayoutUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setSubKeyLayoutUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string color = 6;
 * @return {string}
 */
proto.data.Key.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 sequence = 7;
 * @return {number}
 */
proto.data.Key.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 span_x = 8;
 * @return {number}
 */
proto.data.Key.prototype.getSpanX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setSpanX = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 span_y = 9;
 * @return {number}
 */
proto.data.Key.prototype.getSpanY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setSpanY = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string product_value = 10;
 * @return {string}
 */
proto.data.Key.prototype.getProductValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.setProductValue = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Decimal quantity = 11;
 * @return {?proto.data.Decimal}
 */
proto.data.Key.prototype.getQuantity = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 11));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Key} returns this
*/
proto.data.Key.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Key.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ResourceReference resource_reference = 12;
 * @return {?proto.data.ResourceReference}
 */
proto.data.Key.prototype.getResourceReference = function() {
  return /** @type{?proto.data.ResourceReference} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.ResourceReference, 12));
};


/**
 * @param {?proto.data.ResourceReference|undefined} value
 * @return {!proto.data.Key} returns this
*/
proto.data.Key.prototype.setResourceReference = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Key} returns this
 */
proto.data.Key.prototype.clearResourceReference = function() {
  return this.setResourceReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Key.prototype.hasResourceReference = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.data);
