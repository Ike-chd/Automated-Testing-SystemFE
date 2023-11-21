package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FacultyMember extends User {
    private boolean isProfessor;
    private int facultyID;
    private String firstname;
    private String surname;
    private String email;
    private String idNumber;
    private String password;
    private String department;
}
