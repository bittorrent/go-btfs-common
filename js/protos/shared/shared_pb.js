// source: protos/shared/shared.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_tron$us_protobuf_gogoproto_gogo_pb = require('../../github.com/tron-us/protobuf/gogoproto/gogo_pb.js');
goog.object.extend(proto, github_com_tron$us_protobuf_gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.shared.RuntimeInfoReport', null, global);
goog.exportSymbol('proto.shared.RuntimeInfoReport.HealthStatus', null, global);
goog.exportSymbol('proto.shared.RuntimeInfoRequest', null, global);
goog.exportSymbol('proto.shared.SignedRuntimeInfoRequest', null, global);
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
proto.shared.RuntimeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.RuntimeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.RuntimeInfoRequest.displayName = 'proto.shared.RuntimeInfoRequest';
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
proto.shared.SignedRuntimeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.SignedRuntimeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.SignedRuntimeInfoRequest.displayName = 'proto.shared.SignedRuntimeInfoRequest';
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
proto.shared.RuntimeInfoReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.RuntimeInfoReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.RuntimeInfoReport.displayName = 'proto.shared.RuntimeInfoReport';
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
proto.shared.RuntimeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.RuntimeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.RuntimeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.RuntimeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestAddress: msg.getRequestAddress_asB64(),
    curentTime: (f = msg.getCurentTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.shared.RuntimeInfoRequest}
 */
proto.shared.RuntimeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.RuntimeInfoRequest;
  return proto.shared.RuntimeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.RuntimeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.RuntimeInfoRequest}
 */
proto.shared.RuntimeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRequestAddress(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCurentTime(value);
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
proto.shared.RuntimeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.RuntimeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.RuntimeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.RuntimeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCurentTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes request_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoRequest.prototype.getRequestAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes request_address = 1;
 * This is a type-conversion wrapper around `getRequestAddress()`
 * @return {string}
 */
proto.shared.RuntimeInfoRequest.prototype.getRequestAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRequestAddress()));
};


/**
 * optional bytes request_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRequestAddress()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoRequest.prototype.getRequestAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRequestAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoRequest} returns this
 */
proto.shared.RuntimeInfoRequest.prototype.setRequestAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp curent_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.shared.RuntimeInfoRequest.prototype.getCurentTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.shared.RuntimeInfoRequest} returns this
*/
proto.shared.RuntimeInfoRequest.prototype.setCurentTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.RuntimeInfoRequest} returns this
 */
proto.shared.RuntimeInfoRequest.prototype.clearCurentTime = function() {
  return this.setCurentTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.RuntimeInfoRequest.prototype.hasCurentTime = function() {
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
proto.shared.SignedRuntimeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.SignedRuntimeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.SignedRuntimeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.SignedRuntimeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    req: (f = msg.getReq()) && proto.shared.RuntimeInfoRequest.toObject(includeInstance, f),
    signature: msg.getSignature_asB64()
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
 * @return {!proto.shared.SignedRuntimeInfoRequest}
 */
proto.shared.SignedRuntimeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.SignedRuntimeInfoRequest;
  return proto.shared.SignedRuntimeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.SignedRuntimeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.SignedRuntimeInfoRequest}
 */
proto.shared.SignedRuntimeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.shared.RuntimeInfoRequest;
      reader.readMessage(value,proto.shared.RuntimeInfoRequest.deserializeBinaryFromReader);
      msg.setReq(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
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
proto.shared.SignedRuntimeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.SignedRuntimeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.SignedRuntimeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.SignedRuntimeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.shared.RuntimeInfoRequest.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional RuntimeInfoRequest req = 1;
 * @return {?proto.shared.RuntimeInfoRequest}
 */
proto.shared.SignedRuntimeInfoRequest.prototype.getReq = function() {
  return /** @type{?proto.shared.RuntimeInfoRequest} */ (
    jspb.Message.getWrapperField(this, proto.shared.RuntimeInfoRequest, 1));
};


/**
 * @param {?proto.shared.RuntimeInfoRequest|undefined} value
 * @return {!proto.shared.SignedRuntimeInfoRequest} returns this
*/
proto.shared.SignedRuntimeInfoRequest.prototype.setReq = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.SignedRuntimeInfoRequest} returns this
 */
proto.shared.SignedRuntimeInfoRequest.prototype.clearReq = function() {
  return this.setReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.SignedRuntimeInfoRequest.prototype.hasReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.shared.SignedRuntimeInfoRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.shared.SignedRuntimeInfoRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.shared.SignedRuntimeInfoRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.SignedRuntimeInfoRequest} returns this
 */
proto.shared.SignedRuntimeInfoRequest.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.shared.RuntimeInfoReport.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.RuntimeInfoReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.RuntimeInfoReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.RuntimeInfoReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: msg.getPeerId_asB64(),
    address: msg.getAddress_asB64(),
    serviceName: msg.getServiceName_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    curentTime: (f = msg.getCurentTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    gitHash: msg.getGitHash_asB64(),
    version: msg.getVersion_asB64(),
    dbStatusExtra: msg.getDbStatusExtra_asB64(),
    rdStatusExtra: msg.getRdStatusExtra_asB64(),
    queueStatusExtra: msg.getQueueStatusExtra_asB64(),
    chainStatusExtra: msg.getChainStatusExtra_asB64(),
    cacheStatusExtra: msg.getCacheStatusExtra_asB64(),
    extra: msg.getExtra_asB64()
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
 * @return {!proto.shared.RuntimeInfoReport}
 */
proto.shared.RuntimeInfoReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.RuntimeInfoReport;
  return proto.shared.RuntimeInfoReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.RuntimeInfoReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.RuntimeInfoReport}
 */
proto.shared.RuntimeInfoReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setServiceName(value);
      break;
    case 4:
      var value = /** @type {!proto.shared.RuntimeInfoReport.HealthStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCurentTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGitHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVersion(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDbStatusExtra(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRdStatusExtra(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setQueueStatusExtra(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChainStatusExtra(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCacheStatusExtra(value);
      break;
    case 14:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtra(value);
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
proto.shared.RuntimeInfoReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.RuntimeInfoReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.RuntimeInfoReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.RuntimeInfoReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getServiceName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCurentTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGitHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getVersion_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getDbStatusExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getRdStatusExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getQueueStatusExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getChainStatusExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getCacheStatusExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      14,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.shared.RuntimeInfoReport.HealthStatus = {
  SICK: 0,
  RUNNING: 1,
  BOOTSTRAP: 2,
  PARTIAL_STOP: 3
};

/**
 * optional bytes peer_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getPeerId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes peer_id = 1;
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getPeerId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerId()));
};


/**
 * optional bytes peer_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getPeerId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes address = 2;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes service_name = 3;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getServiceName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes service_name = 3;
 * This is a type-conversion wrapper around `getServiceName()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getServiceName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getServiceName()));
};


/**
 * optional bytes service_name = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getServiceName()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getServiceName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getServiceName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional HealthStatus status = 4;
 * @return {!proto.shared.RuntimeInfoReport.HealthStatus}
 */
proto.shared.RuntimeInfoReport.prototype.getStatus = function() {
  return /** @type {!proto.shared.RuntimeInfoReport.HealthStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.shared.RuntimeInfoReport.HealthStatus} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp curent_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.shared.RuntimeInfoReport.prototype.getCurentTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
*/
proto.shared.RuntimeInfoReport.prototype.setCurentTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.clearCurentTime = function() {
  return this.setCurentTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.RuntimeInfoReport.prototype.hasCurentTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.shared.RuntimeInfoReport.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
*/
proto.shared.RuntimeInfoReport.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.RuntimeInfoReport.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes git_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getGitHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes git_hash = 7;
 * This is a type-conversion wrapper around `getGitHash()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getGitHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGitHash()));
};


/**
 * optional bytes git_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGitHash()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getGitHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGitHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setGitHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes version = 8;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes version = 8;
 * This is a type-conversion wrapper around `getVersion()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVersion()));
};


