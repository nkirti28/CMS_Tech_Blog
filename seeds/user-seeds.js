const { User } = require("../models");

const userData = [
  {
    username: "Kirti",
    password: "password123",
  },
  {
    username: "Kishor",
    password: "kishor",
  },
  {
    username: "Anna",
    password: "anna",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
