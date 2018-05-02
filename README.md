# Useful IO Serverless

This repository is intended to store all the Serverless services for the given application in one place. All the services are stored in the `./services` directory.

## Creating service

To create a new service you have to execute the `./scripts/create.sh [name]` command where `[name]` should be replaced with the new service name. It's important to execute script from the root directory of this repository. The newly created service comes with the single `hello` dummy function.

## Running function

To run the `hello` function locally, you have to navigate to your service directory (`cd services/service-name`) and execute the `npm run invoke:hello` command.

## Testing function

To test all the functions locally, you have to navigate to your service directory (`cd services/service-name`) and execute the `npm run test` command.

## Deploying services

To deploy services to AWS you have to execute the `./scripts/deploy.sh [stage]` command where `[stage]` should be replaced with the stage name (`development` or `production`). It's important to execute script from the root directory of this repository.

Before deploying you have to set the following environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Using @useful/mongo package

If you want to use the `@useful/mongo` package in your service, you have to set the following environment variables:

- `MONGO_URL` - MongoDB connection string,
- `MONGO_DATABASE` - database name,
- `MONGO_SSL` - enable SSL connection (boolean),
- `MONGO_SSL_VALIDATE`- validate mongod server certificate against Certificate Authority (boolean).

### Using locally

If you want to use the `@useful/mongo` package locally, you have to set environment variables which are defined in the `./config/provider.environment.local.js` file. If your local development environment uses different host or port, then this is a place where you have to make proper changes.
