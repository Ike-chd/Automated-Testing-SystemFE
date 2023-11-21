package DAOs.DAOControllers;

import Models.Communication.Comment;

public interface CommentDAO {
    public Comment getComment();
    public boolean insertComment(Comment commnet);
    public boolean updateComment(Comment comment);
    public boolean deleteComment(Comment comment);
}