package Models.Users;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student extends User {
    private String phoneNumber, address;

    public Student(String phoneNumber, String address, int userID, String name, String surname, String email, String idNumber, String password, AccessRole accessRole) {
        super(userID, name, surname, email, idNumber, password, accessRole);
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    
    
    
}
