// source: protos/status/status.proto
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
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.status.BtfsScanAggrReq', null, global);
goog.exportSymbol('proto.status.NodeMetricsAggrReq', null, global);
goog.exportSymbol('proto.status.SignedMetrics', null, global);
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
proto.status.SignedMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.status.SignedMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.status.SignedMetrics.displayName = 'proto.status.SignedMetrics';
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
proto.status.NodeMetricsAggrReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.status.NodeMetricsAggrReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.status.NodeMetricsAggrReq.displayName = 'proto.status.NodeMetricsAggrReq';
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
proto.status.BtfsScanAggrReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.status.BtfsScanAggrReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.status.BtfsScanAggrReq.displayName = 'proto.status.BtfsScanAggrReq';
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
proto.status.SignedMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.status.SignedMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.status.SignedMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.SignedMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    signature: msg.getSignature_asB64(),
    payload: msg.getPayload_asB64()
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
 * @return {!proto.status.SignedMetrics}
 */
proto.status.SignedMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.status.SignedMetrics;
  return proto.status.SignedMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.status.SignedMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.status.SignedMetrics}
 */
proto.status.SignedMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
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
proto.status.SignedMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.status.SignedMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.status.SignedMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.SignedMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.status.SignedMetrics.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.status.SignedMetrics.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.status.SignedMetrics.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.status.SignedMetrics} returns this
 */
proto.status.SignedMetrics.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.status.SignedMetrics.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.status.SignedMetrics.prototype.getSignature_asB64 = function() {
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
proto.status.SignedMetrics.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.status.SignedMetrics} returns this
 */
proto.status.SignedMetrics.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes payload = 3;
 * @return {!(string|Uint8Array)}
 */
proto.status.SignedMetrics.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes payload = 3;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.status.SignedMetrics.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.status.SignedMetrics.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.status.SignedMetrics} returns this
 */
proto.status.SignedMetrics.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.status.NodeMetricsAggrReq.prototype.toObject = function(opt_includeInstance) {
  return proto.status.NodeMetricsAggrReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.status.NodeMetricsAggrReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.NodeMetricsAggrReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.status.NodeMetricsAggrReq}
 */
proto.status.NodeMetricsAggrReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.status.NodeMetricsAggrReq;
  return proto.status.NodeMetricsAggrReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.status.NodeMetricsAggrReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.status.NodeMetricsAggrReq}
 */
proto.status.NodeMetricsAggrReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
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
proto.status.NodeMetricsAggrReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.status.NodeMetricsAggrReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.status.NodeMetricsAggrReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.NodeMetricsAggrReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.status.NodeMetricsAggrReq.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.status.NodeMetricsAggrReq} returns this
 */
proto.status.NodeMetricsAggrReq.prototype.setSource = function(value) {
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
proto.status.BtfsScanAggrReq.prototype.toObject = function(opt_includeInstance) {
  return proto.status.BtfsScanAggrReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.status.BtfsScanAggrReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.BtfsScanAggrReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storageVolumeLeft: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    onlineMinersNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    countryDistributeMap: (f = msg.getCountryDistributeMap()) ? f.toObject(includeInstance, undefined) : [],
    scoreDistributeMap: (f = msg.getScoreDistributeMap()) ? f.toObject(includeInstance, undefined) : [],
    timeCreated: (f = msg.getTimeCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.status.BtfsScanAggrReq}
 */
proto.status.BtfsScanAggrReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.status.BtfsScanAggrReq;
  return proto.status.BtfsScanAggrReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.status.BtfsScanAggrReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.status.BtfsScanAggrReq}
 */
proto.status.BtfsScanAggrReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStorageVolumeLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOnlineMinersNumber(value);
      break;
    case 4:
      var value = msg.getCountryDistributeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 5:
      var value = msg.getScoreDistributeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeCreated(value);
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
proto.status.BtfsScanAggrReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.status.BtfsScanAggrReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.status.BtfsScanAggrReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.status.BtfsScanAggrReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStorageVolumeLeft();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOnlineMinersNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCountryDistributeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getScoreDistributeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTimeCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string table_name = 1;
 * @return {string}
 */
proto.status.BtfsScanAggrReq.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double storage_volume_left = 2;
 * @return {number}
 */
proto.status.BtfsScanAggrReq.prototype.getStorageVolumeLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.setStorageVolumeLeft = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint32 online_miners_number = 3;
 * @return {number}
 */
proto.status.BtfsScanAggrReq.prototype.getOnlineMinersNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.setOnlineMinersNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, int32> country_distribute = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.status.BtfsScanAggrReq.prototype.getCountryDistributeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.clearCountryDistributeMap = function() {
  this.getCountryDistributeMap().clear();
  return this;};


/**
 * map<string, int32> score_distribute = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.status.BtfsScanAggrReq.prototype.getScoreDistributeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.clearScoreDistributeMap = function() {
  this.getScoreDistributeMap().clear();
  return this;};


/**
 * optional google.protobuf.Timestamp time_created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.status.BtfsScanAggrReq.prototype.getTimeCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.status.BtfsScanAggrReq} returns this
*/
proto.status.BtfsScanAggrReq.prototype.setTimeCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.status.BtfsScanAggrReq} returns this
 */
proto.status.BtfsScanAggrReq.prototype.clearTimeCreated = function() {
  return this.setTimeCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.status.BtfsScanAggrReq.prototype.hasTimeCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.status);
