import sequelize from '../sequelize.js'
import  {DataTypes as dataTypes}  from 'sequelize'

const alunos = sequelize.define('Aluno' , {
    nuidaluno: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    nmaluno: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    dtnascim: {
        type: dataTypes.DATE,
        allowNull: false,
        get() {
            const dataFormatada = new Date(this.getDataValue('dtnascim'))
            const mes = Intl.NumberFormat('pt', {minimumIntegerDigits: 2}).format(dataFormatada.getMonth() + 1)
            return `${dataFormatada.getDate()}/${mes}/${dataFormatada.getFullYear()}`
        }

    }

}, {
    tableName: 'eicaluno',
    timestamps: false,
})

export default alunos