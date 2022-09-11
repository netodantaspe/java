var Connection = require('tedious').Connection;  
var config = {  
    server: 'your_server.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'your_username',
            password: 'your_password'
        }
    },
    options: {
        encrypt: true,
        database: 'your_database'
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
  
    console.log("Connected");  
});

connection.connect();