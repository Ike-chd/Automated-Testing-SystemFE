package com.mycompany.atsbe.resources;

import Models.Courses.Course;
import Services.CourseHandler;
import Services.ServicesInterfaces.CourseService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

public class CourseREST {
    CourseService cs = new CourseHandler();
    
    @Path("postCourse")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response postCourse(Course course){
        return (cs.addCourse(course)) ? Response.ok("Course Created").status(Response.Status.CREATED).build()
                : Response.ok("Course Not Created").status(Response.Status.NOT_ACCEPTABLE).build();
    }
}