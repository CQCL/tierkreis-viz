#!/usr/bin/env bash

# Target dir
mkdir -p ./src/grpcjs/proto

# Generate JS code.
node_modules/.bin/grpc_tools_node_protoc  \
--js_out=import_style=commonjs,binary:./src/grpcjs/proto \
--grpc_out=grpc_js:./src/grpcjs/proto \
-I ./tierkreis/protos \
./tierkreis/protos/v1alpha/*.proto

# Generate typescript declaration files.
node_modules/.bin/grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./src/grpcjs/proto \
-I ./tierkreis/protos \
./tierkreis/protos/v1alpha/*.proto
