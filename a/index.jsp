<%--
  Created by IntelliJ IDEA.
  User: heng
  Date: 2018/9/5
  Time: 15:53
  To change this template use File | Settings | File Templates.
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%request.setCharacterEncoding("UTF-8");%>

<meta charset="UTF-8">
<!DOCTYPE html>

<html>
<head>
    <title>Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!-- font files  -->
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Nunito:400,300,700' rel='stylesheet' type='text/css'>
    <!-- /font files  -->
    <!-- css files -->
    <link href="css/style.css" rel='stylesheet' type='text/css' media="all" />
    <!-- /css files -->
</head>
<body>
<h1>数学建模报名</h1>
<div class="log">

    <div class="content2">

        <h2>Sign Up Form</h2>
        <form method="post" action="check2.jsp"  >
            <input type="text" name="name" id="name" value="USERNAME" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'NAME AND SURNAME';}">
            <input type="tel" name="usrtel" id="phone" value="PHONE" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'PHONE';}">

            <input type="text" name="classmate" id="classmate" value="CLASS" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'CLASS';}">
            <input type="submit" class="register" value="Register">
        </form>
    </div>
    <div class="clear"></div>
</div>
<div class="footer">
    <p>Copyright &copy; 2018.SDUST QQ:945503088 <a href="http://zh1cheung.com/" target="_blank" title="Zh1Cheung">Zh1Cheung</a></p>
</div>

</body>
</html>

