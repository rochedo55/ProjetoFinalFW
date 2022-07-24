module.exports={
    development:{
        client:'sqlite3',
        connection:{
            filename:'./src/Database/db.sqlite'
        },
        migrations:{
            directory:'./src/Database/migrations'
        },
        seeds:{
            directory:'./src/Database/seeds'
        },
        useNullAsDefault:true,
    }
}