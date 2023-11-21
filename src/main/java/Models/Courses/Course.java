package Models;

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

    public static Course fromResultSet(ResultSet resultSet) throws SQLException {
        return new Course(
                resultSet.getInt("courseID"),
                resultSet.getString("courseName"),
                resultSet.getString("courseNumber")
        );
    }
}

