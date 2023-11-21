package Models.QA;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Answer {
    private String answer;
    private boolean isCorrect;
}