// package: tierkreis.v1alpha.graph
// file: v1alpha/graph.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Location extends jspb.Message { 
    clearLocationList(): void;
    getLocationList(): Array<string>;
    setLocationList(value: Array<string>): Location;
    addLocation(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        locationList: Array<string>,
    }
}

export class StructValue extends jspb.Message { 

    getMapMap(): jspb.Map<string, Value>;
    clearMapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructValue.AsObject;
    static toObject(includeInstance: boolean, msg: StructValue): StructValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructValue;
    static deserializeBinaryFromReader(message: StructValue, reader: jspb.BinaryReader): StructValue;
}

export namespace StructValue {
    export type AsObject = {

        mapMap: Array<[string, Value.AsObject]>,
    }
}

export class PairValue extends jspb.Message { 

    hasFirst(): boolean;
    clearFirst(): void;
    getFirst(): Value | undefined;
    setFirst(value?: Value): PairValue;

    hasSecond(): boolean;
    clearSecond(): void;
    getSecond(): Value | undefined;
    setSecond(value?: Value): PairValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairValue.AsObject;
    static toObject(includeInstance: boolean, msg: PairValue): PairValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairValue;
    static deserializeBinaryFromReader(message: PairValue, reader: jspb.BinaryReader): PairValue;
}

export namespace PairValue {
    export type AsObject = {
        first?: Value.AsObject,
        second?: Value.AsObject,
    }
}

export class MapValue extends jspb.Message { 
    clearPairsList(): void;
    getPairsList(): Array<PairValue>;
    setPairsList(value: Array<PairValue>): MapValue;
    addPairs(value?: PairValue, index?: number): PairValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapValue.AsObject;
    static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapValue;
    static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
    export type AsObject = {
        pairsList: Array<PairValue.AsObject>,
    }
}

export class VecValue extends jspb.Message { 
    clearVecList(): void;
    getVecList(): Array<Value>;
    setVecList(value: Array<Value>): VecValue;
    addVec(value?: Value, index?: number): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VecValue.AsObject;
    static toObject(includeInstance: boolean, msg: VecValue): VecValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VecValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VecValue;
    static deserializeBinaryFromReader(message: VecValue, reader: jspb.BinaryReader): VecValue;
}

export namespace VecValue {
    export type AsObject = {
        vecList: Array<Value.AsObject>,
    }
}

export class VariantValue extends jspb.Message { 
    getTag(): string;
    setTag(value: string): VariantValue;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Value | undefined;
    setValue(value?: Value): VariantValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariantValue.AsObject;
    static toObject(includeInstance: boolean, msg: VariantValue): VariantValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariantValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariantValue;
    static deserializeBinaryFromReader(message: VariantValue, reader: jspb.BinaryReader): VariantValue;
}

export namespace VariantValue {
    export type AsObject = {
        tag: string,
        value?: Value.AsObject,
    }
}

export class Value extends jspb.Message { 

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): Graph | undefined;
    setGraph(value?: Graph): Value;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): number;
    setInteger(value: number): Value;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): boolean;
    setBoolean(value: boolean): Value;

    hasStr(): boolean;
    clearStr(): void;
    getStr(): string;
    setStr(value: string): Value;

    hasFlt(): boolean;
    clearFlt(): void;
    getFlt(): number;
    setFlt(value: number): Value;

    hasPair(): boolean;
    clearPair(): void;
    getPair(): PairValue | undefined;
    setPair(value?: PairValue): Value;

    hasVec(): boolean;
    clearVec(): void;
    getVec(): VecValue | undefined;
    setVec(value?: VecValue): Value;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): MapValue | undefined;
    setMap(value?: MapValue): Value;

    hasStruct(): boolean;
    clearStruct(): void;
    getStruct(): StructValue | undefined;
    setStruct(value?: StructValue): Value;

    hasVariant(): boolean;
    clearVariant(): void;
    getVariant(): VariantValue | undefined;
    setVariant(value?: VariantValue): Value;

    getValueCase(): Value.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        graph?: Graph.AsObject,
        integer: number,
        pb_boolean: boolean,
        str: string,
        flt: number,
        pair?: PairValue.AsObject,
        vec?: VecValue.AsObject,
        map?: MapValue.AsObject,
        struct?: StructValue.AsObject,
        variant?: VariantValue.AsObject,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        GRAPH = 1,
        INTEGER = 2,
        BOOLEAN = 3,
        STR = 9,
        FLT = 10,
        PAIR = 4,
        VEC = 5,
        MAP = 7,
        STRUCT = 8,
        VARIANT = 12,
    }

}

export class Output extends jspb.Message { 

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): Edge | undefined;
    setEdge(value?: Edge): Output;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Value | undefined;
    setValue(value?: Value): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        edge?: Edge.AsObject,
        value?: Value.AsObject,
    }
}

