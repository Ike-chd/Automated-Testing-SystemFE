package com.mycompany.atsbe.resources;

import Models.Tests.Test;
import Services.ServicesInterfaces.TestService;
import com.google.gson.Gson;
import jakarta.ws.rs.core.Response;

public class TestREST {
    
    TestService ts;
    public Response postTest(){
        Test test = ts.<Test>getTest(0).orElseGet(() -> new Test());
        return Response.ok(new Gson().toJson(test)).status(Response.Status.NOT_FOUND).build();
    }
    
    public Response getTest(){
        Test test = ts.<Test>getTest(0).orElseGet(() -> new Test(0, "NotFound", 0));
        return Response.ok(new Gson().toJson(test))
                .status((test.getTestID() != 0) ? Response.Status.NOT_FOUND : Response.Status.FOUND)
                .build();
    }
}