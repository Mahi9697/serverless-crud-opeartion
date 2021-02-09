# serverless-crud

Simple AWS lambda serverless function for crud operations using Expressjs.

Its compulsory that you have to install node and npm.

# Install serverless globally
 npm install -g serverless

# Provide credentials of AWS to serverless
 sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY

# Install dependencies
 npm install

# Export Env variable
 set MY_API_KEY= Some text for api key generation

if you are using linux for this so in the :-

# Export Env variable
 export MY_API_KEY= Some text for api key generation

# Running that application
 node app.js

 or

 nodemon server