package Course_Module_Topic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.ResultSet;
import java.sql.SQLException;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Module {
    private int moduleID;
    private String moduleName;
    private String moduleDescription;

    
//    Just example of to create and retrieve
//    // Factory method to create Module instance from ResultSet
//    public static Module fromResultSet(ResultSet resultSet) throws SQLException {
//        return new Module(
//                resultSet.getInt("moduleID"),
//                resultSet.getString("moduleName"),
//                resultSet.getString("moduleDescription")
//        );
//    }
//    
//    
//    // Example of retrieving modules from the database
//public List<Module> getModulesFromDatabase() {
//    List<Module> modules = new ArrayList<>();
//
//    try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
//         Statement statement = connection.createStatement()) {
//
//        ResultSet resultSet = statement.executeQuery("SELECT * FROM Modules");
//
//        while (resultSet.next()) {
//            modules.add(Module.fromResultSet(resultSet));
//        }
//
//    } catch (SQLException e) {
//        e.printStackTrace();
//    }
//
//    return modules;
//}

    
}
