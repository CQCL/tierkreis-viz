// package: tierkreis.v1alpha.signature
// file: v1alpha/signature.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v1alpha_graph_pb from "../v1alpha/graph_pb";

export class FunctionDeclaration extends jspb.Message { 

    hasTypeScheme(): boolean;
    clearTypeScheme(): void;
    getTypeScheme(): v1alpha_graph_pb.TypeScheme | undefined;
    setTypeScheme(value?: v1alpha_graph_pb.TypeScheme): FunctionDeclaration;
    getDescription(): string;
    setDescription(value: string): FunctionDeclaration;
    clearInputOrderList(): void;
    getInputOrderList(): Array<string>;
    setInputOrderList(value: Array<string>): FunctionDeclaration;
    addInputOrder(value: string, index?: number): string;
    clearOutputOrderList(): void;
    getOutputOrderList(): Array<string>;
    setOutputOrderList(value: Array<string>): FunctionDeclaration;
    addOutputOrder(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionDeclaration.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionDeclaration): FunctionDeclaration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionDeclaration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionDeclaration;
    static deserializeBinaryFromReader(message: FunctionDeclaration, reader: jspb.BinaryReader): FunctionDeclaration;
}

export namespace FunctionDeclaration {
    export type AsObject = {
        typeScheme?: v1alpha_graph_pb.TypeScheme.AsObject,
        description: string,
        inputOrderList: Array<string>,
        outputOrderList: Array<string>,
    }
}

export class ListFunctionsRequest extends jspb.Message { 

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): v1alpha_graph_pb.Location | undefined;
    setLoc(value?: v1alpha_graph_pb.Location): ListFunctionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsRequest): ListFunctionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsRequest;
    static deserializeBinaryFromReader(message: ListFunctionsRequest, reader: jspb.BinaryReader): ListFunctionsRequest;
}

export namespace ListFunctionsRequest {
    export type AsObject = {
        loc?: v1alpha_graph_pb.Location.AsObject,
    }
}

export class ListFunctionsResponse extends jspb.Message { 

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): Namespace | undefined;
    setRoot(value?: Namespace): ListFunctionsResponse;

    getAliasesMap(): jspb.Map<string, v1alpha_graph_pb.TypeScheme>;
    clearAliasesMap(): void;
    clearScopesList(): void;
    getScopesList(): Array<v1alpha_graph_pb.Location>;
    setScopesList(value: Array<v1alpha_graph_pb.Location>): ListFunctionsResponse;
    addScopes(value?: v1alpha_graph_pb.Location, index?: number): v1alpha_graph_pb.Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsResponse): ListFunctionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsResponse;
    static deserializeBinaryFromReader(message: ListFunctionsResponse, reader: jspb.BinaryReader): ListFunctionsResponse;
}

export namespace ListFunctionsResponse {
    export type AsObject = {
        root?: Namespace.AsObject,

        aliasesMap: Array<[string, v1alpha_graph_pb.TypeScheme.AsObject]>,
        scopesList: Array<v1alpha_graph_pb.Location.AsObject>,
    }
}

export class InferTypeRequest extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): v1alpha_graph_pb.Value | undefined;
    setValue(value?: v1alpha_graph_pb.Value): InferTypeRequest;

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): v1alpha_graph_pb.Location | undefined;
    setLoc(value?: v1alpha_graph_pb.Location): InferTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InferTypeRequest): InferTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InferTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferTypeRequest;
    static deserializeBinaryFromReader(message: InferTypeRequest, reader: jspb.BinaryReader): InferTypeRequest;
}

export namespace InferTypeRequest {
    export type AsObject = {
        value?: v1alpha_graph_pb.Value.AsObject,
        loc?: v1alpha_graph_pb.Location.AsObject,
    }
}

export class InferTypeResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): InferTypeSuccess | undefined;
    setSuccess(value?: InferTypeSuccess): InferTypeResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): TypeErrors | undefined;
    setError(value?: TypeErrors): InferTypeResponse;

    getResponseCase(): InferTypeResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InferTypeResponse): InferTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InferTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferTypeResponse;
    static deserializeBinaryFromReader(message: InferTypeResponse, reader: jspb.BinaryReader): InferTypeResponse;
}

export namespace InferTypeResponse {
    export type AsObject = {
        success?: InferTypeSuccess.AsObject,
        error?: TypeErrors.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class InferTypeSuccess extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): v1alpha_graph_pb.Value | undefined;
    setValue(value?: v1alpha_graph_pb.Value): InferTypeSuccess;

