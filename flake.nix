{
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        {
          devShell = with pkgs; mkShell {
            buildInputs = [
              awscli2
              buf
              crane
              # dive # for debugging Docker images
              # etcd_3_5
              git
              gnumake
              gnused # force Linux `sed` everywhere
              go_1_20
              grafana-loki # for logcli
              grpcurl # TEST
              grpc-client-cli # TEST
              grpc-tools
              nats-server
              natscli
              nixfmt
              nodejs_18 # for Pulumi, must match values in package.json
              # openssl
              protoc-gen-go
              protoc-gen-go-grpc
              pulumi-bin
              saml2aws
              # zlib
            ] ++ lib.optionals stdenv.isDarwin [
              darwin.apple_sdk.frameworks.CoreServices
            ];
          };
        }
      );
}
