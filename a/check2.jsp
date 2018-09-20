
<%@ page language="java" import="java.sql.*,java.lang.*,java.util.*,java.net.*" contentType="text/html;charset=utf-8"%>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.SQLException" %>
<%@ page   contentType="text/html;charset=utf-8"   %>
<%@ page   pageEncoding="utf-8"%>
<%request.setCharacterEncoding("utf-8");
    %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>

<head>

    <base href="<%=basePath%>">



    <title>检验注册页面</title>

    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">

    <!--

    <link rel="stylesheet" type="text/css" href="styles.css">

    -->



</head>



<body>

<br>

<%
request.setCharacterEncoding("utf-8");
String name =  request.getParameter("name");
String phone = request.getParameter("usrtel");
String classmate = request.getParameter("classmate");
%>

    <%

        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/db?useUnicode=true&characterEncoding=UTF-8";
        String use = "root";
        String password = "root";

        try {
            Class.forName(driver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        Connection conn= null;
        try {
            conn = DriverManager.getConnection(url,use,password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        assert conn != null;
        PreparedStatement sql = null;
        try {
            sql = conn.prepareStatement( "insert into db.user(a_name,phone,classmate) values(?,?,?)");
            sql.setString(1, name);
            sql.setString(2, phone);
            sql.setString(3, classmate);
            sql.executeUpdate();


        } catch (SQLException e) {
            e.printStackTrace();
        }

        assert sql != null;
        try {
            sql.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try {
            sql.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    %>

</body>

</html>