<?php
function curl($url){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
$data = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
return ($httpcode>=200 && $httpcode<300) ? $data : false;
}

          
class Model{

public function weather($city){
    $urlContents = curl("http://api.openweathermap.org/data/2.5/weather?q=".$city."&type=accurate&units=metric&appid=0f0d7f0579d159acde6d1e65665b2d87&lang=nl");
    $weatherArray = json_decode($urlContents, true);
    
        return array ($weatherArray['weather'][0]['description'], intval($weatherArray['main']['temp_min']), intval($weatherArray['main']['temp_max']), str_replace(' ', '_', $weatherArray['weather'][0]['description']));
}

public function forecast($city){
    $urlContents = curl("http://api.openweathermap.org/data/2.5/forecast?q=".$city."&type=accurate&units=metric&appid=0f0d7f0579d159acde6d1e65665b2d87&lang=nl");
     $weatherArray = json_decode($urlContents, true);
     $values = [];
     for($i = 0; $i < 40; $i++){
         if(strpos($weatherArray['list'][$i]['dt_txt'], '15:00:00')){
             $datumString = date("l", strtotime($weatherArray['list'][$i]['dt_txt']));
         $values[] = array ($weatherArray['list'][$i]['weather'][0]['description'], intval($weatherArray['list'][$i]['main']['temp_min']), intval($weatherArray['list'][$i]['main']['temp_max']), $datumString, str_replace(' ', '_', $weatherArray['list'][$i]['weather'][0]['description']));
     }
     }
        return $values;
}

function live($city){
                     $longlatFile = curl("https://maps.googleapis.com/maps/api/geocode/json?address=".$city."&key=AIzaSyAaOB4DlhYr5SYSlSDQ2BMcpJsa6znPSY0");
          
           $longlatDecode = json_decode($longlatFile, true);
           
           $lat = $longlatDecode["results"][0]["geometry"]["location"]["lat"];
           $lng = $longlatDecode["results"][0]["geometry"]["location"]["lng"];
$urlContents = curl("https://gpsgadget.buienradar.nl/data/raintext?lat=52&lon=6");
$results = explode(PHP_EOL, $urlContents);
$resArray = array();
foreach($results as $res){
    $resArray[] = explode('|', $res);
}
$resValArray = array();
$resTimeArray = array();

foreach($resArray as $resA){
list ($value, $time) = $resA;
$times = array(00,15,30,45);
$whatIWant = substr($time, strpos($time, ":") + 1);
if(in_array ( $whatIWant,  $times )){
    $val = round(pow(10,(($value-109)/32)), 2);
    $resValArray[] = $val;
    $resTimeArray[] = $time;   
}
}
           return array($resValArray, $resTimeArray);
     
}
}