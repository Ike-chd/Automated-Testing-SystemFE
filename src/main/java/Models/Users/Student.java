package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student extends User{
    private int studentID;
    private String firstname;
    private String surname;
    private String email;
    private String address;
    private String idNumber;
    private int courseID;
    private String password;
}
