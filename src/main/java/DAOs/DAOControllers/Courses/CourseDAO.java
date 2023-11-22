package DAOs.DAOControllers.Courses;

import Models.Courses.Course;
import java.util.List;

public interface CourseDAO {
    public Course getCourse();
    public boolean insertCourse(Course course);
    public boolean deleteCourse(Course course);
    public boolean updateCourse(Course course);
    public List<Course> allCourses();
}