<?php

class View{
function weather(){
  $controller = new Controller;
  $city = $_COOKIE['city'];
  if($city){
  list ($weather, $temp_min, $temp_max, $id) = $controller->weather($city);
  ?>
  <h2><?php echo $city; ?></h2>
  <table class="weather">
    <tr><td colspan="2" class="weatherimage" id="<?php echo $id; ?>"><img src="/portfolio/weerapplication/images/<?php echo $id; ?>.png"></image></td></tr>
    <tr><td><p>min<br><?php echo $temp_min ?></p></td><td><p>max <br> <?php echo $temp_max ?></p></td></tr>
    <tr><td colspan="2"><p><? echo $weather; ?></p></td></tr>
</table>
  <?php
} else {
    ?>
    <script>
        location.href="/portfolio/weerapplication/"
    </script>
    <?php
}
}

function forecast(){
      $controller = new Controller;
  $city = $_COOKIE['city'];
  if($city){
      ?>
      <h2><?php echo $city; ?></h2>
      <?php
  foreach($controller->forecast($city) as $forecast){
      list($weather, $temp_min, $temp_max, $date, $id) = $forecast;
      
      ?>
  <table class="forecast" align="center">
      <tr><td colspan="2"><strong><? echo $date; ?></strong></td></tr>
    <tr><td colspan="2" class="weatherimage" id="<?php echo $id; ?>"><img src="/portfolio/weerapplication/images/<?php echo $id; ?>.png"></image></td></tr>
    <tr><td><p>min<br><?php echo $temp_min ?></p></td><td><p>max <br> <?php echo $temp_max ?></p></td></tr>
    <tr><td colspan="2"><p><? echo $weather; ?></p></td></tr>
    
</table>
      <?php
  }
} else {
    ?>
    <script>
        location.href="/portfolio/weerapplication/"
    </script>
    <?php
}
}
function neerslag(){
    $controller = new Controller;
  $city = $_COOKIE['city'];
  if($city){
     list($val, $time) = $controller->live($city);
     
$nothingTime = array_pop($time);
$colorArray = array();
foreach($time as $t){

    $colorArray[] = 'rgba('.rand ( 0 , 255 ).', '.rand ( 0 , 255 ).','. rand ( 0 , 255 ).', 1'.')';
}
  ?>
  <h2><?php echo $city; ?></h2>
  <style>
  #myChart{
      width:80%!important;
      height:80%!important;
  }
.content{
    position:relative!important;
}
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
  
  <canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: <?php echo json_encode($time); ?>,
        datasets: [{
            label: "Neerslag in mm",
            data: <?php echo json_encode($val); ?>,
            backgroundColor: 
                <?php echo json_encode($colorArray); ?>,
            borderColor: [
                <?php echo json_encode($colorArray); ?>,
            ],
            borderWidth: 1
        }]
    },
    options: {
            responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    fontSize: 24
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    fontSize: 24
                }
            }]
        },
        legend: {
            labels: {
             fontColor: '#000000'   
            }
         }
    }
});
</script>

  <?php
  }
}

}