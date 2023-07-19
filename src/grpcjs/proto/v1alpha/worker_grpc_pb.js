// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v1alpha_worker_pb = require('../v1alpha/worker_pb.js');
var v1alpha_graph_pb = require('../v1alpha/graph_pb.js');
var v1alpha_runtime_pb = require('../v1alpha/runtime_pb.js');

function serialize_tierkreis_v1alpha_worker_RunFunctionRequest(arg) {
  if (!(arg instanceof v1alpha_worker_pb.RunFunctionRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.worker.RunFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_worker_RunFunctionRequest(buffer_arg) {
  return v1alpha_worker_pb.RunFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_worker_RunFunctionResponse(arg) {
  if (!(arg instanceof v1alpha_worker_pb.RunFunctionResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.worker.RunFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_worker_RunFunctionResponse(buffer_arg) {
  return v1alpha_worker_pb.RunFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkerService = exports.WorkerService = {
  runFunction: {
    path: '/tierkreis.v1alpha.worker.Worker/RunFunction',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_worker_pb.RunFunctionRequest,
    responseType: v1alpha_worker_pb.RunFunctionResponse,
    requestSerialize: serialize_tierkreis_v1alpha_worker_RunFunctionRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_worker_RunFunctionRequest,
    responseSerialize: serialize_tierkreis_v1alpha_worker_RunFunctionResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_worker_RunFunctionResponse,
  },
};

exports.WorkerClient = grpc.makeGenericClientConstructor(WorkerService);
