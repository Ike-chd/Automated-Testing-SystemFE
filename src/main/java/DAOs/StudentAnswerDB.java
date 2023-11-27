package DAOs;

import DAOs.DAOControllers.QA.StudentAnswerDAO;
import DBConnection.DBConnection;
import Models.Courses.Course;
import Models.QA.Question;
import Models.QA.StudentAnswer;
import Models.Courses.Topic;
import Models.Tests.Test;
import Models.Users.Student;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
public class StudentAnswerDB implements StudentAnswerDAO {
    private PreparedStatement ps;
    private ResultSet rs;
    private DBConnection connection;
    private Statement s;
    @Override
    public StudentAnswer getStudentAnswer(int qaId) {
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Student_Answers WHERE qaID = ?");
            ps.setInt(1, qaId);
            rs = ps.executeQuery();
            if(rs.next()){
                return extractStudentAnswerFromResultSet(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public boolean insertStudentAnswer(StudentAnswer studentAnswer) {
        try {
            ps = connection.getConnection().prepareStatement("INSERT INTO Student_Answers (studentID, questionID, correctAns, testID) VALUES (?, ?, ?, ?)");
            ps.setInt(1,studentAnswer.getStudent().getStudentNum());
            ps.setInt(2,studentAnswer.getQuestion().getQuestionID());
            ps.setInt(3,studentAnswer.getCorrectAns());//TODO
            ps.setInt(4,studentAnswer.getTest().getTestID());
            int affectRows = ps.executeUpdate();
            return affectRows > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    @Override
    public boolean updateStudentAnswer(StudentAnswer studentAnswer) {
        try {
            ps = connection.getConnection().prepareStatement("UPDATE Student_Answers SET studentID = ?, questionID = ?, correctAns = ?, testID = ? WHERE qaID = ?");
            ps.setInt(1,studentAnswer.getStudent().getStudentNum());
            ps.setInt(2,studentAnswer.getQuestion().getQuestionID());
            ps.setInt(3,studentAnswer.getCorrectAns());
            ps.setInt(4,studentAnswer.getTest().getTestID());
            ps.setInt(5,studentAnswer.getQaId());
            int affectedRows = ps.executeUpdate();
            return affectedRows > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    @Override
    public boolean deleteStudentAnswer(StudentAnswer studentAnswer) {
        try {
            ps = connection.getConnection().prepareStatement("DELETE FROM Student_Answers WHERE qaID = ?");
            ps.setInt(1,studentAnswer.getQaId());
            int affectedRows = ps.executeUpdate();
            return affectedRows > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    @Override
    public List<StudentAnswer> getStudentAnswers() {
        List<StudentAnswer> studentAnswers = new ArrayList<>();
        try {
            s = connection.getConnection().createStatement();
            rs = s.executeQuery("SELECT * FROM Student_Answers");
            while(rs.next()){
                StudentAnswer studentAnswer = extractStudentAnswerFromResultSet(rs);
                studentAnswers.add(studentAnswer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return studentAnswers;
    }
    @Override
    public List<StudentAnswer> getStudentAnswersByStudent(Student student) {
        List<StudentAnswer> studentAnswers = new ArrayList<>();
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Student_Answers WHERE studentID = ?");
            ps.setInt(1,student.getStudentNum());
            rs = ps.executeQuery();
            while (rs.next()){
                StudentAnswer studentAnswer = extractStudentAnswerFromResultSet(rs);
                studentAnswers.add(studentAnswer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return studentAnswers;
    }
    @Override
    public List<StudentAnswer> getStudentAnswersByQuestion(Question question) {
        List<StudentAnswer> studentAnswers = new ArrayList<>();
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Student_Answers WHERE questionID = ?");
            ps.setInt(1,question.getQuestionID());
            rs = ps.executeQuery();
            while (rs.next()){
                StudentAnswer studentAnswer = extractStudentAnswerFromResultSet(rs);
                studentAnswers.add(studentAnswer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return studentAnswers;
    }
    @Override
    public List<StudentAnswer> getStudentAnswersByTest(Test test) {
        List<StudentAnswer> studentAnswers = new ArrayList<>();
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Student_Answers WHERE testID = ?");
            ps.setInt(1, test.getTestID());
            rs = ps.executeQuery();
            while (rs.next()){
                StudentAnswer studentAnswer = extractStudentAnswerFromResultSet(rs);
                studentAnswers.add(studentAnswer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return studentAnswers;
    }
    private StudentAnswer extractStudentAnswerFromResultSet(ResultSet resultSet) throws SQLException {
        int qaId = resultSet.getInt("qaID");
        int studentId = resultSet.getInt("studentID");
        int questionId = resultSet.getInt("questionID");
        int correctAns = resultSet.getInt("correctAns");
        int testId = resultSet.getInt("testID");
        Student student = getStudentById(studentId);
        Question question = getQuestionById(questionId);
        Test test = getTestById(testId);
        return new StudentAnswer(qaId,student,question,correctAns,test);
    }
    private Student getStudentById(int studentId) throws SQLException {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Students WHERE studentID = ?");
            ps.setInt(1, studentId);
            rs = ps.executeQuery();
            if(rs.next()){
                return extractStudentFromResultSet(rs);
            }
        return null;
    }
    private Question getQuestionById(int questionId) throws SQLException {
        ps = connection.getConnection().prepareStatement("SELECT * FROM Questions WHERE questionID = ?");
        ps.setInt(1, questionId);
        rs = ps.executeQuery();
        if(rs.next()){
            return extractQuestionFromResultSet(rs);
        }
        return null;
    }
    private Test getTestById(int testId) throws SQLException {
        ps = connection.getConnection().prepareStatement("SELECT * FROM Tests WHERE testID = ?");
        ps.setInt(1,testId);
        rs = ps.executeQuery();
        if(rs.next()){
            return extractTestFromResultSet(rs);
        }
        return null;
    }
    private Student extractStudentFromResultSet(ResultSet resultSet) throws SQLException {
        int studentId = resultSet.getInt("studentID");
        String username = resultSet.getString("studentNum");
        String firstname = resultSet.getString("firstname");
        String surname = resultSet.getString("surname");
        String email = resultSet.getString("email");
        String address = resultSet.getString("address");
        String idNumber = resultSet.getString("idNumber");
        int courseID = resultSet.getInt("courseID");
        String password = resultSet.getString("password");
        int studentNum = resultSet.getInt("studentID");
        Course currentCourse = getCourseById(courseID);
        return new Student(studentId, username, firstname, surname, email, idNumber,address, password, studentNum,currentCourse);
    }
    private Course getCourseById(int courseID) throws SQLException {
        ps = connection.getConnection().prepareStatement("SELECT * FROM Courses WHERE courseID = ?");
        ps.setInt(1, courseID);
        rs = ps.executeQuery();
        if (rs.next()) {
            return extractCourseFromResultSet(rs);
        }
        return null;
    }
    private Question extractQuestionFromResultSet(ResultSet resultSet) throws SQLException {
        int questionId = resultSet.getInt("questionID");
        String question = resultSet.getString("question");
        int markAllocation = resultSet.getInt("markAllocation");
        int topicID = resultSet.getInt("topicID");
        int testId = resultSet.getInt("testID");
        Topic topic = getTopicById(topicID);
        Test test = getTestById(testId);
        return new Question();
    }
    private Test extractTestFromResultSet(ResultSet resultSet){
        return null;
    }
    private Course extractCourseFromResultSet(ResultSet resultSet) throws SQLException {
        int courseId = resultSet.getInt("courseID");
        String courseName = resultSet.getString("courseName");
        String courseNumber = resultSet.getString("courseNumber");
        return new Course(courseId, courseName, courseNumber);
    }
    private Topic getTopicById(int topicId){

    }
    private Test getTestById(int testId){

    }
}
