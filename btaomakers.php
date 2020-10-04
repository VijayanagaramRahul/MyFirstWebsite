z<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background:#34495e;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  float:left;
  margin-right:30px;
  margin-bottom:50px;
}

.flip-card-inner {
  position: relative;
  width: 50%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #80ffbf;
  color: black;
  transform: rotateY(180deg);
}
</style>
</head>
<body><nav class="navbar-fixed-top navbar-inverse">
    <script>
        window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}
    </script>
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
            <li><a href="cse/cse">CSE</a></li>
            <li><a href="ece/ece">ECE</a></li>
            <li><a href="eee/eee">EEE</a></li>
             <li><a href="#">MECH</a></li>
              <li><a href="civil/civil">CIVIL</a></li>
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
<h1 style="color:white;text-align:center;font-size:500%; margin-top:10%;">BTAO</h1>
<h2  style="color:white;text-align:center;font-size:200%;">MAKERS</h2>


<section style="margin-left:5%;">
<div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="css/rahulvijayam.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Vijayana<br>garam Rahul</h1> 
      <p>Software Developer</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="photo2.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Sandeep</h1> 
      <p>All Rounder</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>




<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="IMG-20181120-WA0073.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Naziya Tharannum</h1> 
      <p>Business Takon</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="css/bharath.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Bharathwaj</h1> 
      <p>Upcomming Hacker</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="css/prashanth.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Prasanth</h1> 
      <p>Tech YouTuber</p> 
      <a href="https://www.youtube.com/prasanthtechtuts">Prasanth Tech Tuts</a>
      <p>We love btao</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="IMG-20190319-WA0006 - Copy.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Madhu</h1> 
      <p>Software Engineer</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="css/harshinii.jpeg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Harshini</h1> 
      <p>Software Engineer</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="20180619_154649.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Sindhu</h1> 
      <p>Software Engineer</p> 
      <p>We love btao</p>
    </div>
  </div>
</div>
</section>




<footer style="position:fixed;bottom:5px; width:100%; background-color:black; " align="center">
    
        <h4 align="center" style="color:white;" class="container-fluid"> BACHELOR TECHNOLOGY APPLICATION ORIENTED</h4>

        <div class="icons" align="center">
        <a href="https://www.facebook.com/BTAOTeam/" class="fa fa-facebook fa-2x social social-fb"></a>
    <a href="https://twitter.com/BTAO90779990?s=08" class="fa fa-twitter fa-2x social social-twi"></a>
    <a href="https://www.youtube.com/channel/UC4axot1mQvXljkow92s54Xg" class="fa fa-youtube fa-2x social social-youtube"></a>
    <a href="https://plus.google.com/u/0/108030690463741658732" class="fa fa-google-plus fa-2x social social-google"></a>
    </div>
    <a href="http://vnrcreations.com/"  class="btn btn-link" style="color:gray;" >Created by VNR CREATIONS</a></footer>
</body>
</html> 
