package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private int userID;
    private String firstname;
    private String surname;
    private String email;
    private String idNumber;
    private String password;
}
  