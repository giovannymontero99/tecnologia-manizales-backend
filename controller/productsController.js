const connection = require("../config/connection")
let hash;

const getAllProducts = (req,res) => {
    connection.getConnection((err,conn)=> {
        if( err ) throw err;
        if( hash === undefined ){
            connection.query('SELECT * FROM `target`', ( error,data ) => {
                hash = data;
                res.send( hash );
            });
            return connection.releaseConnection(conn);
        }
        res.send(hash);
        return connection.releaseConnection(conn);
    })    
}

module.exports = {
    getAllProducts
}