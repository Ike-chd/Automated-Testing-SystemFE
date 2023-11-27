package Services;

import DAOs.DAOControllers.Users.UserDAO;
import Models.Users.User;
import Services.ServicesInterfaces.UserService;

public class UserHandler implements UserService{
    UserDAO udao;
    
    @Override
    public void addAccountRequest(User student) {
        udao.createAccountReq(student);
    }
}