package DAOs.DAOControllers.Courses;

import Models.Courses.Course;

public interface CourseDAO {
    public Course getCourse();
    public boolean insertCourse(Course course);
    public boolean deleteCourse(Course course);
    public boolean updateCourse(Course course);
}