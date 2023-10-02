// Create a service client module using ES6 syntax.
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { ddbClient } from "./dbconfig.js";

const marshallOptions = {
  convertEmptyValues: false,

  removeUndefinedValues: true,

  convertClassInstanceToMap: false,
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

export { ddbDocClient };
