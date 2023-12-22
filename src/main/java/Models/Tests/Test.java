package Models.Tests;

import Models.Courses.Topic;
import Models.QA.Question;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Test {

    public Test(int testId, String testName){
        this.testID = testId;
        this.testName = testName;
    }
    private int testID;
    private String testName;
    private int moduleID;
    private Calendar startDate;
    private long duration;
    private double wieght;
    private final List<Question> questions = new ArrayList<>();
    private List<Topic> topics = new ArrayList<>();
}
