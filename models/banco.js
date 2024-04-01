const Sequelize = require("sequelize")
const sequelize = new Sequelize("sistemaweb","root","",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


//força a criação da estrutura do banco, caso ja exista ele exclue e recria
//Agendamentos.sync({force: true})