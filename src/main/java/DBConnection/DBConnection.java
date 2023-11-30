package DBConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DBConnection {
    
    private Connection connection;  
    public DBConnection(){
        try {
            Class.forName("com.mysql.jdbc.cj.Driver");
            String url = "jdbc:mysql://localhost:3306/ats?autoReconnect=true&useSSL=false";
            this.connection = DriverManager.getConnection(url, "root", "root");
        } 
        catch (SQLException | ClassNotFoundException ex) {
            ex.printStackTrace();
        }
    }

    public Connection getConnection() {
        return connection;
    }
    
    public void closeConnection(){
        if(connection != null){
            try {
                connection.close();
            } 
            catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}
