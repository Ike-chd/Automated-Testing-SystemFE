<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpSession;"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest;"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse;"%>
<%@ page import="Models.Users.User"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%session = request.getSession();%>
        <%User loggedIn = (User) session.getAttribute("user");%>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title><%=loggedIn.getName() + "'s"%> Dashboard</title>

        <!-- Montserrat Font -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- Material Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

        <!-- Custom CSS -->
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
            <!-- End Header -->

            <!-- Sidebar -->
            <aside id="sidebar">
                <div class="sidebar-title">
                    <div class="sidebar-brand">
                        <span class="material-icons-outlined">school</span> Enrollment System
                    </div>
                    <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
                </div>

                <ul class="sidebar-list">
                    <li class="sidebar-list-item">
                        <a href="DashboardSuperAdmin.html">
                            <span class="material-icons-outlined">dashboard</span> Dashboard
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="CreateCourse.html">
                            <span class="material-icons-outlined">class</span> Create Course
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="CreateModule.html">
                            <span class="material-icons-outlined">event_note</span> Create Module
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="createQuestion.html">
                            <span class="material-icons-outlined">grading</span> Create Question
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="createTopic.html">
                            <span class="material-icons-outlined">assignment</span> Create A Topic
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="createTest.html">
                            <span class="material-icons-outlined">assignment</span> Create A Test
                        </a>
                    </li>
                </ul>
            </aside>
            <!-- End Sidebar -->

            <!-- Main -->
            <main class="main-container">
                <div class="main-title">
                    <p class="font-weight-bold">DASHBOARD</p>
                </div>

                <div class="main-cards">
                    <a href="allStudents.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">STUDENTS</p>
                                <span class="material-icons-outlined text-blue">people</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allFacultyMembers.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Faculty Members</p>
                                <span class="material-icons-outlined text-blue">people</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allAdmins.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Administrators</p>
                                <span class="material-icons-outlined text-blue">people</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allCourses.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">COURSES</p>
                                <span class="material-icons-outlined text-orange">class</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allModules.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Modules</p>
                                <span class="material-icons-outlined text-green">event_note</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XXX</span>
                        </div>
                    </a>
                    <a href="allTopics.html" >
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Topics</p>
                                <span class="material-icons-outlined text-red">grading</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XX</span>
                        </div>
                    </a>
                    <a href="allTests.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Tests</p>
                                <span class="material-icons-outlined text-red">grading</span>
                            </div>
                            <span class="text-primary font-weight-bold">Total: XX</span>
                        </div>
                    </a>
                    <a href="BlockOrSuspend.html">
                        <div class="card">
                            <div class="card-inner">
                                <p class="text-primary">Suspension Requests</p>
                                <i class='bx bx-block' style="font-size: 30px; color: red; font-weight: bold;"></i>
                            </div>
                            <span class="text-primary font-weight-bold">Average: XX</span>
                        </div>
                    </a>
                </div>
                <div class="charts">
                    <div class="charts-card">
                        <p class="chart-title">Top Performing Courses</p>
                        <div id="bar-chart"></div>
                    </div>

                    <div class="charts-card">
                        <p class="chart-title">Enrollment Trends</p>
                        <div id="area-chart"></div>
                    </div>

                </div>
            </main>
            <!-- End Main -->
        </div>
        <!-- Scripts -->
        <!-- ApexCharts -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.3/apexcharts.min.js"></script>
        <!-- Custom JS -->
        <script src="JavaScripts/dashboard.js"></script> 
    </body>
</html>