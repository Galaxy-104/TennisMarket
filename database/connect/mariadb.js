const mariadb = require('mysql');


const conn = mariadb.createConnection( // mysql이 가지고 있는 함수
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'Tennis', // mariadb 설치시 입력한 정보
    }
); 

module.exports = conn;
