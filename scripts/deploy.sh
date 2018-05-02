#!/bin/bash
STAGE=$1

if [ -z $STAGE ]; then
  echo "Need to set a stage. Usage: ./scripts/deploy [stage]"
  exit 1
fi

serverless config credentials --provider aws --key $AWS_ACCESS_KEY_ID --secret $AWS_SECRET_ACCESS_KEY

# Install all dependencies in the main directory.
npm install

# Put all service paths from the "services" directory into the SERVICES array.
SERVICES=($(ls -d ./services/*))

# Loop through all the service paths in the array.
for SERVICE_PATH in "${SERVICES[@]}"; do
  (
    # Get the service directory name from the path.
    SERVICE_NAME=$(basename $SERVICE_PATH)
    echo "Deploying the \"$SERVICE_NAME\" service"
    # Navigate into service directory.
    cd $SERVICE_PATH
    # Install all dependencies.
    npm install
    # Deploy service to AWS.
    serverless deploy --stage $STAGE
  )
done

echo "Serverless Deployments Completed"
