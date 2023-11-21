package Models.QA;

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
    private int topicID;
    private int testID;
}
