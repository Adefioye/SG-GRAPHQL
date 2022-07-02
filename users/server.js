const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

const app = express();
const PORT = 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
