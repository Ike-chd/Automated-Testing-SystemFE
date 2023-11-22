package Models.Users;

import Models.Courses.Course;
import Models.Report.Report;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Student extends User {

    private int studentNum;
    private Course currentCourse;
    private Report report;
    
}
