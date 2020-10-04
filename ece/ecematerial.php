<?php

session_start();

$con = mysqli_connect("localhost","id7275604_userdetails","csedepartment","id7275604_user") or die("Connection Error");

if(!isset($_SESSION['name']) && !isset($_SESSION['email']) && !isset($_SESSION['pass']))
{
	header("location:login");
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];
$pass = $_SESSION['pass'];

?>
  
  <!DOCTYPE html>
<html lang="en">
<head>
  <title>CSE Material</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
          
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
      button,a{
          margin-top:3px;
      }
  </style>
</head>
<body class="bdimg">
    
    <script>
    window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}
</script>
    <nav class="navbar-fixed-top navbar-inverse">
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
        <li><a href="/index">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Branches<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/cse/index">CSE</a></li>
            <li><a href="/ece/index">ECE</a></li>
            <li><a href="/eee/index">EEE</a></li>
             <li><a href="/mech/index">MECH</a></li>
              <li><a href="/civil/index">CIV</a></li>
          </ul>
        </li>
       <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Academics<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/objective">Objective</a></li>
            <li><a href="/logout">Materials</a></li>
            <li><a href="/pqpapers">Previous Question papers</a></li>
            <li><a href="/Scopyofallbranches">Syllabus copy</a></li>
          </ul>
        </li>
       <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tech Trends<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/iot">INTERNET OF THINGS</a></li>
            <li><a href="/Artificialintelligence">ARTIFICIAL INTELLIGENCE</a></li>
            <li><a href="/cloudcomputing">CLOUD COMPUTING</a></li>
            <li><a href="/bigdata">BIG DATA</a></li>
            <li><a href="/argumantedreality">ARGUMENTED REALITY</a></li>
            <li><a href="/blockchain">BLOCK CHAIN</a></li>
            <li><a href="/robotics">ROBOTICS</a></li>
          </ul>
        </li>
         
        <li><a href="/about">About us</a></li>
       
      </ul>
      <ul class="nav navbar-nav navbar-right" style="margin-right:10%;">
        <li><a href="/regis"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="csematerial?vid"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
        <?php

          if(isset($_GET['vid']))
           {
        	session_destroy();

        	//header("location:login");
           }

        ?>
      </ul>
    </div>
  </div>
</nav>

<h1 align="center">CSE MATERIALS</h1>
<!--Ist year CSE materials start here-->
<details align="center">
    <summary class="btn btn-danger">
        I year 
         </summary>
    <details><summary><button class="btn btn-primary" >1-1</button></summary>
    <details><summary><button class="btn btn-success" >M1</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1_qHPcCK5gN1bMd0z9i7QKl4J8IxWV14q" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1e-plBLLS3BVe2zyQoRD0yDToYsvAntAg" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=1yEKQfw-4WJjMozOIJ27_TF9vsSnPSi8C" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=10hc26uZLcosj29PgWcsOkQB6gaxLFQ20" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >Physics</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=19O_dyD_4btM9Cph8gMoFsrQ01I8E3WiD" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1uS3f4hBnDoH0nlSFULPeDQD5y77U7HB9" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=1wPoVvb65mExhUvyYgbOXJS36lNQmcAgJ" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=1DnYWreBMAii5_pmqCfTEpvFIJCntULvG" class="btn btn-default" >Unit4</a>
    <a href="https://drive.google.com/uc?export=download&id=1lmBXHFD7eam5LWjP8leRz1r2Q4-YAHk8" class="btn btn-default" >Unit5</a>
    </details>
    
    <details><summary><button class="btn btn-success" >C Language</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/file/d/10nv67ekBzmBA0Tduyb3-lB4aloHDL0Ne/view?usp=sharing" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >Engineering Drawing</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >English</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1lmBXHFD7eam5LWjP8leRz1r2Q4-YAHk8" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1HuQodeE-Hy2XGrG_U8LQ1UGT5ItaaLlp" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=1ixMyrF_rAJ6lR3gusz5tgjIEVNu4rU-A" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=14diDV-6MMGBJCUsv-PEjKswCFs_-G4ry" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    
    </details>
    <details><summary><button class="btn btn-primary" >1-2</button></summary>
    <details><summary><button class="btn btn-primary" >M2</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >Chemistry</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1BTWVVvFk1sVm2yGqlou-dsIPl01RWoMA" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1FOrwNoGYbpAJ5Hm429FPeBqQ7MMqWZhI" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    
    <details><summary><button class="btn btn-success" >Data Structutes</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=11lolOnyi-CcJoNAvCNB2tZ3vkQ3QhVZP" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1zlq9o0FFyaCmNil0fi3o2TnqD8JA_dSs" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=13PoBZTma9N19KpQlk27V392DorTcUy9W" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=1qeDBZ62SAA7Dfax5O9U5SdW7hNA-TVv2" class="btn btn-default" >Unit4</a>
    <a href="https://drive.google.com/uc?export=download&id=1V-zInf6pw02SmLvudppEcVLUcZubWnjK" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >Environmental Studies</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1jF7CZp3-WdfOVMx-iw0y7KuB9N4tl6-a" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1TUoS3FtWxowoMoVg8EHUKh3ME1kD9ndS" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=17lOowijoxMlN5AaAKPdkv2zheN74zr2t" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=1ORhUGTm1-hgNIP_gjgDEJmM8bZRBN3z0" class="btn btn-default" >Unit4</a>
    <a href="https://drive.google.com/uc?export=download&id=13-nKgkrkEijzpj9d7v7SwGj8mpjlBPaI" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >Proffesional English</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    
    </details>
    </details>
