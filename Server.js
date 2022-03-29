const mongoose = require('mongoose');
const express = require('express');
const { append } = require('express/lib/response');
require ("dotenv").config({path: "./config/.env"})




app.use(express.json())

