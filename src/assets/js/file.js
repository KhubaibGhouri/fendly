window.onload = function () {
	var chart = new CanvasJS.Chart("my_piechart",
	{
		title:{
			fontFamily: "arial black"
		},
                animationEnabled: true,
		legend: {
			horizontalAlign: "center"
		},
		data: [
		{        
			type: "pie", 
			startAngle:0,
			indexLabelFontColor: "MistyRose",       
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			showInLegend: false,
			indexLabel: "#percent%", 
			dataPoints: [
				{  y: 52, name: "Time At Work",},
				{  y: 44, name: "Time At Home", },
				{  y: 12, name: "Time at school",},
				{  y: 12, name: "Time at school", },
				{  y: 12, name: "Time at school", },
				{  y: 12, name: "Time at school", },
				{  y: 12, name: "Time Spent Out", }
			]
		}
		]
	});
	chart.render();
}

$.getScript('http://cdnjs.cloudflare.com/ajax/libs/flot/0.8.2/jquery.flot.min.js',function(){
  $.getScript('http://cdnjs.cloudflare.com/ajax/libs/flot/0.8.2/jquery.flot.pie.min.js',function(){
    $.getScript('http://cdnjs.cloudflare.com/ajax/libs/flot/0.8.2/jquery.flot.resize.min.js',function(){
      
      
      // static charts
      var d1 = [];
      for (var i = 0; i < 14; i += 0.2) {
         d1.push([i, Math.sin(i)]);
      } 
      var d2 = [[0, 3], [4, 15], [8, 5], [9, 13]];
      var d3 = [[0, 12], [5, 12], [12, 13]];
        
        var d4 = [[0, 3], [4, 15], [8, 5], [9, 13]];
      var d5 = [[0, 12], [5, 2], [12, 13]]; 
      // line
      $.plot("#chart3",[d2,d3],{yaxis:{show:true},grid:{borderColor:'#ccc'},series:{color:'#ff4444',lines:{show:true},points:{show:true}}});
       $.plot("#chart4",[d4,d5],{yaxis:{show:true},grid:{borderColor:'#ccc'},series:{color:'#99789E',lines:{show:true},points:{show:true}}});
      
    });// end getScript (resize)
  });// end getScript (pie)
});// end getScript

