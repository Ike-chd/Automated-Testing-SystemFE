package Course_Module_Topic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.ResultSet;
import java.sql.SQLException;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    private int courseID;
    private String courseName;
    private String courseNumber;

    // Factory method to create Course instance from ResultSet
    public static Course fromResultSet(ResultSet resultSet) throws SQLException {
        return new Course(
                resultSet.getInt("courseID"),
                resultSet.getString("courseName"),
                resultSet.getString("courseNumber")
        );
    }
}

