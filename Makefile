demo: protos
	PULUMI_CONFIG_PASSPHRASE="" pulumi up -s dev -y

node_modules: package.json package-lock.json
	npm install
	touch $@

protos: node_modules protos/*.proto
	npm run build-grpc
	touch $@
