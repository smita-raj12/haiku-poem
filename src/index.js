import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './haiku.js';

$(document).ready(function(){
  $("#haiku").click(function(){
    event.preventDefault();
    const inputedLine1 = $("#line1").val();
    const inputedLine2 = $("#line2").val();
    const inputedLine3 = $("#line3").val();
    let combinedLine = inputedLine1 + " " + inputedLine2+ " " + inputedLine3;
    //console.log(combinedLine)
    let newHaiku = new Haiku(combinedLine);
    let vowelCount = newHaiku.haikuCheck();
  
    $("#poem").text(combinedLine);
    $("#vowel").text(vowelCount)
    
  });
});