# CodeceptJSTests
In this project we have automated 3 API's of https://reqres.in using Axios and CodeceptJS

- GetUsers API
- CreateSingleUser API
- GetSingleUser API

Used Chai Assertions to validate the API response

- Clone the repository and install NPM to setup the project
- To run all tests run following command
  - npx codeceptjs run --steps
- To run using Tag of the feature file run following command
  - npx codeceptjs run --steps --verbose --grep "@APITest"

