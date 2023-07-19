// package: tierkreis.v1alpha.signature
// file: v1alpha/signature.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1alpha_signature_pb from "../v1alpha/signature_pb";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";

interface ISignatureService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listFunctions: ISignatureService_IListFunctions;
}

interface ISignatureService_IListFunctions extends grpc.MethodDefinition<v1alpha_signature_pb.ListFunctionsRequest, v1alpha_signature_pb.ListFunctionsResponse> {
    path: "/tierkreis.v1alpha.signature.Signature/ListFunctions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_signature_pb.ListFunctionsRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_signature_pb.ListFunctionsRequest>;
    responseSerialize: grpc.serialize<v1alpha_signature_pb.ListFunctionsResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_signature_pb.ListFunctionsResponse>;
}

export const SignatureService: ISignatureService;

export interface ISignatureServer extends grpc.UntypedServiceImplementation {
    listFunctions: grpc.handleUnaryCall<v1alpha_signature_pb.ListFunctionsRequest, v1alpha_signature_pb.ListFunctionsResponse>;
}

export interface ISignatureClient {
    listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
}

export class SignatureClient extends grpc.Client implements ISignatureClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    public listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    public listFunctions(request: v1alpha_signature_pb.ListFunctionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
}

interface ITypeInferenceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    inferType: ITypeInferenceService_IInferType;
}

interface ITypeInferenceService_IInferType extends grpc.MethodDefinition<v1alpha_signature_pb.InferTypeRequest, v1alpha_signature_pb.InferTypeResponse> {
    path: "/tierkreis.v1alpha.signature.TypeInference/InferType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1alpha_signature_pb.InferTypeRequest>;
    requestDeserialize: grpc.deserialize<v1alpha_signature_pb.InferTypeRequest>;
    responseSerialize: grpc.serialize<v1alpha_signature_pb.InferTypeResponse>;
    responseDeserialize: grpc.deserialize<v1alpha_signature_pb.InferTypeResponse>;
}

export const TypeInferenceService: ITypeInferenceService;

export interface ITypeInferenceServer extends grpc.UntypedServiceImplementation {
    inferType: grpc.handleUnaryCall<v1alpha_signature_pb.InferTypeRequest, v1alpha_signature_pb.InferTypeResponse>;
}

export interface ITypeInferenceClient {
    inferType(request: v1alpha_signature_pb.InferTypeRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
    inferType(request: v1alpha_signature_pb.InferTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
    inferType(request: v1alpha_signature_pb.InferTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
}

export class TypeInferenceClient extends grpc.Client implements ITypeInferenceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public inferType(request: v1alpha_signature_pb.InferTypeRequest, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
    public inferType(request: v1alpha_signature_pb.InferTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
    public inferType(request: v1alpha_signature_pb.InferTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1alpha_signature_pb.InferTypeResponse) => void): grpc.ClientUnaryCall;
}
