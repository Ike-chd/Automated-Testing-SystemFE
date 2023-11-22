
package Services;


import Services.ServicesInterfaces.UserInterface;
import java.util.List;
import java.util.Optional;

public class UserHandler {
    private List<UserInterface> users;

    public UserHandler() {
        this.users = new java.util.ArrayList<>();
    }

    public void addUser(UserInterface user) {
        users.add(user);
    }

    public Optional<UserInterface> getUserByID(int userID) {
        return users.stream()
                .filter(user -> user.getUserID() == userID)
                .findFirst();
    }

//    public void updateUserPassword(int userID, String newPassword) {
//        getUserByID(userID).ifPresent(user -> user.setPassword(newPassword));
//    }

    public List<UserInterface> getAllUsers() {
        return new java.util.ArrayList<>(users);
    }

    // Add additional methods as needed for user management
//
//    public static void main(String[] args) {
//        UserHandler userHandler = new UserHandler();
//
//        // Example: Adding students (celebrities)
//        Student celebrity1 = new Student(1, "Tom", "Hanks", "tom@example.com", "111111", "123 Main St", 1, "tomspassword");
//        Student celebrity2 = new Student(2, "Angelina", "Jolie", "angelina@example.com", "222222", "456 Oak St", 2, "angelinapassword");
//
//        userHandler.addUser(celebrity1);
//        userHandler.addUser(celebrity2);
//
////        // Example: Retrieving and updating user information
////        Optional<UserInterface> foundUser = userHandler.getUserByID(1);
////        foundUser.ifPresent(user -> {
////            System.out.println("Found student: " + user.getFirstname() + " " + user.getSurname());
////            userHandler.updateUserPassword(user.getUserID(), "newStudentPassword");
////        });
//
//        // Example: Displaying all users
//        List<UserInterface> allUsers = userHandler.getAllUsers();
//        System.out.println("All Users:");
//        for (UserInterface user : allUsers) {
//            System.out.println(user.getFirstname() + " " + user.getSurname() + " - " + user.getEmail());
//        }
//    }
}
