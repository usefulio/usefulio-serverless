# Useful IO Serverless

This repository is intended to store all the Serverless services for the given application in one place. All the services are stored in the `./services` directory.

## Creating service

To create a new service you have to execute the `./script/create.sh service-name` command where `service-name` should be replaced with the new service name. It's important to execute script from the root directory of this repository. The newly created service comes with the single `hello` dummy function.

## Running function

To run the `hello` function locally, you have to navigate to your service directory (`cd services/service-name`) and execute the `npm run invoke:hello` command.

## Testing function

To test all the functions locally, you have to navigate to your service directory (`cd services/service-name`) and execute the `npm run test` command.

## Using @useful/mongo package

If you want to use the `@useful/mongo` package in your service, you have to set the following environment variables:

- `MONGO_URL` - MongoDB connection string,
- `MONGO_DATABASE` - database name,
- `MONGO_SSL` - enable SSL connection (boolean),
- `MONGO_SSL_VALIDATE`- validate mongod server certificate against Certificate Authority (boolean).
