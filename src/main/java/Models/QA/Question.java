package Models.QA;

import Models.Courses.Topic;
import Models.Tests.Test;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    private int questionID;
    private String question;
    private int markAllocation;
    private Test test;
    private Topic topic;
}
