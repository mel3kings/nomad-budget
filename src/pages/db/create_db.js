// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { TABLE_NAME, ddbClient } from "../../../config/dbconfig";

export const params = {
  AttributeDefinitions: [
    {
      AttributeName: "id",
      AttributeType: "N",
    },
    {
      AttributeName: "dateAdded",
      AttributeType: "S",
    },
    {
      AttributeName: "email", // New attribute for GSI
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
    {
      AttributeName: "dateAdded",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: TABLE_NAME,
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "KEYS_ONLY",
  },
  GlobalSecondaryIndexes: [
    // Add GSI definition
    {
      IndexName: "EmailIndex", // Name of the GSI
      KeySchema: [
        {
          AttributeName: "email", // Partition key of GSI
          KeyType: "HASH",
        },
      ],
      Projection: {
        ProjectionType: "ALL", // Adjust projection type based on your requirements
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    },
  ],
};

export const CreateTable = () => {
  const run = async () => {
    try {
      const data = await ddbClient.send(new CreateTableCommand(params));
      console.log("Table Created", data);
      alert("Table Created!");
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
        onClick={() => run()}
      >
        Create Table
      </button>
    </div>
  );
};

export default CreateTable;
