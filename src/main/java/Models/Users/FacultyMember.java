package Models.Users;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class FacultyMember extends User {
    private String department;
    private boolean isProfessor;
    private int facultyID;
}