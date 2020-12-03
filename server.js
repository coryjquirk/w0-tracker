//node packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//express
const app = express();
const PORT = process.env.PORT || 8000;
//express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(logger("dev"));

//routes
require("./routes/api-routes");
require("./routes/html-routes");

//mongoose bp
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
// routing
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
//server listening?
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}!`);
});