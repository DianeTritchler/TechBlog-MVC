const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment, Vote } = require('../models');