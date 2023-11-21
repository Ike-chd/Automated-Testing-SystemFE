
package Models.QA;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public class Answer {
     private String answer;
    private boolean isCorrect;

    public boolean isCorrect() {
        return isCorrect;
    }
}
