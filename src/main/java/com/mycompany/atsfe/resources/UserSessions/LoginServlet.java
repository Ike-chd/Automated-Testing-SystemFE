package com.mycompany.atsfe.resources.UserSessions;

import Models.Users.Admin;
import Models.Users.FacultyMember;
import Models.Users.Student;
import Models.Users.User;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;

@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        User loggedIn = new User();
        loggedIn.setEmail(request.getParameter("email"));
        loggedIn.setPassword(request.getParameter("password"));
        try {
            HttpRequest getRequest = HttpRequest.newBuilder()
                    .uri(new URI("http://192.168.8.163:8080/Automated-Testing-SystemBE/resources/accounts/getUser/byEmail/" + request.getParameter("email")))
                    .GET()
                    .build();
            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response1 = client.send(getRequest, BodyHandlers.ofString());
            Gson gson = new Gson();
            loggedIn = gson.fromJson(response1.body(), User.class);
            switch (loggedIn.getAccessRole().getRoleName()) {
                case "Admin":
                    Admin admin = gson.fromJson(response1.body(), Admin.class);
                    admin.setSuperAdmin(false);
                    loggedIn = admin;
                    break;
                case "Super Admin":
                    Admin sAdmin = gson.fromJson(response1.body(), Admin.class);
                    sAdmin.setSuperAdmin(true);
                    loggedIn = sAdmin;
                    break;
                case "Faculty Member":
                    FacultyMember facultyMember = gson.fromJson(response1.body(), FacultyMember.class);
                    facultyMember.setIsProfessor(false);
                    loggedIn = facultyMember;
                    break;
                case "Professor":
                    FacultyMember prof = gson.fromJson(response1.body(), FacultyMember.class);
                    prof.setIsProfessor(true);
                    loggedIn = prof;
                    break;
                case "Student":
                    loggedIn = gson.fromJson(response1.body(), Student.class);
            }
        } catch (URISyntaxException ex) {
            ex.printStackTrace();
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }

        if (loggedIn instanceof Admin && ((Admin) loggedIn).isSuperAdmin()) {
            if (loggedIn.getPassword().equals(request.getParameter("password"))) {
                loggedIn.setPassword(null);
                session.setAttribute("user", loggedIn);
                request.getRequestDispatcher("/JavaServerPages/DashboardSuperAdmin.jsp").include(request, response);
            } else {
                request.getRequestDispatcher("login.html").include(request, response);
            }
        } else if (loggedIn instanceof Admin) {
            if (loggedIn.getPassword().equals(request.getParameter("password"))) {
                loggedIn.setPassword(null);
                session.setAttribute("user", loggedIn);
                request.getRequestDispatcher("/JavaServerPages/DashBoardAdmin.jsp").include(request, response);
            } else {
                request.getRequestDispatcher("login.html").include(request, response);
            }
        } else if (loggedIn instanceof FacultyMember && ((FacultyMember) loggedIn).isProfessor()) {
            if (loggedIn.getPassword().equals(request.getParameter("password"))) {
                loggedIn.setPassword(null);
                session.setAttribute("user", loggedIn);
                request.getRequestDispatcher("/JavaServerPages/DashboardProfessor.jsp").include(request, response);
            } else {
                request.getRequestDispatcher("login.html").include(request, response);
            }
        } else if (loggedIn instanceof FacultyMember) {
            if (loggedIn.getPassword().equals(request.getParameter("password"))) {
                loggedIn.setPassword(null);
                session.setAttribute("user", loggedIn);
                request.getRequestDispatcher("/JavaServerPages/DashBoardFacultyMember.jsp").include(request, response);
            } else {
                request.getRequestDispatcher("login.html").include(request, response);
            }
        } else {
            if (loggedIn.getPassword().equals(request.getParameter("password"))) {
                loggedIn.setPassword(null);
                if (loggedIn.getName().equals("is supended")) {
                    request.getRequestDispatcher("suspendedPage.html").include(request, response);
                } else {
                    session.setAttribute("user", loggedIn);
                    request.getRequestDispatcher("/JavaServerPages/StudentDashBoard.jsp").include(request, response);
                }
            } else {
                request.getRequestDispatcher("login.html").include(request, response);
            }
        }
    }
}
