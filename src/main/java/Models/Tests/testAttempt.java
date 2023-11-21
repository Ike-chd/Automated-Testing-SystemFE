package Models.Tests;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class testAttempt {

    private int attemptID;
    private int studentID;
    private int testID;
    private int rating;
    private Date startDateTime;
    private Date endDateTime;
    private int marks;
}
