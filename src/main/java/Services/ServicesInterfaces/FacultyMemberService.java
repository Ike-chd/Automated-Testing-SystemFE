
package Services.ServicesInterfaces;

import Models.Users.Student;


public interface FacultyMemberService {
    public void viewStudentPerformance(Student student);
    public void makeSuspensionRequest(Student student, String reason);
    public void commentOnStudent(Student student, String comment);
}
