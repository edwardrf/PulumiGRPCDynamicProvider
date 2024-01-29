// GENERATED CODE -- DO NOT EDIT!

// package: helloworld
// file: protos/helloworld.proto

import * as protos_helloworld_pb from "../protos/helloworld_pb";
import * as grpc from "@grpc/grpc-js";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
  sayHelloStreamReply: grpc.MethodDefinition<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
  sayHelloBidiStream: grpc.MethodDefinition<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
  sayHelloStreamReply: grpc.handleServerStreamingCall<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
  sayHelloBidiStream: grpc.handleBidiStreamingCall<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
}

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: protos_helloworld_pb.HelloRequest, callback: grpc.requestCallback<protos_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: protos_helloworld_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: protos_helloworld_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHelloStreamReply(argument: protos_helloworld_pb.HelloRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<protos_helloworld_pb.HelloReply>;
  sayHelloStreamReply(argument: protos_helloworld_pb.HelloRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<protos_helloworld_pb.HelloReply>;
  sayHelloBidiStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
  sayHelloBidiStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<protos_helloworld_pb.HelloRequest, protos_helloworld_pb.HelloReply>;
}