<!--II year CSE materials start here-->
<details align="center" style="margin-top:5px;">
    <summary class="btn btn-danger">II year </summary>
    <details><summary><button class="btn btn-primary" >2-1</button></summary>
    <details><summary><button class="btn btn-success" >M3</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >DM</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1xVG4w7ROswBAcr16rTsq7FmBPHs9DBaw" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    
    <details><summary><button class="btn btn-success" >DBMS</button></summary>
    <a href="https://drive.google.com/uc?export=download&id=1QiZy-DmYCAffRHTWRmgWF7bAzZ8yAWxx" class="btn btn-default" >Unit1</a>
    <a href="https://drive.google.com/uc?export=download&id=1xKddBz6pNfKAU2fIs4RKxiCJiwQYZZo0" class="btn btn-default" >Unit2</a>
    <a href="https://drive.google.com/uc?export=download&id=1cTM9g9soqWsPFyjjKOugLzBXkMjVqWHv" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=1uhPlwLLsMe8zqL72fIaiJYZ1zxhJnuIX" class="btn btn-default" >Unit4</a>
    <a href="https://drive.google.com/uc?export=download&id=1H6bx51Q3FOuB3XBVMXpx0dxDap_MPSrl" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >DLD</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="https://drive.google.com/uc?export=download&id=1-J6rIsKD6eBXrMRTFXbKdc8OQYT9AnfJ" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    <details><summary><button class="btn btn-success" >MEFA</button></summary>
    <a href="#" class="btn btn-default" >Unit1</a>
    <a href="#" class="btn btn-default" >Unit2</a>
    <a href="#" class="btn btn-default" >Unit3</a>
    <a href="#" class="btn btn-default" >Unit4</a>
    <a href="#" class="btn btn-default" >Unit5</a>
    </details>
    
    <details><summary><button class="btn btn-success" >BEE</button></summary>
    <a href="#" class="btn btn-default" >Unit1(Electronics)</a>
    <a href="https://drive.google.com/uc?export=download&id=1zYKJJ-PGMLwoy7N-C7b4KnfXd3QFA0vh" class="btn btn-default" >Unit2(Electronics)</a>
    <a href="https://drive.google.com/uc?export=download&id=14Uv67CkmWaLwALyN67OvcQMeSW9nTRY2" class="btn btn-default" >Unit3(Electronics)</a>
    <a href="#" class="btn btn-default" >Unit4(Electrical)</a>
    <a href="#" class="btn btn-default" >Unit5(Electrical)</a>
    <a href="#" class="btn btn-default" >Unit-6(Electrical)</a>
    </details>
    
    </details>
    <details><summary><button class="btn btn-primary" >2-2</button></summary>
    </details>
    
<footer style="position:fixed;bottom:5px; width:100%; background-color:black; " align="center">
    
        <h4 align="center" style="color:white;" class="container-fluid"> BACHELOR TECHNOLOGY APPLICATION ORIENTED</h4>

        <div class="icons" align="center">
        <a href="https://www.facebook.com/BTAOTeam/" class="fa fa-facebook fa-2x social social-fb"></a>
    <a href="https://twitter.com/BTAO90779990?s=08" class="fa fa-twitter fa-2x social social-twi"></a>
    <a href="https://www.youtube.com/channel/UC4axot1mQvXljkow92s54Xg" class="fa fa-youtube fa-2x social social-youtube"></a>
    <a href="https://plus.google.com/u/0/108030690463741658732" class="fa fa-google-plus fa-2x social social-google"></a>
    </div>
    
<a href="http://vnrcreators.000webhostapp.com"  class="btn btn-link" style="color:gray;" >Created by VNR CREATIONS</a></footer>




</body>
</html>
