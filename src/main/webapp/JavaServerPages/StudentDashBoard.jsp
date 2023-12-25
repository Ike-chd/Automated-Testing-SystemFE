<%@page import="Models.Users.Student"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpSession;"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest;"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse;"%>
<%@ page import="Models.Users.User"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%session = request.getSession();%>
        <%Student loggedIn = (Student) session.getAttribute("user");%>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title><%=loggedIn.getName() + "'s"%> Dashboard</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
        <link rel="stylesheet" href="CascadingStyleSheets/dashboard.css">
        <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet" type='text/css'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    </head>

    <body>
        <div class="grid-container">

            <!-- Header -->
            <header class="header">
                <div class="menu-icon" onclick="openSidebar()">
                    <span class="material-icons-outlined">menu</span>
                </div>
                <div class="header-left">
                    <span class="material-icons-outlined">search</span>
                </div>
                <div class="header-right">
                    <i class='bx bxs-bell bx-tada-hover' style="font-size: 25px; color: black;"></i>
                    <span class="material-icons-outlined">email</span>
                    <a id="profile" class="material-icons-outlined">account_circle</a>
                    <div id="slideMenu" class="sub-menu-wrap">
                        <div class="sub-menu">
                            <div class="user-info">
                                <h1>Welcome</h1><br>
                                <h2><span id="ID" style="display: none;"><%=loggedIn.getUserID()%></span><%=loggedIn.getName() + " " + loggedIn.getSurname()%></h2><br>
                                <h4><%=loggedIn.getEmail()%></h4>
                            </div>
                            <hr>
                            <a href="#" class="sub-menu-link">
                                <i class='bx bx-user'></i>
                                <p>Edit profile</p>
                                <span>></span>
                            </a>
                            <a href="#" class="sub-menu-link">
                                <i class='bx bx-cog'></i>
                                <p>Settings</p>
                                <span>></span>
                            </a>
                            <a href="#" class="sub-menu-link">
                                <i class='bx bx-log-out' ></i>
                                <p>Logout</p>
                                <span>></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main class="main-container">
                <div class="main-title">
                    <p class="font-weight-bold">DASHBOARD</p>
                </div>
                <div class="main-cards">
                    <a href="allCourseModules.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary"><span id="courseId" style="display: none;"><%=loggedIn.getCurrentCourse().getCourseID()%></span>My Course: <%=loggedIn.getCurrentCourse().getCourseName()%></p>
                                <span class="material-icons-outlined text-blue">people</span>
                            </div>
                            <span id="courseAVG" class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allStuCourseModules.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">My Modules</p>
                                <span class="material-icons-outlined text-green">event_note</span>
                            </div>
                            <span id="allMyModules" class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allStuTests.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">My Tests</p>
                                <span class="material-icons-outlined text-red">grading</span>
                            </div>
                            <span id="allMyTests" class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allStuComments.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">My Comments</p>
                                <i class='bx bxs-chat' style="font-size: 30px;"></i>
                            </div>
                            <span id="allMyComments" class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="Report.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">My Report</p>
                                <i class='bx bxs-report' style="font-size: 30px;"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </main>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.3/apexcharts.min.js"></script>
        <script src="JavaScripts/dashboard.js"></script>
    </body>
</html>