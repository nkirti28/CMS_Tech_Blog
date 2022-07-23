const path = require("path");
const helpers = require("./utils/helpers");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const sequelize = require("./config/connection.js");

const PORT = process.env.PORT || 3001;
const app = express();

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