    hasTypeScheme(): boolean;
    clearTypeScheme(): void;
    getTypeScheme(): v1alpha_graph_pb.TypeScheme | undefined;
    setTypeScheme(value?: v1alpha_graph_pb.TypeScheme): InferTypeSuccess;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferTypeSuccess.AsObject;
    static toObject(includeInstance: boolean, msg: InferTypeSuccess): InferTypeSuccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InferTypeSuccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferTypeSuccess;
    static deserializeBinaryFromReader(message: InferTypeSuccess, reader: jspb.BinaryReader): InferTypeSuccess;
}

export namespace InferTypeSuccess {
    export type AsObject = {
        value?: v1alpha_graph_pb.Value.AsObject,
        typeScheme?: v1alpha_graph_pb.TypeScheme.AsObject,
    }
}

export class GraphWithInputs extends jspb.Message { 

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): v1alpha_graph_pb.Graph | undefined;
    setGraph(value?: v1alpha_graph_pb.Graph): GraphWithInputs;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): v1alpha_graph_pb.StructValue | undefined;
    setInputs(value?: v1alpha_graph_pb.StructValue): GraphWithInputs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraphWithInputs.AsObject;
    static toObject(includeInstance: boolean, msg: GraphWithInputs): GraphWithInputs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraphWithInputs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraphWithInputs;
    static deserializeBinaryFromReader(message: GraphWithInputs, reader: jspb.BinaryReader): GraphWithInputs;
}

export namespace GraphWithInputs {
    export type AsObject = {
        graph?: v1alpha_graph_pb.Graph.AsObject,
        inputs?: v1alpha_graph_pb.StructValue.AsObject,
    }
}

export class InferGraphTypesRequest extends jspb.Message { 

    hasGwi(): boolean;
    clearGwi(): void;
    getGwi(): GraphWithInputs | undefined;
    setGwi(value?: GraphWithInputs): InferGraphTypesRequest;

    hasFunctions(): boolean;
    clearFunctions(): void;
    getFunctions(): Namespace | undefined;
    setFunctions(value?: Namespace): InferGraphTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferGraphTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InferGraphTypesRequest): InferGraphTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InferGraphTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferGraphTypesRequest;
    static deserializeBinaryFromReader(message: InferGraphTypesRequest, reader: jspb.BinaryReader): InferGraphTypesRequest;
}

export namespace InferGraphTypesRequest {
    export type AsObject = {
        gwi?: GraphWithInputs.AsObject,
        functions?: Namespace.AsObject,
    }
}

export class InferGraphTypesResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): GraphWithInputs | undefined;
    setSuccess(value?: GraphWithInputs): InferGraphTypesResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): TypeErrors | undefined;
    setError(value?: TypeErrors): InferGraphTypesResponse;

    getResponseCase(): InferGraphTypesResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferGraphTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InferGraphTypesResponse): InferGraphTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InferGraphTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferGraphTypesResponse;
    static deserializeBinaryFromReader(message: InferGraphTypesResponse, reader: jspb.BinaryReader): InferGraphTypesResponse;
}

export namespace InferGraphTypesResponse {
    export type AsObject = {
        success?: GraphWithInputs.AsObject,
        error?: TypeErrors.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        SUCCESS = 1,
        ERROR = 2,
    }

}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class GraphLocation extends jspb.Message { 

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): Empty | undefined;
    setRoot(value?: Empty): GraphLocation;

    hasVecIndex(): boolean;
    clearVecIndex(): void;
    getVecIndex(): number;
    setVecIndex(value: number): GraphLocation;

    hasNodeIdx(): boolean;
    clearNodeIdx(): void;
    getNodeIdx(): number;
    setNodeIdx(value: number): GraphLocation;

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): v1alpha_graph_pb.Edge | undefined;
    setEdge(value?: v1alpha_graph_pb.Edge): GraphLocation;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Empty | undefined;
    setInput(value?: Empty): GraphLocation;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Empty | undefined;
    setOutput(value?: Empty): GraphLocation;

    hasStructField(): boolean;
    clearStructField(): void;
    getStructField(): string;
    setStructField(value: string): GraphLocation;

    hasPairFirst(): boolean;
    clearPairFirst(): void;
    getPairFirst(): Empty | undefined;
    setPairFirst(value?: Empty): GraphLocation;

    hasPairSecond(): boolean;
    clearPairSecond(): void;
    getPairSecond(): Empty | undefined;
    setPairSecond(value?: Empty): GraphLocation;

    hasMapKey(): boolean;
    clearMapKey(): void;
    getMapKey(): Empty | undefined;
    setMapKey(value?: Empty): GraphLocation;

    hasMapValue(): boolean;
    clearMapValue(): void;
    getMapValue(): Empty | undefined;
    setMapValue(value?: Empty): GraphLocation;

    hasInputValue(): boolean;
    clearInputValue(): void;
    getInputValue(): string;
    setInputValue(value: string): GraphLocation;

    getLocationCase(): GraphLocation.LocationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraphLocation.AsObject;
    static toObject(includeInstance: boolean, msg: GraphLocation): GraphLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraphLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraphLocation;
    static deserializeBinaryFromReader(message: GraphLocation, reader: jspb.BinaryReader): GraphLocation;
}

