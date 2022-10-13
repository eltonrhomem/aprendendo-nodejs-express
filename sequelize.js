const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const configDataBase = require('./server')

const conexao = new Sequelize(configDataBase)

module.exports = conexao