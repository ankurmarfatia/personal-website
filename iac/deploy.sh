#!/bin/bash

# Deploy Personal Website Pipeline
# Usage: ./deploy.sh [stack-name] [github-repo] [bucket-name]

STACK_NAME=${1:-"personal-website-pipeline"}
GITHUB_REPO=${2:-"ankurmarfatia/personal-website"}
BUCKET_NAME=${3:-"www.ankurmarfatia.com"}

echo "Deploying CodePipeline stack: $STACK_NAME"
echo "GitHub Repository: $GITHUB_REPO"
echo "S3 Bucket: $BUCKET_NAME"

# Create GitHub token secret (run this once)
echo "Creating GitHub token secret..."
aws secretsmanager create-secret \
    --name github-token \
    --description "GitHub personal access token for CodePipeline" \
    --secret-string '{"token":"YOUR_GITHUB_TOKEN_HERE"}' \
    --region us-east-1 || echo "Secret already exists"

# Deploy CloudFormation stack
aws cloudformation deploy \
    --template-file pipeline-template.yaml \
    --stack-name $STACK_NAME \
    --parameter-overrides \
        GitHubRepo=$GITHUB_REPO \
        BucketName=$BUCKET_NAME \
    --capabilities CAPABILITY_IAM \
    --region us-east-1

echo "Pipeline deployment complete!"
echo "Update the GitHub token in AWS Secrets Manager with your actual token"