package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class FacultyMember extends User {

    private String department;
    private boolean isProfessor;
}
