package com.mycompany.atsfe.resources;

public class UserHandler{
    UserDB udb = new UserDB();
    
    public void addAccountRequest(User student) {
        udb.createAccountReq(student);
    }
}