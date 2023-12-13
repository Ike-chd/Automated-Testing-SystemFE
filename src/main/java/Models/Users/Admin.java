package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Admin extends User {

    private boolean isSuperAdmin;

    public Admin(int userID, String name, String surname, String email, String idNumber, String password, AccessRole accessRole) {
        super(userID, name, surname, email, idNumber, password, accessRole);
    }
    
    public void setSuperAdmin(boolean isSuperAdmin){
        this.isSuperAdmin = isSuperAdmin;
    }
}
