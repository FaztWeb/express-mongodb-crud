import { connect } from "mongoose";

// connection to db
(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-mongo");
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
