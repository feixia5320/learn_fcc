$(document).ready(function() {
   function quxian_pic1(){

   var title = {
       text: '月平均气温'
   };
   var subtitle = {
        text: 'Source: runoob.com'
   };
   var xAxis = {
       categories: ['一月', '二月', '三月', '四月', '五月', '六月'
              ,'七月', '八月', '九月', '十月', '十一月', '十二月']
   };
   var yAxis = {
      title: {
         text: 'Temperature (\xB0C)'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };   

   var tooltip = {
      valueSuffix: '\xB0C'
   }

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };

   var series =  [
      {
         name: 'Tokyo',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6]
      }, 
      {
         name: 'New York',
         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5]
      }, 
      {
         name: 'Berlin',
         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
            17.9, 14.3, 9.0, 3.9, 1.0]
      }, 
      {
         name: 'London',
         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
            16.6, 14.2, 10.3, 6.6, 4.8]
      }
   ];

   var json = {};

   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;
   json.series = series;

   $('#container').highcharts(json);
   }
quxian_pic1();

//---折线图-2----
function qunxian_pic2(){

var title2 = {
      text: '城市平均气温'   
   };
   var subtitle2 = {
      text: 'Source: runoob.com'
   };
   var xAxis2 = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   };
   var yAxis2 = {
      title: {
         text: 'Temperature (\xB0C)'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };   

   var tooltip2 = {
      valueSuffix: '\xB0C'
   }

   var legend2 = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };

   var series2 =  [
      {
         name: 'Tokyo',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6]
      }, 
      {
         name: 'New York',
         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5]
      },
      {
         name: 'London',
         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
            16.6, 14.2, 10.3, 6.6, 4.8]
      }
   ];

   var json2 = {};

   json2.title = title2;
   json2.subtitle = subtitle2;
   json2.xAxis = xAxis2;
   json2.yAxis = yAxis2;
   json2.tooltip = tooltip2;
   json2.legend = legend2;
   json2.series = series2;

   $('#container3').highcharts(json2);
}
qunxian_pic2();

//---3d饼图---
function chart_pic(){

var chart = {      
      type: 'pie',     
      options3d: {
         enabled: true,
         alpha: 45,
         beta: 0
      }
   };
   var title = {
      text: '2014 年特定网站各浏览器占有率'   
   };   
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };

   var plotOptions = {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
             enabled: true,
             format: '{point.name}'
          }
      }
   };   
   var series= [{
         type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
   }];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;       
   json.tooltip = tooltip; 
   json.plotOptions = plotOptions; 
   json.series = series;   
   $('#container2').highcharts(json);

}
chart_pic();

});

