package Models.Report;

import Models.Courses.Topic;
import Models.Tests.Test;
import Models.Tests.TestAttempt;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Report {
    Topic[] hardestTopics = new Topic[5];
    private Map<Test, Double> testMarks = new HashMap<>();
    private Map<Test, TestAttempt> attemps = new HashMap<>();
    private List<String> averageStudentPerformance;
    private List<String> individualStudentPerformance;
    private List<String> progressionGraphs;
}