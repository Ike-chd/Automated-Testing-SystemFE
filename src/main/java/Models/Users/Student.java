package Models.Users;

import Models.Courses.Course;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class Student extends User {

    int studentNum;
    Course currentCourse;
}
