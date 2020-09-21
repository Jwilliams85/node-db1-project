const accountsRouter = require('../data/accountsRouter')

const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use("/accounts", accountsRouter)



module.exports = server;