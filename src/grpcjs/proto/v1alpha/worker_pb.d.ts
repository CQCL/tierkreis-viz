// package: tierkreis.v1alpha.worker
// file: v1alpha/worker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";
import * as v1alpha_runtime_pb from "../v1alpha/runtime_pb";

export class RunFunctionRequest extends jspb.Message { 

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): v1alpha_graph_pb.FunctionName | undefined;
    setFunction(value?: v1alpha_graph_pb.FunctionName): RunFunctionRequest;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): v1alpha_graph_pb.StructValue | undefined;
    setInputs(value?: v1alpha_graph_pb.StructValue): RunFunctionRequest;

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): v1alpha_graph_pb.Location | undefined;
    setLoc(value?: v1alpha_graph_pb.Location): RunFunctionRequest;

    hasCallback(): boolean;
    clearCallback(): void;
    getCallback(): v1alpha_runtime_pb.Callback | undefined;
    setCallback(value?: v1alpha_runtime_pb.Callback): RunFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunFunctionRequest): RunFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunFunctionRequest;
    static deserializeBinaryFromReader(message: RunFunctionRequest, reader: jspb.BinaryReader): RunFunctionRequest;
}

export namespace RunFunctionRequest {
    export type AsObject = {
        pb_function?: v1alpha_graph_pb.FunctionName.AsObject,
        inputs?: v1alpha_graph_pb.StructValue.AsObject,
        loc?: v1alpha_graph_pb.Location.AsObject,
        callback?: v1alpha_runtime_pb.Callback.AsObject,
    }
}

export class RunFunctionResponse extends jspb.Message { 

    hasOutputs(): boolean;
    clearOutputs(): void;
    getOutputs(): v1alpha_graph_pb.StructValue | undefined;
    setOutputs(value?: v1alpha_graph_pb.StructValue): RunFunctionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunFunctionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunFunctionResponse): RunFunctionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunFunctionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunFunctionResponse;
    static deserializeBinaryFromReader(message: RunFunctionResponse, reader: jspb.BinaryReader): RunFunctionResponse;
}

export namespace RunFunctionResponse {
    export type AsObject = {
        outputs?: v1alpha_graph_pb.StructValue.AsObject,
    }
}
