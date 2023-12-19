import * as React from "react";

export const EmailTemplate = ({ firstName, body }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h1>{body}</h1>
  </div>
);
