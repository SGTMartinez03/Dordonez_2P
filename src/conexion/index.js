const mysql=require('mysql2/promise')

const conexion=mysql.createPool({

    host:'localhost',
    port:3306,
    database: 'Kick',
    user:'root',
    password:'Dalejandro$11'

})

module.exports=conexion;