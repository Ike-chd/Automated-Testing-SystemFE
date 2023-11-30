package com.mycompany.atsfe.resources;

import com.google.gson.Gson;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("account")
public class UserREST {
    UserHandler us;
    
    @Path("request")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAccount(User student){
        us = new UserHandler();
        us.addAccountRequest(student);
        return Response.ok(new Gson().toJson(student)).status(Response.Status.CREATED).build();
    }
}