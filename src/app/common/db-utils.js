import moment from "moment";

const { unmarshall } = require("@aws-sdk/util-dynamodb");
import { ddbDocClient } from "../../../config/ddbDocClient";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";

export const QueryTable = async (email) => {
  let data = [];
  try {
    const params = {
      TableName: TABLE_NAME,
      IndexName: "EmailIndex",
      KeyConditionExpression: "#email = :emailValue",
      ExpressionAttributeNames: {
        "#email": "email",
      },
      ExpressionAttributeValues: {
        ":emailValue": { S: email },
      },
    };

    data = await ddbDocClient.send(new QueryCommand(params));
    const items = data.Items.map((item) => {
      return unmarshall(item);
    });
    return items;
  } catch (err) {
    console.log("Error", err);
  }
};

export const DeleteItem = async (primaryKeyValue, sortKeyValue) => {
  const stringDate = moment(sortKeyValue).format("MM/DD/YYYY, HH:mm:ss");
  try {
    await ddbDocClient.send(
      new DeleteCommand({
        TableName: TABLE_NAME,
        Key: {
          id: primaryKeyValue,
          dateAdded: stringDate,
        },
      })
    );
    return true;
  } catch (err) {
    console.log("Error", err);
    return false;
  }
};
