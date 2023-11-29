package com.mycompany.atsbe.resources;

import DAOs.DAOControllers.QA.QuestionDAO;
import DAOs.QuestionDB;
import Models.QA.Question;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;

@Path("questions")
public class QuestionREST {
    QuestionDAO qdao = new QuestionDB();
    
    @Path("postQuestion")
    @POST
    public void postQuestion(Question question){
        
    }
    
    @Path("getQuestion/{id}")
    @GET
    public void getQuestion(@PathParam("id") int id){
        
    }
}