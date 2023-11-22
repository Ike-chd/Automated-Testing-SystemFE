
package DAOs.DBConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DBConnection {
    
    private Connection connection;
    public DBConnection(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/taskManager";
            this.connection = DriverManager.getConnection(url);
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
