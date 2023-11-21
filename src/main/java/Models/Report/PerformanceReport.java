package Models.Report;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class PerformanceReport extends Report {

    private List<String> hardestTopics;
    private List<String> hardestTests;
    private List<String> averageStudentPerformance;
    private List<String> individualStudentPerformance;
    private List<String> progressionGraphs;
}
