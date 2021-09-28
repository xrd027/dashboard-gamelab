$(document).ready(function() {
    $('#autoWidth, #autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });
$('#bar').click(function(){
	$(this).toggleClass('open');
	$('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled' );
});
$(function(){
    $('.close').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});

let labels2 = ['Cinema1', 'Cinema2', 'Cinema3', 'Cinema4'];
let data2 = [199.6, 90.3, 156.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
});

let labels1 = ['PROFIT', 'LOSS'];
let data1 = [80, 20];
let colors1 = ['#36CAAB', '#E80D0F'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['PROFIT', 'LOSS'],
        datasets: [ {
            data: [80, 20],
            backgroundColor: ['#36CAAB', '#E80D0F']
        }]
    },
});




