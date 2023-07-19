// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v1alpha_signature_pb = require('../v1alpha/signature_pb.js');
var v1alpha_graph_pb = require('../v1alpha/graph_pb.js');

function serialize_tierkreis_v1alpha_signature_InferTypeRequest(arg) {
  if (!(arg instanceof v1alpha_signature_pb.InferTypeRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.signature.InferTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_signature_InferTypeRequest(buffer_arg) {
  return v1alpha_signature_pb.InferTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_signature_InferTypeResponse(arg) {
  if (!(arg instanceof v1alpha_signature_pb.InferTypeResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.signature.InferTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_signature_InferTypeResponse(buffer_arg) {
  return v1alpha_signature_pb.InferTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_signature_ListFunctionsRequest(arg) {
  if (!(arg instanceof v1alpha_signature_pb.ListFunctionsRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.signature.ListFunctionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_signature_ListFunctionsRequest(buffer_arg) {
  return v1alpha_signature_pb.ListFunctionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_signature_ListFunctionsResponse(arg) {
  if (!(arg instanceof v1alpha_signature_pb.ListFunctionsResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.signature.ListFunctionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_signature_ListFunctionsResponse(buffer_arg) {
  return v1alpha_signature_pb.ListFunctionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SignatureService = exports.SignatureService = {
  listFunctions: {
    path: '/tierkreis.v1alpha.signature.Signature/ListFunctions',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_signature_pb.ListFunctionsRequest,
    responseType: v1alpha_signature_pb.ListFunctionsResponse,
    requestSerialize: serialize_tierkreis_v1alpha_signature_ListFunctionsRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_signature_ListFunctionsRequest,
    responseSerialize: serialize_tierkreis_v1alpha_signature_ListFunctionsResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_signature_ListFunctionsResponse,
  },
};

exports.SignatureClient = grpc.makeGenericClientConstructor(SignatureService);
var TypeInferenceService = exports.TypeInferenceService = {
  inferType: {
    path: '/tierkreis.v1alpha.signature.TypeInference/InferType',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_signature_pb.InferTypeRequest,
    responseType: v1alpha_signature_pb.InferTypeResponse,
    requestSerialize: serialize_tierkreis_v1alpha_signature_InferTypeRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_signature_InferTypeRequest,
    responseSerialize: serialize_tierkreis_v1alpha_signature_InferTypeResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_signature_InferTypeResponse,
  },
};

exports.TypeInferenceClient = grpc.makeGenericClientConstructor(TypeInferenceService);
