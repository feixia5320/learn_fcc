$(function () {

    function adddata(){

        var  xAxis ={
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        var series = [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]

        var json_2={};
        json_2.xAxis = xAxis;
        json_2.series =series;

        var chart = Highcharts.chart('fun1',json_2);

        //增加数据
        $('#btn2').click(function () {
            if (chart.series.length === 1) {
                chart.addSeries({
                    data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
                });
            }
        });
        //改变标题
        $('#btn4').click(function () {
            chart.yAxis[0].setTitle({
                text: '新 Y 轴标题',
                x: -20,
                rotation: 90
            });
        });
        //导出图
         $('#btn5').click(function () {
        chart.exportChart(null, {
            chart: {
                backgroundColor: '#FFFFFF'
            }
        });
    });
    }
    adddata();

    //test
    $('#btn3').click(function(){
            alert('sdf');
    });

   
    //-------------改变标题-------------

    
});