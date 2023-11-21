package Models.Communication;

import Models.Users.FacultyMember;
import Models.Users.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private String comment;
    private Student student;
    private FacultyMember faculty;
}