export class OutputStream extends jspb.Message { 
    clearStreamList(): void;
    getStreamList(): Array<Output>;
    setStreamList(value: Array<Output>): OutputStream;
    addStream(value?: Output, index?: number): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputStream.AsObject;
    static toObject(includeInstance: boolean, msg: OutputStream): OutputStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputStream;
    static deserializeBinaryFromReader(message: OutputStream, reader: jspb.BinaryReader): OutputStream;
}

export namespace OutputStream {
    export type AsObject = {
        streamList: Array<Output.AsObject>,
    }
}

export class Type extends jspb.Message { 

    hasVar(): boolean;
    clearVar(): void;
    getVar(): string;
    setVar(value: string): Type;

    hasInt(): boolean;
    clearInt(): void;
    getInt(): Empty | undefined;
    setInt(value?: Empty): Type;

    hasBool(): boolean;
    clearBool(): void;
    getBool(): Empty | undefined;
    setBool(value?: Empty): Type;

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): GraphType | undefined;
    setGraph(value?: GraphType): Type;

    hasPair(): boolean;
    clearPair(): void;
    getPair(): PairType | undefined;
    setPair(value?: PairType): Type;

    hasVec(): boolean;
    clearVec(): void;
    getVec(): Type | undefined;
    setVec(value?: Type): Type;

    hasRow(): boolean;
    clearRow(): void;
    getRow(): RowType | undefined;
    setRow(value?: RowType): Type;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): PairType | undefined;
    setMap(value?: PairType): Type;

    hasStruct(): boolean;
    clearStruct(): void;
    getStruct(): StructType | undefined;
    setStruct(value?: StructType): Type;

    hasStr(): boolean;
    clearStr(): void;
    getStr(): Empty | undefined;
    setStr(value?: Empty): Type;

    hasFlt(): boolean;
    clearFlt(): void;
    getFlt(): Empty | undefined;
    setFlt(value?: Empty): Type;

    hasVariant(): boolean;
    clearVariant(): void;
    getVariant(): RowType | undefined;
    setVariant(value?: RowType): Type;

    getTypeCase(): Type.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Type.AsObject;
    static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Type;
    static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
    export type AsObject = {
        pb_var: string,
        pb_int?: Empty.AsObject,
        bool?: Empty.AsObject,
        graph?: GraphType.AsObject,
        pair?: PairType.AsObject,
        vec?: Type.AsObject,
        row?: RowType.AsObject,
        map?: PairType.AsObject,
        struct?: StructType.AsObject,
        str?: Empty.AsObject,
        flt?: Empty.AsObject,
        variant?: RowType.AsObject,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        VAR = 1,
        INT = 2,
        BOOL = 3,
        GRAPH = 4,
        PAIR = 5,
        VEC = 6,
        ROW = 7,
        MAP = 9,
        STRUCT = 10,
        STR = 11,
        FLT = 12,
        VARIANT = 14,
    }

}

export class GraphType extends jspb.Message { 

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): RowType | undefined;
    setInputs(value?: RowType): GraphType;

    hasOutputs(): boolean;
    clearOutputs(): void;
    getOutputs(): RowType | undefined;
    setOutputs(value?: RowType): GraphType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraphType.AsObject;
    static toObject(includeInstance: boolean, msg: GraphType): GraphType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraphType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraphType;
    static deserializeBinaryFromReader(message: GraphType, reader: jspb.BinaryReader): GraphType;
}

export namespace GraphType {
    export type AsObject = {
        inputs?: RowType.AsObject,
        outputs?: RowType.AsObject,
    }
}

export class PairType extends jspb.Message { 

    hasFirst(): boolean;
    clearFirst(): void;
    getFirst(): Type | undefined;
    setFirst(value?: Type): PairType;

    hasSecond(): boolean;
    clearSecond(): void;
    getSecond(): Type | undefined;
    setSecond(value?: Type): PairType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairType.AsObject;
    static toObject(includeInstance: boolean, msg: PairType): PairType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairType;
    static deserializeBinaryFromReader(message: PairType, reader: jspb.BinaryReader): PairType;
}

export namespace PairType {
    export type AsObject = {
        first?: Type.AsObject,
        second?: Type.AsObject,
    }
}

export class RowType extends jspb.Message { 

    getContentMap(): jspb.Map<string, Type>;
    clearContentMap(): void;
    getRest(): string;
    setRest(value: string): RowType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RowType.AsObject;
    static toObject(includeInstance: boolean, msg: RowType): RowType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RowType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RowType;
    static deserializeBinaryFromReader(message: RowType, reader: jspb.BinaryReader): RowType;
}

export namespace RowType {
    export type AsObject = {

        contentMap: Array<[string, Type.AsObject]>,
        rest: string,
    }
}

export class StructType extends jspb.Message { 

