package Services.ServicesInterfaces;

import Models.Users.FacultyMember;
import Models.Users.Student;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class FacultyMemberHandler implements FacultyMemberService{
    private FacultyMember facultyMember;

    @Override
    public void viewStudentPerformance(Student student) {
        
    }

    @Override
    public void makeSuspensionRequest(Student student, String reason) {
        
    }

    @Override
    public void commentOnStudent(Student student, String comment) {
    
    }
    
}

@AllArgsConstructor
@Data
class SuspensionRequest {
    private FacultyMember facultyMember;
    private Student student;
    private String reason;
}
