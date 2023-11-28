package Models.Users;

import Models.Courses.Course;
import Models.Report.Report;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class Student extends User {
    private String studentNum;
    private Course currentCourse;
    public Student(int userID, String username, String name, String surname, String email, String idNumber, String address, String password, String studentNum, Course currentCourse) {
        super(userID, username, name, surname, email, idNumber, address, password);
        this.studentNum = studentNum;
        this.currentCourse = currentCourse;
    }
}