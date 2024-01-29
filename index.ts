import * as pulumi from "@pulumi/pulumi";
import * as grpc from "@grpc/grpc-js";
import * as crypto from "crypto";
import * as fabric from "./protos/helloworld_grpc_pb";

const randomprovider: pulumi.dynamic.ResourceProvider = {
    async create(inputs) {
        const creds = grpc.credentials.combineChannelCredentials(
            grpc.credentials.createSsl(),
        );
        const url = "localhost:50051";
        const client = new fabric.GreeterClient(url, creds);
        return { id: crypto.randomBytes(16).toString('hex'), outs: {}};
    },
}

export class Random extends pulumi.dynamic.Resource {
    constructor(name: string, opts?: pulumi.CustomResourceOptions) {
        super(randomprovider, name, {}, opts);
    }
}

export const random = new Random("random");
