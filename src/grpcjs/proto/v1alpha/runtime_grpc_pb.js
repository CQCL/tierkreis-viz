// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v1alpha_runtime_pb = require('../v1alpha/runtime_pb.js');
var v1alpha_graph_pb = require('../v1alpha/graph_pb.js');
var v1alpha_signature_pb = require('../v1alpha/signature_pb.js');

function serialize_tierkreis_v1alpha_runtime_AwaitTaskRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.AwaitTaskRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.AwaitTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_AwaitTaskRequest(buffer_arg) {
  return v1alpha_runtime_pb.AwaitTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_AwaitTaskResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.AwaitTaskResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.AwaitTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_AwaitTaskResponse(buffer_arg) {
  return v1alpha_runtime_pb.AwaitTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_DeleteTaskRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_DeleteTaskRequest(buffer_arg) {
  return v1alpha_runtime_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_DeleteTaskResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.DeleteTaskResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.DeleteTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_DeleteTaskResponse(buffer_arg) {
  return v1alpha_runtime_pb.DeleteTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_GetTaskRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_GetTaskRequest(buffer_arg) {
  return v1alpha_runtime_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_GetTaskResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.GetTaskResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.GetTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_GetTaskResponse(buffer_arg) {
  return v1alpha_runtime_pb.GetTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_ListTasksRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.ListTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_ListTasksRequest(buffer_arg) {
  return v1alpha_runtime_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_ListTasksResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.ListTasksResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.ListTasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_ListTasksResponse(buffer_arg) {
  return v1alpha_runtime_pb.ListTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_RunGraphRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.RunGraphRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.RunGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_RunGraphRequest(buffer_arg) {
  return v1alpha_runtime_pb.RunGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_RunGraphResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.RunGraphResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.RunGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_RunGraphResponse(buffer_arg) {
  return v1alpha_runtime_pb.RunGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_RunTaskRequest(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.RunTaskRequest)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.RunTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_RunTaskRequest(buffer_arg) {
  return v1alpha_runtime_pb.RunTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tierkreis_v1alpha_runtime_RunTaskResponse(arg) {
  if (!(arg instanceof v1alpha_runtime_pb.RunTaskResponse)) {
    throw new Error('Expected argument of type tierkreis.v1alpha.runtime.RunTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tierkreis_v1alpha_runtime_RunTaskResponse(buffer_arg) {
  return v1alpha_runtime_pb.RunTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RuntimeService = exports.RuntimeService = {
  listTasks: {
    path: '/tierkreis.v1alpha.runtime.Runtime/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.ListTasksRequest,
    responseType: v1alpha_runtime_pb.ListTasksResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_ListTasksRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_ListTasksRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_ListTasksResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_ListTasksResponse,
  },
  runTask: {
    path: '/tierkreis.v1alpha.runtime.Runtime/RunTask',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.RunTaskRequest,
    responseType: v1alpha_runtime_pb.RunTaskResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_RunTaskRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_RunTaskRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_RunTaskResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_RunTaskResponse,
  },
  getTask: {
    path: '/tierkreis.v1alpha.runtime.Runtime/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.GetTaskRequest,
    responseType: v1alpha_runtime_pb.GetTaskResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_GetTaskRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_GetTaskRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_GetTaskResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_GetTaskResponse,
  },
  awaitTask: {
    path: '/tierkreis.v1alpha.runtime.Runtime/AwaitTask',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.AwaitTaskRequest,
    responseType: v1alpha_runtime_pb.AwaitTaskResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_AwaitTaskRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_AwaitTaskRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_AwaitTaskResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_AwaitTaskResponse,
  },
  deleteTask: {
    path: '/tierkreis.v1alpha.runtime.Runtime/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.DeleteTaskRequest,
    responseType: v1alpha_runtime_pb.DeleteTaskResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_DeleteTaskRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_DeleteTaskRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_DeleteTaskResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_DeleteTaskResponse,
  },
  runGraph: {
    path: '/tierkreis.v1alpha.runtime.Runtime/RunGraph',
    requestStream: false,
    responseStream: false,
    requestType: v1alpha_runtime_pb.RunGraphRequest,
    responseType: v1alpha_runtime_pb.RunGraphResponse,
    requestSerialize: serialize_tierkreis_v1alpha_runtime_RunGraphRequest,
    requestDeserialize: deserialize_tierkreis_v1alpha_runtime_RunGraphRequest,
    responseSerialize: serialize_tierkreis_v1alpha_runtime_RunGraphResponse,
    responseDeserialize: deserialize_tierkreis_v1alpha_runtime_RunGraphResponse,
  },
};

exports.RuntimeClient = grpc.makeGenericClientConstructor(RuntimeService);
