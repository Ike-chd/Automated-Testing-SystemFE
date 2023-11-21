package Course_Module_Topic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.ResultSet;
import java.sql.SQLException;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Topic {
    private int topicID;
    private String topicName;
    private String description;
    private String infoLink;

    // Factory method to create Topic instance from ResultSet
    public static Topic fromResultSet(ResultSet resultSet) throws SQLException {
        return new Topic(
                resultSet.getInt("topicID"),
                resultSet.getString("topicName"),
                resultSet.getString("description"),
                resultSet.getString("infoLink")
        );
    }
}
