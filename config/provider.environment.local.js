module.exports = () => ({
  STAGE: "${opt:stage, 'local'}",
  REGION: "us-east-1",
  SERVICE_NAME: "${self:service}",
  MONGO_URL: "mongodb://localhost:3001",
  MONGO_DATABASE: "production",
  MONGO_SSL: false,
  MONGO_SSL_VALIDATE: false
});
