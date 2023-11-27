package Models.Users;

import Models.Courses.Course;
import Models.Report.Report;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student extends User {
    private int studentNum;
    private Course currentCourse;
    private Report report;
}