 
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Register</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="css/regis.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>

  input[type='text']{

      width:40%;
      margin-left:50%;
  }
   input[type='password']{
      width:40%;
            margin-left:50%;
      
  }
   input[type='email']{
      width:40%;
            margin-left:50%;
      
  }
  button{
            margin-left:50%;
            width:40%;
  }
  label{
            margin-left:50%;
            color:black;
             margin-top:40px;
            
  }
 
 
      </style>
  
</head>
<body>
    <script>
        window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}
    </script>
<div class="backgroundimg"><nav class="navbar-fixed-top navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">BTAO</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="index">Home</a></li>
 

       <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Branches<span class="caret"></span></a>
          <ul class="dropdown-menu">
           <li><a href="/cse/index">CSE</a></li>
    <li><a href="/ece/index">ECE</a></li>
    <li><a href="/civil/index">CIVIL</a></li>
       <li><a href="/mech/index">MECH</a></li>  
       <li><a href="/eee/index">EEE</a></li>
          </ul>
        </li>
        
        
       <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Academics<span class="caret"></span></a>
          <ul class="dropdown-menu">
           <li><a href="objective">Objective</a></li>
            <li><a href="logout">Materials</a></li>
            <li><a href="pqpapers">Previous Question papers</a></li>
             <li><a href="Scopyofallbranches">Syllabus copy</a></li>
          </ul>
        </li>
       <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tech Trends<span class="caret"></span></a>
          <ul class="dropdown-menu">
                <li><a href="iot">INTERNET OF THINGS</a></li>
            <li><a href="Artificialintelligence">ARTIFICIAL INTELLIGENCE</a></li>
            <li><a href="cloudcomputing">CLOUD COMPUTING</a></li>
             <li><a href="bigdata">BIG DATA</a></li>
             <li><a href="argumentedreality">ARGUMENTED REALITY</a></li>
             <li><a href="blockchain">BLOCK CHAIN</a></li>
             <li><a href="robotics">ROBOTICS</a></li>
          </ul>
        </li>
          
           <li><a href="innovativeapps">INNOVATIVE APPS</a></li>
        <li><a href="about">About us</a></li>
       
      </ul>
      <ul class="nav navbar-nav navbar-right" style="margin-right:10%;">
        <li><a href="regis"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

        
                <form class="container"  action="regis" method= "post">  
<div class="f">
                         <h3 align="center">BTAO Registration Form </h3>
                         
        <label >Name </label>
        <input name="name" type="text" class="form-control" placeholder="name" required="required">
        <label>course </label>
        <input name="course" type="text" class="form-control" placeholder="course" required="required">
         <label>Enter Address </label>
        <input name="email" type="email" class="form-control" placeholder="Enter email" required="required">
        <label>Enter Password</label>
         <input name="pass" type="password" class="form-control"  placeholder="Enter Password" required="required">
        <br>
        <button type="submit" name="submit" class="btn btn-warning" >Register</button>
            </div>
            </form>
            <h4 class="form-control" align="center" style="color:red;">
				<?php echo @$msg; ?>
			</h4>

<footer style="position:fixed;bottom:5px; width:100%; background-color:black; " align="center">
    
        <h4 align="center" style="color:white;" class="container-fluid"> BACHELOR TECHNOLOGY APPLICATION ORIENTED</h4>

         <div class="icons" align="center">
        <a href="https://www.facebook.com/BTAOTeam/" class="fa fa-facebook fa-2x social social-fb"></a>
    <a href="https://twitter.com/BTAO90779990?s=08" class="fa fa-twitter fa-2x social social-twi"></a>
    <a href="https://www.youtube.com/channel/UC4axot1mQvXljkow92s54Xg" class="fa fa-youtube fa-2x social social-youtube"></a>
    <a href="https://plus.google.com/u/0/108030690463741658732" class="fa fa-google-plus fa-2x social social-google"></a>
    </div>
    <a href="http://vnrcreations.com/"  class="btn btn-link" style="color:gray;" >Created by VNR CREATIONS</a></footer>
</div>
</body>
</html>
