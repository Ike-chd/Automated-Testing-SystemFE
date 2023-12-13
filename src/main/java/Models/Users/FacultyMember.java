package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FacultyMember extends User {

    private boolean isProfessor;

    public FacultyMember(int userID, String name, String surname, String email, String idNumber, String password, AccessRole accessRole) {
        super(userID, name, surname, email, idNumber, password, accessRole);
    }
    
    public void SetProfessor(boolean isProfessor){
        this.isProfessor = isProfessor;
    }
}
