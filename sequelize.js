import sequelize from 'sequelize'
import configDataBase from './server.js'

const conexao = new sequelize(configDataBase)

export default conexao