export namespace GraphLocation {
    export type AsObject = {
        root?: Empty.AsObject,
        vecIndex: number,
        nodeIdx: number,
        edge?: v1alpha_graph_pb.Edge.AsObject,
        input?: Empty.AsObject,
        output?: Empty.AsObject,
        structField: string,
        pairFirst?: Empty.AsObject,
        pairSecond?: Empty.AsObject,
        mapKey?: Empty.AsObject,
        mapValue?: Empty.AsObject,
        inputValue: string,
    }

    export enum LocationCase {
        LOCATION_NOT_SET = 0,
        ROOT = 1,
        VEC_INDEX = 2,
        NODE_IDX = 4,
        EDGE = 5,
        INPUT = 6,
        OUTPUT = 7,
        STRUCT_FIELD = 8,
        PAIR_FIRST = 9,
        PAIR_SECOND = 10,
        MAP_KEY = 11,
        MAP_VALUE = 12,
        INPUT_VALUE = 13,
    }

}

export class TypeErrors extends jspb.Message { 
    clearErrorsList(): void;
    getErrorsList(): Array<TierkreisTypeError>;
    setErrorsList(value: Array<TierkreisTypeError>): TypeErrors;
    addErrors(value?: TierkreisTypeError, index?: number): TierkreisTypeError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeErrors.AsObject;
    static toObject(includeInstance: boolean, msg: TypeErrors): TypeErrors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeErrors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeErrors;
    static deserializeBinaryFromReader(message: TypeErrors, reader: jspb.BinaryReader): TypeErrors;
}

export namespace TypeErrors {
    export type AsObject = {
        errorsList: Array<TierkreisTypeError.AsObject>,
    }
}

export class UnifyError extends jspb.Message { 

    hasExpected(): boolean;
    clearExpected(): void;
    getExpected(): v1alpha_graph_pb.Type | undefined;
    setExpected(value?: v1alpha_graph_pb.Type): UnifyError;

    hasFound(): boolean;
    clearFound(): void;
    getFound(): v1alpha_graph_pb.Type | undefined;
    setFound(value?: v1alpha_graph_pb.Type): UnifyError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnifyError.AsObject;
    static toObject(includeInstance: boolean, msg: UnifyError): UnifyError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnifyError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnifyError;
    static deserializeBinaryFromReader(message: UnifyError, reader: jspb.BinaryReader): UnifyError;
}

export namespace UnifyError {
    export type AsObject = {
        expected?: v1alpha_graph_pb.Type.AsObject,
        found?: v1alpha_graph_pb.Type.AsObject,
    }
}

export class TypeVarError extends jspb.Message { 

    hasVariable(): boolean;
    clearVariable(): void;
    getVariable(): v1alpha_graph_pb.TypeSchemeVar | undefined;
    setVariable(value?: v1alpha_graph_pb.TypeSchemeVar): TypeVarError;

    hasTypeScheme(): boolean;
    clearTypeScheme(): void;
    getTypeScheme(): v1alpha_graph_pb.TypeScheme | undefined;
    setTypeScheme(value?: v1alpha_graph_pb.TypeScheme): TypeVarError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeVarError.AsObject;
    static toObject(includeInstance: boolean, msg: TypeVarError): TypeVarError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeVarError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeVarError;
    static deserializeBinaryFromReader(message: TypeVarError, reader: jspb.BinaryReader): TypeVarError;
}