    hasShape(): boolean;
    clearShape(): void;
    getShape(): RowType | undefined;
    setShape(value?: RowType): StructType;

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): StructType;

    getNameOptCase(): StructType.NameOptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructType.AsObject;
    static toObject(includeInstance: boolean, msg: StructType): StructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructType;
    static deserializeBinaryFromReader(message: StructType, reader: jspb.BinaryReader): StructType;
}

export namespace StructType {
    export type AsObject = {
        shape?: RowType.AsObject,
        name: string,
    }

    export enum NameOptCase {
        NAME_OPT_NOT_SET = 0,
        NAME = 2,
    }

}

export class FunctionName extends jspb.Message { 
    clearNamespacesList(): void;
    getNamespacesList(): Array<string>;
    setNamespacesList(value: Array<string>): FunctionName;
    addNamespaces(value: string, index?: number): string;
    getName(): string;
    setName(value: string): FunctionName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionName.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionName): FunctionName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionName;
    static deserializeBinaryFromReader(message: FunctionName, reader: jspb.BinaryReader): FunctionName;
}

export namespace FunctionName {
    export type AsObject = {
        namespacesList: Array<string>,
        name: string,
    }
}

export class BoxNode extends jspb.Message { 

    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): Location | undefined;
    setLoc(value?: Location): BoxNode;

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): Graph | undefined;
    setGraph(value?: Graph): BoxNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoxNode.AsObject;
    static toObject(includeInstance: boolean, msg: BoxNode): BoxNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoxNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoxNode;
    static deserializeBinaryFromReader(message: BoxNode, reader: jspb.BinaryReader): BoxNode;
}

export namespace BoxNode {
    export type AsObject = {
        loc?: Location.AsObject,
        graph?: Graph.AsObject,
    }
}

export class Node extends jspb.Message { 

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Empty | undefined;
    setInput(value?: Empty): Node;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Empty | undefined;
    setOutput(value?: Empty): Node;

    hasConst(): boolean;
    clearConst(): void;
    getConst(): Value | undefined;
    setConst(value?: Value): Node;

    hasBox(): boolean;
    clearBox(): void;
    getBox(): BoxNode | undefined;
    setBox(value?: BoxNode): Node;

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): FunctionName | undefined;
    setFunction(value?: FunctionName): Node;

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): Empty | undefined;
    setMatch(value?: Empty): Node;

    hasTag(): boolean;
    clearTag(): void;
    getTag(): string;
    setTag(value: string): Node;

    getNodeCase(): Node.NodeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        input?: Empty.AsObject,
        output?: Empty.AsObject,
        pb_const?: Value.AsObject,
        box?: BoxNode.AsObject,
        pb_function?: FunctionName.AsObject,
        match?: Empty.AsObject,
        tag: string,
    }

    export enum NodeCase {
        NODE_NOT_SET = 0,
        INPUT = 1,
        OUTPUT = 2,
        CONST = 3,
        BOX = 4,
        FUNCTION = 5,
        MATCH = 6,
        TAG = 7,
    }

}

export class Edge extends jspb.Message { 
    getPortFrom(): string;
    setPortFrom(value: string): Edge;
    getPortTo(): string;
    setPortTo(value: string): Edge;
    getNodeFrom(): number;
    setNodeFrom(value: number): Edge;
    getNodeTo(): number;
    setNodeTo(value: number): Edge;

    hasEdgeType(): boolean;
    clearEdgeType(): void;
    getEdgeType(): Type | undefined;
    setEdgeType(value?: Type): Edge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Edge.AsObject;
    static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Edge;
    static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
    export type AsObject = {
        portFrom: string,
        portTo: string,
        nodeFrom: number,
        nodeTo: number,
        edgeType?: Type.AsObject,
    }
}

export class Graph extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<Node>;
    setNodesList(value: Array<Node>): Graph;
    addNodes(value?: Node, index?: number): Node;
    clearEdgesList(): void;
    getEdgesList(): Array<Edge>;
    setEdgesList(value: Array<Edge>): Graph;
    addEdges(value?: Edge, index?: number): Edge;
    getName(): string;
    setName(value: string): Graph;
    clearInputOrderList(): void;
    getInputOrderList(): Array<string>;
    setInputOrderList(value: Array<string>): Graph;
    addInputOrder(value: string, index?: number): string;
    clearOutputOrderList(): void;
    getOutputOrderList(): Array<string>;
    setOutputOrderList(value: Array<string>): Graph;
    addOutputOrder(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Graph.AsObject;
    static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Graph;
    static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
}

