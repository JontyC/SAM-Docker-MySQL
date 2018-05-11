# SAM-Docker-MySQL

for [Amazon AWS SAM Local](https://github.com/awslabs/aws-sam-local).

## What is AWS SAM Local?

[Amazon AWS SAM Local](https://github.com/awslabs/aws-sam-local) is a tool for local development and testing of Serverless applications. It can be used to test functions locally, start a local API Gateway from a SAM template, validate a SAM template, and generate sample payloads for various event sources.

## How to use this repo?

```console
$ bin/development

```

This will create a deployment package of the current directory for use with the SAM Local Lambda function.

Browsing to `http://localhost:3000/` will show a status endpoint with the configuration listed. `/database` shows the connectivity to the database.

## License

- [Amazon AWS SAM Local License Agreement](https://github.com/awslabs/aws-sam-local/blob/master/LICENSE)