export namespace TypeVarError {
    export type AsObject = {
        variable?: v1alpha_graph_pb.TypeSchemeVar.AsObject,
        typeScheme?: v1alpha_graph_pb.TypeScheme.AsObject,
    }
}

export class ErrorVariant extends jspb.Message { 

    hasUnify(): boolean;
    clearUnify(): void;
    getUnify(): UnifyError | undefined;
    setUnify(value?: UnifyError): ErrorVariant;

    hasKind(): boolean;
    clearKind(): void;
    getKind(): string;
    setKind(value: string): ErrorVariant;

    hasUnknownFunction(): boolean;
    clearUnknownFunction(): void;
    getUnknownFunction(): v1alpha_graph_pb.FunctionName | undefined;
    setUnknownFunction(value?: v1alpha_graph_pb.FunctionName): ErrorVariant;

    hasUnknownTypeVar(): boolean;
    clearUnknownTypeVar(): void;
    getUnknownTypeVar(): TypeVarError | undefined;
    setUnknownTypeVar(value?: TypeVarError): ErrorVariant;

    hasBound(): boolean;
    clearBound(): void;
    getBound(): string;
    setBound(value: string): ErrorVariant;

    getErrorCase(): ErrorVariant.ErrorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorVariant.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorVariant): ErrorVariant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorVariant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorVariant;
    static deserializeBinaryFromReader(message: ErrorVariant, reader: jspb.BinaryReader): ErrorVariant;
}

export namespace ErrorVariant {
    export type AsObject = {
        unify?: UnifyError.AsObject,
        kind: string,
        unknownFunction?: v1alpha_graph_pb.FunctionName.AsObject,
        unknownTypeVar?: TypeVarError.AsObject,
        bound: string,
    }

    export enum ErrorCase {
        ERROR_NOT_SET = 0,
        UNIFY = 1,
        KIND = 2,
        UNKNOWN_FUNCTION = 3,
        UNKNOWN_TYPE_VAR = 4,
        BOUND = 5,
    }

}

export class TierkreisTypeError extends jspb.Message { 

    hasVariant(): boolean;
    clearVariant(): void;
    getVariant(): ErrorVariant | undefined;
    setVariant(value?: ErrorVariant): TierkreisTypeError;
    clearLocationList(): void;
    getLocationList(): Array<GraphLocation>;
    setLocationList(value: Array<GraphLocation>): TierkreisTypeError;
    addLocation(value?: GraphLocation, index?: number): GraphLocation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TierkreisTypeError.AsObject;
    static toObject(includeInstance: boolean, msg: TierkreisTypeError): TierkreisTypeError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TierkreisTypeError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TierkreisTypeError;
    static deserializeBinaryFromReader(message: TierkreisTypeError, reader: jspb.BinaryReader): TierkreisTypeError;
}

export namespace TierkreisTypeError {
    export type AsObject = {
        variant?: ErrorVariant.AsObject,
        locationList: Array<GraphLocation.AsObject>,
    }
}

export class NamespaceItem extends jspb.Message { 

    hasDecl(): boolean;
    clearDecl(): void;
    getDecl(): FunctionDeclaration | undefined;
    setDecl(value?: FunctionDeclaration): NamespaceItem;
    clearLocationsList(): void;
    getLocationsList(): Array<v1alpha_graph_pb.Location>;
    setLocationsList(value: Array<v1alpha_graph_pb.Location>): NamespaceItem;
    addLocations(value?: v1alpha_graph_pb.Location, index?: number): v1alpha_graph_pb.Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NamespaceItem.AsObject;
    static toObject(includeInstance: boolean, msg: NamespaceItem): NamespaceItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NamespaceItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NamespaceItem;
    static deserializeBinaryFromReader(message: NamespaceItem, reader: jspb.BinaryReader): NamespaceItem;
}

export namespace NamespaceItem {
    export type AsObject = {
        decl?: FunctionDeclaration.AsObject,
        locationsList: Array<v1alpha_graph_pb.Location.AsObject>,
    }
}

export class Namespace extends jspb.Message { 

    getFunctionsMap(): jspb.Map<string, NamespaceItem>;
    clearFunctionsMap(): void;

    getSubspacesMap(): jspb.Map<string, Namespace>;
    clearSubspacesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Namespace.AsObject;
    static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Namespace;
    static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
    export type AsObject = {

        functionsMap: Array<[string, NamespaceItem.AsObject]>,

        subspacesMap: Array<[string, Namespace.AsObject]>,
    }
}
