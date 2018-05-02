module.exports = () => ({
  STAGE: "${opt:stage, 'local'}",
  REGION: "us-east-1",
  SERVICE_NAME: "${self:service}",
  MONGO_URL: "${env:MONGO_URL_DEVELOPMENT}",
  MONGO_DATABASE: "${env:MONGO_DATABASE_DEVELOPMENT}",
  MONGO_SSL: "${env:MONGO_SSL_DEVELOPMENT}",
  MONGO_SSL_VALIDATE: "${env:MONGO_SSL_VALIDATE_DEVELOPMENT}"
});
