package DAOs;

import DAOs.DAOControllers.Courses.TopicDAO;
import DAOs.DAOControllers.QA.QuestionDAO;
import DAOs.DAOControllers.Tests.TestDAO;
import DBConnection.DBConnection;
import Models.Courses.Topic;
import Models.QA.Question;
import Models.Tests.Test;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class QuestionDB implements QuestionDAO{
    private PreparedStatement ps;
    private ResultSet rs;
    private DBConnection connection;
    private TestDAO tdao = new TestDB();
    private TopicDAO topDao = new TopicDB();
    @Override
    public Question getQuestion(int questionId) {
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Questions WHERE questionID = ?");
            ps.setInt(1, questionId);
            rs = ps.executeQuery();
            if(rs.next()){
                return extractQuestionFromResultSet(rs);
            }
        } catch (SQLException ex) {
           ex.printStackTrace();
        }
        return null;
    }
    @Override
    public boolean insertQuestion(Question question) {
        try {
            ps = connection.getConnection().prepareStatement("INSERT INTO Questions (question, markAllocation, topicID, testID) VALUES (?,?,?,?)");
            ps.setString(1, question.getQuestion());
            ps.setInt(2, question.getMarkAllocation());
            ps.setInt(3, question.getTopic().getTopicID());
            ps.setInt(4, question.getTest().getTestID());
            int affectedRows = ps.executeUpdate();
            return affectedRows > 0;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    @Override
    public boolean deleteQuestion(Question question) {
        try {
            ps = connection.getConnection().prepareStatement("DELETE FROM Questions WHERE questionID = ?");
            ps.setInt(1, question.getQuestionID());
            int affectedRows = ps.executeUpdate();
            return affectedRows >0;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    @Override
    public boolean updateQuestion(Question question) {
        try {
            ps = connection.getConnection().prepareStatement("UPDATE Questions SET question = ?, markAllocation = ?, topicID = ?, testID = ? WHERE questionID = ?");
            ps.setString(1, question.getQuestion());
            ps.setInt(2, question.getMarkAllocation());
            ps.setInt(3, question.getTopic().getTopicID());
            ps.setInt(4, question.getTest().getTestID());
            int affectedRows = ps.executeUpdate();
            return affectedRows > 0;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    @Override
    public List<Question> allQuestionUnderATopic(Topic topic) {
        List <Question> questions = new ArrayList<>();
        try {
            ps = connection.getConnection().prepareStatement("SELECT * FROM Questions WHERE topicID = ?");
            ps.setInt(1, topic.getTopicID());
            rs = ps.executeQuery();
            while(rs.next()){
                Question question = extractQuestionFromResultSet(rs);
                questions.add(question);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return questions;
    }
    private Question extractQuestionFromResultSet(ResultSet resultSet) throws SQLException {
        int questionID = resultSet.getInt("questionID");
        String question = resultSet.getString("question");
        int markAllocation = resultSet.getInt("markAllocation");
        int topicID = resultSet.getInt("topicID");
        int testID = resultSet.getInt("testID");
        return new Question(questionID,question,markAllocation,tdao.getTest(testID),topDao.getTopic(topicID));
    }
}
