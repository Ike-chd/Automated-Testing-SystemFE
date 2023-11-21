package Models.Users;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin extends User{
    private boolean isSuperAdmin;
    private int adminID;
    private String firstname;
    private String surname;
    private String email;
    private String idNumber;
    private String password;
}