export namespace Graph {
    export type AsObject = {
        nodesList: Array<Node.AsObject>,
        edgesList: Array<Edge.AsObject>,
        name: string,
        inputOrderList: Array<string>,
        outputOrderList: Array<string>,
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

export class TypeScheme extends jspb.Message { 
    clearVariablesList(): void;
    getVariablesList(): Array<TypeSchemeVar>;
    setVariablesList(value: Array<TypeSchemeVar>): TypeScheme;
    addVariables(value?: TypeSchemeVar, index?: number): TypeSchemeVar;
    clearConstraintsList(): void;
    getConstraintsList(): Array<Constraint>;
    setConstraintsList(value: Array<Constraint>): TypeScheme;
    addConstraints(value?: Constraint, index?: number): Constraint;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Type | undefined;
    setBody(value?: Type): TypeScheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeScheme.AsObject;
    static toObject(includeInstance: boolean, msg: TypeScheme): TypeScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeScheme;
    static deserializeBinaryFromReader(message: TypeScheme, reader: jspb.BinaryReader): TypeScheme;
}

export namespace TypeScheme {
    export type AsObject = {
        variablesList: Array<TypeSchemeVar.AsObject>,
        constraintsList: Array<Constraint.AsObject>,
        body?: Type.AsObject,
    }
}

export class TypeSchemeVar extends jspb.Message { 
    getName(): string;
    setName(value: string): TypeSchemeVar;

    hasKind(): boolean;
    clearKind(): void;
    getKind(): Kind | undefined;
    setKind(value?: Kind): TypeSchemeVar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeSchemeVar.AsObject;
    static toObject(includeInstance: boolean, msg: TypeSchemeVar): TypeSchemeVar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeSchemeVar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeSchemeVar;
    static deserializeBinaryFromReader(message: TypeSchemeVar, reader: jspb.BinaryReader): TypeSchemeVar;
}

export namespace TypeSchemeVar {
    export type AsObject = {
        name: string,
        kind?: Kind.AsObject,
    }
}

export class Constraint extends jspb.Message { 

    hasLacks(): boolean;
    clearLacks(): void;
    getLacks(): LacksConstraint | undefined;
    setLacks(value?: LacksConstraint): Constraint;

    hasPartition(): boolean;
    clearPartition(): void;
    getPartition(): PartitionConstraint | undefined;
    setPartition(value?: PartitionConstraint): Constraint;

    getConstraintCase(): Constraint.ConstraintCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Constraint.AsObject;
    static toObject(includeInstance: boolean, msg: Constraint): Constraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Constraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Constraint;
    static deserializeBinaryFromReader(message: Constraint, reader: jspb.BinaryReader): Constraint;
}

export namespace Constraint {
    export type AsObject = {
        lacks?: LacksConstraint.AsObject,
        partition?: PartitionConstraint.AsObject,
    }

    export enum ConstraintCase {
        CONSTRAINT_NOT_SET = 0,
        LACKS = 1,
        PARTITION = 2,
    }

}

export class PartitionConstraint extends jspb.Message { 

    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): Type | undefined;
    setLeft(value?: Type): PartitionConstraint;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): Type | undefined;
    setRight(value?: Type): PartitionConstraint;

    hasUnion(): boolean;
    clearUnion(): void;
    getUnion(): Type | undefined;
    setUnion(value?: Type): PartitionConstraint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartitionConstraint.AsObject;
    static toObject(includeInstance: boolean, msg: PartitionConstraint): PartitionConstraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartitionConstraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartitionConstraint;
    static deserializeBinaryFromReader(message: PartitionConstraint, reader: jspb.BinaryReader): PartitionConstraint;
}

export namespace PartitionConstraint {
    export type AsObject = {
        left?: Type.AsObject,
        right?: Type.AsObject,
        union?: Type.AsObject,
    }
}

export class LacksConstraint extends jspb.Message { 

    hasRow(): boolean;
    clearRow(): void;
    getRow(): Type | undefined;
    setRow(value?: Type): LacksConstraint;
    getLabel(): string;
    setLabel(value: string): LacksConstraint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LacksConstraint.AsObject;
    static toObject(includeInstance: boolean, msg: LacksConstraint): LacksConstraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LacksConstraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LacksConstraint;
    static deserializeBinaryFromReader(message: LacksConstraint, reader: jspb.BinaryReader): LacksConstraint;
}

export namespace LacksConstraint {
    export type AsObject = {
        row?: Type.AsObject,
        label: string,
    }
}

export class Kind extends jspb.Message { 

    hasStar(): boolean;
    clearStar(): void;
    getStar(): Empty | undefined;
    setStar(value?: Empty): Kind;

    hasRow(): boolean;
    clearRow(): void;
    getRow(): Empty | undefined;
    setRow(value?: Empty): Kind;

    getKindCase(): Kind.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Kind.AsObject;
    static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Kind;
    static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
}

export namespace Kind {
    export type AsObject = {
        star?: Empty.AsObject,
        row?: Empty.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        STAR = 1,
        ROW = 2,
    }

}
