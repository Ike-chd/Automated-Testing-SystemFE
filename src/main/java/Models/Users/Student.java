package Models.Users;

import lombok.Data;
import lombok.EqualsAndHashCode;
@Data
@EqualsAndHashCode(callSuper = true)
public class Student extends User {
    private String address;
    private int courseID;
}
