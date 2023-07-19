// package: tierkreis.v1alpha.runtime
// file: v1alpha/runtime.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";
import * as v1alpha_signature_pb from "../v1alpha/signature_pb";

export class Callback extends jspb.Message { 
    getUri(): string;
    setUri(value: string): Callback;

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): v1alpha_graph_pb.Location | undefined;
    setLoc(value?: v1alpha_graph_pb.Location): Callback;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Callback.AsObject;
    static toObject(includeInstance: boolean, msg: Callback): Callback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Callback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Callback;
    static deserializeBinaryFromReader(message: Callback, reader: jspb.BinaryReader): Callback;
}

export namespace Callback {
    export type AsObject = {
        uri: string,
        loc?: v1alpha_graph_pb.Location.AsObject,
    }
}

export class RunTaskRequest extends jspb.Message { 

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): v1alpha_graph_pb.Graph | undefined;
    setGraph(value?: v1alpha_graph_pb.Graph): RunTaskRequest;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): v1alpha_graph_pb.StructValue | undefined;
    setInputs(value?: v1alpha_graph_pb.StructValue): RunTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunTaskRequest): RunTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunTaskRequest;
    static deserializeBinaryFromReader(message: RunTaskRequest, reader: jspb.BinaryReader): RunTaskRequest;
}

export namespace RunTaskRequest {
    export type AsObject = {
        graph?: v1alpha_graph_pb.Graph.AsObject,
        inputs?: v1alpha_graph_pb.StructValue.AsObject,
    }
}

export class RunTaskResponse extends jspb.Message { 

    hasTaskId(): boolean;
    clearTaskId(): void;
    getTaskId(): string;
    setTaskId(value: string): RunTaskResponse;

    hasTypeErrors(): boolean;
    clearTypeErrors(): void;
    getTypeErrors(): v1alpha_signature_pb.TypeErrors | undefined;
    setTypeErrors(value?: v1alpha_signature_pb.TypeErrors): RunTaskResponse;

    getResultCase(): RunTaskResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunTaskResponse): RunTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunTaskResponse;
    static deserializeBinaryFromReader(message: RunTaskResponse, reader: jspb.BinaryReader): RunTaskResponse;
}

export namespace RunTaskResponse {
    export type AsObject = {
        taskId: string,
        typeErrors?: v1alpha_signature_pb.TypeErrors.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        TASK_ID = 1,
        TYPE_ERRORS = 2,
    }

}

export class ListTasksRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
    static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
    export type AsObject = {
    }
}

export class ListTasksResponse extends jspb.Message { 
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): ListTasksResponse;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTasksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTasksResponse): ListTasksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTasksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTasksResponse;
    static deserializeBinaryFromReader(message: ListTasksResponse, reader: jspb.BinaryReader): ListTasksResponse;
}

export namespace ListTasksResponse {
    export type AsObject = {
        tasksList: Array<Task.AsObject>,
    }
}

export class DeleteTaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
    static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteTaskResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskResponse): DeleteTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskResponse;
    static deserializeBinaryFromReader(message: DeleteTaskResponse, reader: jspb.BinaryReader): DeleteTaskResponse;
}

export namespace DeleteTaskResponse {
    export type AsObject = {
    }
}

export class GetTaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
    static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): GetTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskResponse): GetTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskResponse;
    static deserializeBinaryFromReader(message: GetTaskResponse, reader: jspb.BinaryReader): GetTaskResponse;
}

export namespace GetTaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class AwaitTaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AwaitTaskRequest;
    getTimeout(): number;
    setTimeout(value: number): AwaitTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AwaitTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AwaitTaskRequest): AwaitTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AwaitTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AwaitTaskRequest;
    static deserializeBinaryFromReader(message: AwaitTaskRequest, reader: jspb.BinaryReader): AwaitTaskRequest;
}

export namespace AwaitTaskRequest {
    export type AsObject = {
        id: string,
        timeout: number,
    }
}

export class AwaitTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): AwaitTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AwaitTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AwaitTaskResponse): AwaitTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AwaitTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AwaitTaskResponse;
    static deserializeBinaryFromReader(message: AwaitTaskResponse, reader: jspb.BinaryReader): AwaitTaskResponse;
}

export namespace AwaitTaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class Task extends jspb.Message { 
    getId(): string;
    setId(value: string): Task;

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): v1alpha_graph_pb.StructValue | undefined;
    setSuccess(value?: v1alpha_graph_pb.StructValue): Task;

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): Task;

    getStatusCase(): Task.StatusCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: string,
        success?: v1alpha_graph_pb.StructValue.AsObject,
        error: string,
    }

    export enum StatusCase {
        STATUS_NOT_SET = 0,
        SUCCESS = 2,
        ERROR = 3,
    }

}

export class RunGraphRequest extends jspb.Message { 

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): v1alpha_graph_pb.Graph | undefined;
    setGraph(value?: v1alpha_graph_pb.Graph): RunGraphRequest;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): v1alpha_graph_pb.StructValue | undefined;
    setInputs(value?: v1alpha_graph_pb.StructValue): RunGraphRequest;
    getTypeCheck(): boolean;
    setTypeCheck(value: boolean): RunGraphRequest;

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): v1alpha_graph_pb.Location | undefined;
    setLoc(value?: v1alpha_graph_pb.Location): RunGraphRequest;

    hasEscape(): boolean;
    clearEscape(): void;
    getEscape(): Callback | undefined;
    setEscape(value?: Callback): RunGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunGraphRequest): RunGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunGraphRequest;
    static deserializeBinaryFromReader(message: RunGraphRequest, reader: jspb.BinaryReader): RunGraphRequest;
}

export namespace RunGraphRequest {
    export type AsObject = {
        graph?: v1alpha_graph_pb.Graph.AsObject,
        inputs?: v1alpha_graph_pb.StructValue.AsObject,
        typeCheck: boolean,
        loc?: v1alpha_graph_pb.Location.AsObject,
        escape?: Callback.AsObject,
    }
}

export class RunGraphResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): v1alpha_graph_pb.StructValue | undefined;
    setSuccess(value?: v1alpha_graph_pb.StructValue): RunGraphResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): RunGraphResponse;

    hasTypeErrors(): boolean;
    clearTypeErrors(): void;
    getTypeErrors(): v1alpha_signature_pb.TypeErrors | undefined;
    setTypeErrors(value?: v1alpha_signature_pb.TypeErrors): RunGraphResponse;

    getResultCase(): RunGraphResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunGraphResponse): RunGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunGraphResponse;
    static deserializeBinaryFromReader(message: RunGraphResponse, reader: jspb.BinaryReader): RunGraphResponse;
}

export namespace RunGraphResponse {
    export type AsObject = {
        success?: v1alpha_graph_pb.StructValue.AsObject,
        error: string,
        typeErrors?: v1alpha_signature_pb.TypeErrors.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
        TYPE_ERRORS = 3,
    }

}
