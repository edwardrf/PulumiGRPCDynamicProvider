### Demo of the pulumi dynamic provide not working well with gRPC service
This is a simple combination of the pulumi [Random dynamic provider example](https://www.pulumi.com/docs/concepts/resources/dynamic-providers/#example-random) and the [gRPC helloworld example](https://github.com/grpc/grpc/blob/v1.60.0/examples/protos/helloworld.proto)

To run the example simply use
```
make
```

There would be an error:

```
Updating (dev):
     Type                               Name             Status                  Info
     pulumi:pulumi:Stack                dynProvider-dev  **failed**              1 error
 +   └─ pulumi-nodejs:dynamic:Resource  random           **creating failed**     1 error

Diagnostics:
  pulumi:pulumi:Stack (dynProvider-dev):
    error: update failed

  pulumi-nodejs:dynamic:Resource (random):
    error: Symbol.prototype [ @@toPrimitive ] requires that 'this' be a Symbol
```