/**
 * optional bytes version = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVersion()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setVersion = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional bytes db_status_extra = 9;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getDbStatusExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes db_status_extra = 9;
 * This is a type-conversion wrapper around `getDbStatusExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getDbStatusExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDbStatusExtra()));
};


/**
 * optional bytes db_status_extra = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDbStatusExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getDbStatusExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDbStatusExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setDbStatusExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional bytes rd_status_extra = 10;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getRdStatusExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes rd_status_extra = 10;
 * This is a type-conversion wrapper around `getRdStatusExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getRdStatusExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRdStatusExtra()));
};


/**
 * optional bytes rd_status_extra = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRdStatusExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getRdStatusExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRdStatusExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setRdStatusExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * optional bytes queue_status_extra = 11;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getQueueStatusExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes queue_status_extra = 11;
 * This is a type-conversion wrapper around `getQueueStatusExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getQueueStatusExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getQueueStatusExtra()));
};


/**
 * optional bytes queue_status_extra = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getQueueStatusExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getQueueStatusExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getQueueStatusExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setQueueStatusExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 11, value);
};


/**
 * optional bytes chain_status_extra = 12;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getChainStatusExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes chain_status_extra = 12;
 * This is a type-conversion wrapper around `getChainStatusExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getChainStatusExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChainStatusExtra()));
};


/**
 * optional bytes chain_status_extra = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChainStatusExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getChainStatusExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChainStatusExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setChainStatusExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};


/**
 * optional bytes cache_status_extra = 13;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getCacheStatusExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes cache_status_extra = 13;
 * This is a type-conversion wrapper around `getCacheStatusExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getCacheStatusExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCacheStatusExtra()));
};


/**
 * optional bytes cache_status_extra = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCacheStatusExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getCacheStatusExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCacheStatusExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setCacheStatusExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional bytes extra = 14;
 * @return {!(string|Uint8Array)}
 */
proto.shared.RuntimeInfoReport.prototype.getExtra = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * optional bytes extra = 14;
 * This is a type-conversion wrapper around `getExtra()`
 * @return {string}
 */
proto.shared.RuntimeInfoReport.prototype.getExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtra()));
};


/**
 * optional bytes extra = 14;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtra()`
 * @return {!Uint8Array}
 */
proto.shared.RuntimeInfoReport.prototype.getExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtra()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.shared.RuntimeInfoReport} returns this
 */
proto.shared.RuntimeInfoReport.prototype.setExtra = function(value) {
  return jspb.Message.setProto3BytesField(this, 14, value);
};


goog.object.extend(exports, proto.shared);