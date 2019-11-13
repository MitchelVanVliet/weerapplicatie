<?php
class Controller{
    function weather($city){
        $model = new Model;
        
        return $model->weather($city);
    }
    
        function forecast($city){
        $model = new Model;
        
        return $model->forecast($city);
    }
    
    function live($city){
        $model = new Model;
        
        return $model->live($city);
    }
}