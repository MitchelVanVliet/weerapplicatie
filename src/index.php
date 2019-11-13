<?php
$url=$_GET['page'];
$url_replaced = str_replace('-','_',$url);

if($_GET['remove_cookie']){
        unset($_COOKIE['city']);
        setcookie("city", "", time()-3600);
        header('Location: /portfolio/weerapplication/');
}
if($_GET['city']){
    
    setcookie("city", $_GET['city']);
}
?>
<head>
<link rel="stylesheet" type="text/css" href="style/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> <!--320-->
</head>
<script>
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
</script>
<?php
if($_COOKIE['city']){
    ?>
	<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="topnav" id="myTopnav">
    <a href="?remove_cookie=true" class="cityname"><i class="fas fa-university"></i> <?php if ($_GET['city'] == $_COOKIE['city'] ){echo $_COOKIE['city'];} elseif(!isset($_GET['city'])){echo $_COOKIE['city']; } else { echo $_GET['city'];} ?></a>
     <a <?php if($url == ""){echo "class='active'";} ?> href="/portfolio/weerapplication/"><i class="fas fa-user"></i> Hangman</a>
  <a <?php if($url == "weather"){echo "class='active'";} ?> href="/portfolio/weerapplication/weather"><i class="fas fa-cloud"></i> Weather</a>
  <a <?php if($url == "forecast"){echo "class='active'";} ?> href="/portfolio/weerapplication/forecast"><i class="fas fa-calendar-alt"></i> Forecast</a>
  <a <?php if($url == "neerslag"){echo "class='active'";} ?> href="/portfolio/weerapplication/neerslag"><i class="fas fa-tint"></i> Neerslag</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<?php
}
?>
<div class="background-image"></div>
<?php
if($url_replaced != "403.shtml"){

if($url == null){
    if(!isset($_COOKIE['city'])){
        if(isset($_GET['city'])){
            ?>
            <script>
                window.location.reload();
            </script>
            <?php
        } else {
        
    ?>
        <body onload="getLocation()">
        <div class="content">
            <div class="cityForm">
                <form method="get"><input class="cityInput" type="text" name="city"><input type="submit" class="submitButton" value="verder"></form>
            </div>
        </div>
        <?php
        }
    }
    else {
        ?>
       
        <div class="content">
            <div id="hangman"></div>
    <script src="./includes/hangman.js"></script>
    <script>
        var hang = new hangman('<?php echo $_COOKIE['city'] ?>');
    </script>

</div>
        <?php
    }
} else {
    ?>
     <div class="content">
    <?php


require("model/Model.php");
require("view/View.php");
require("controller/Controller.php");


$model = new Model;
$view = new View;

            $view->{$url_replaced}();
            ?>
            </div>
            <?php
}
} else {
    include("403.shtml");
}
?>
</body>