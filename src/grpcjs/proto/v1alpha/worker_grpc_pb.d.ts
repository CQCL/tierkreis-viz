// package: tierkreis.v1alpha.worker
// file: v1alpha/worker.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1alpha_worker_pb from "../v1alpha/worker_pb";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";
import * as v1alpha_runtime_pb from "../v1alpha/runtime_pb";

interface IWorkerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    runFunction: IWorkerService_IRunFunction;
}

interface IWorkerService_IRunFunction extends grpc.MethodDefinition<v1alpha_worker_pb.RunFunctionRequest, v1alpha_worker_pb.RunFunctionResponse> {
    path: "/tierkreis.v1alpha.worker.Worker/RunFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_worker_pb.RunFunctionRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_worker_pb.RunFunctionRequest>;
    responseSerialize: grpc.serialize<v1alpha_worker_pb.RunFunctionResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_worker_pb.RunFunctionResponse>;
}

export const WorkerService: IWorkerService;

export interface IWorkerServer extends grpc.UntypedServiceImplementation {
    runFunction: grpc.handleUnaryCall<v1alpha_worker_pb.RunFunctionRequest, v1alpha_worker_pb.RunFunctionResponse>;
}

export interface IWorkerClient {
    runFunction(request: v1alpha_worker_pb.RunFunctionRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
    runFunction(request: v1alpha_worker_pb.RunFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
    runFunction(request: v1alpha_worker_pb.RunFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
}

export class WorkerClient extends grpc.Client implements IWorkerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public runFunction(request: v1alpha_worker_pb.RunFunctionRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
    public runFunction(request: v1alpha_worker_pb.RunFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
    public runFunction(request: v1alpha_worker_pb.RunFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_worker_pb.RunFunctionResponse) => void): grpc.ClientUnaryCall;
}
