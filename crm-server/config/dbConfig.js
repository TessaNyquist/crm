/**
 *
 */
const sql = require('mssql');

async function establishSqlConnection(){
    const config = {
        user: 'CloudSA9634dea1',
        password:'',
        server: 'tcp:pc-consult.database.windows.net,1433',
        database: 'pcs-offerconsult;Uid=CloudSA9634dea1',
        options: {
            encrypt:true,
            TrustServerCertificate: false,
        }
    }
};

/*try {
    // Create a connection pool
    const pool = await new sql.ConnectionPool(config).connect();

    console.log('Connected to the database');

    // Perform database operations here

    // Close the connection pool when done
    await pool.close();

    console.log('Database connection closed');
} catch (err) {
    console.error('Error connecting to the database:', err);
    }
}
*/

establishSqlConnection();