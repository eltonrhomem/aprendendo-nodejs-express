import sequelize from '../sequelize.js'
import { DataTypes as dataTypes } from 'sequelize'

const escolas = sequelize.define('Escola' , {
    cdtipesc: {
        type: dataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
    },
    cdescola: {
        type: dataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
    },
    nmescola: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    

}, {
    tableName: 'eicescol',
    timestamps: false,
})

export default escolas