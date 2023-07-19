// package: tierkreis.v1alpha.runtime
// file: v1alpha/runtime.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1alpha_runtime_pb from "../v1alpha/runtime_pb";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";
import * as v1alpha_signature_pb from "../v1alpha/signature_pb";

interface IRuntimeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTasks: IRuntimeService_IListTasks;
    runTask: IRuntimeService_IRunTask;
    getTask: IRuntimeService_IGetTask;
    awaitTask: IRuntimeService_IAwaitTask;
    deleteTask: IRuntimeService_IDeleteTask;
    runGraph: IRuntimeService_IRunGraph;
}

interface IRuntimeService_IListTasks extends grpc.MethodDefinition<v1alpha_runtime_pb.ListTasksRequest, v1alpha_runtime_pb.ListTasksResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/ListTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.ListTasksRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.ListTasksRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.ListTasksResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.ListTasksResponse>;
}
interface IRuntimeService_IRunTask extends grpc.MethodDefinition<v1alpha_runtime_pb.RunTaskRequest, v1alpha_runtime_pb.RunTaskResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/RunTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.RunTaskRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.RunTaskRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.RunTaskResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.RunTaskResponse>;
}
interface IRuntimeService_IGetTask extends grpc.MethodDefinition<v1alpha_runtime_pb.GetTaskRequest, v1alpha_runtime_pb.GetTaskResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.GetTaskResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.GetTaskResponse>;
}
interface IRuntimeService_IAwaitTask extends grpc.MethodDefinition<v1alpha_runtime_pb.AwaitTaskRequest, v1alpha_runtime_pb.AwaitTaskResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/AwaitTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.AwaitTaskRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.AwaitTaskRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.AwaitTaskResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.AwaitTaskResponse>;
}
interface IRuntimeService_IDeleteTask extends grpc.MethodDefinition<v1alpha_runtime_pb.DeleteTaskRequest, v1alpha_runtime_pb.DeleteTaskResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.DeleteTaskResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.DeleteTaskResponse>;
}
interface IRuntimeService_IRunGraph extends grpc.MethodDefinition<v1alpha_runtime_pb.RunGraphRequest, v1alpha_runtime_pb.RunGraphResponse> {
    path: "/tierkreis.v1alpha.runtime.Runtime/RunGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_runtime_pb.RunGraphRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_runtime_pb.RunGraphRequest>;
    responseSerialize: grpc.serialize<v1alpha_runtime_pb.RunGraphResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_runtime_pb.RunGraphResponse>;
}

export const RuntimeService: IRuntimeService;

export interface IRuntimeServer extends grpc.UntypedServiceImplementation {
    listTasks: grpc.handleUnaryCall<v1alpha_runtime_pb.ListTasksRequest, v1alpha_runtime_pb.ListTasksResponse>;
    runTask: grpc.handleUnaryCall<v1alpha_runtime_pb.RunTaskRequest, v1alpha_runtime_pb.RunTaskResponse>;
    getTask: grpc.handleUnaryCall<v1alpha_runtime_pb.GetTaskRequest, v1alpha_runtime_pb.GetTaskResponse>;
    awaitTask: grpc.handleUnaryCall<v1alpha_runtime_pb.AwaitTaskRequest, v1alpha_runtime_pb.AwaitTaskResponse>;
    deleteTask: grpc.handleUnaryCall<v1alpha_runtime_pb.DeleteTaskRequest, v1alpha_runtime_pb.DeleteTaskResponse>;
    runGraph: grpc.handleUnaryCall<v1alpha_runtime_pb.RunGraphRequest, v1alpha_runtime_pb.RunGraphResponse>;
}

export interface IRuntimeClient {
    listTasks(request: v1alpha_runtime_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: v1alpha_runtime_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: v1alpha_runtime_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    runTask(request: v1alpha_runtime_pb.RunTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    runTask(request: v1alpha_runtime_pb.RunTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    runTask(request: v1alpha_runtime_pb.RunTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: v1alpha_runtime_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: v1alpha_runtime_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: v1alpha_runtime_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    runGraph(request: v1alpha_runtime_pb.RunGraphRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
    runGraph(request: v1alpha_runtime_pb.RunGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
    runGraph(request: v1alpha_runtime_pb.RunGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
}

export class RuntimeClient extends grpc.Client implements IRuntimeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listTasks(request: v1alpha_runtime_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: v1alpha_runtime_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: v1alpha_runtime_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.ListTasksResponse) => void): grpc.ClientUnaryCall;
    public runTask(request: v1alpha_runtime_pb.RunTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    public runTask(request: v1alpha_runtime_pb.RunTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    public runTask(request: v1alpha_runtime_pb.RunTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: v1alpha_runtime_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: v1alpha_runtime_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: v1alpha_runtime_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    public awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    public awaitTask(request: v1alpha_runtime_pb.AwaitTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.AwaitTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: v1alpha_runtime_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public runGraph(request: v1alpha_runtime_pb.RunGraphRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
    public runGraph(request: v1alpha_runtime_pb.RunGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
    public runGraph(request: v1alpha_runtime_pb.RunGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_runtime_pb.RunGraphResponse) => void): grpc.ClientUnaryCall;
}
