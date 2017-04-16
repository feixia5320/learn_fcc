$(function () {

    function adddata(){

        var  xAxis ={
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        //为函数，获取点准备
        var  plotOptions= {
            series: {
                allowPointSelect: true
            }
        }
        var series = [{
                id: 'series-1',
                name: 'first series',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]

        var json_2={};
        json_2.xAxis = xAxis;
        json_2.series =series;
        json_2.plotOptions = plotOptions;

        var chart = Highcharts.chart('fun1',json_2);

        //增加数据
        $('#btn2').click(function () {
            if (chart.series.length === 1) {
                chart.addSeries({
                    id: 'series-2',
                    name: 'Second series',
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
        //获取元素
        $('#btn6').click(function () {
        var series = chart.get('series-2');
        var text = '第一个数据列的名字是：“' + series.name + "”";
        if (!chart.lbl) {
            chart.lbl = chart.renderer.label(text, 100, 70)
                .attr({
                padding: 10,
                r: 5,
                fill: Highcharts.getOptions().colors[1],
                zIndex: 5
            })
                .css({
                color: '#FFFFFF'
            })
                .add();
        } else {
            chart.lbl.attr({
                text: text
            });
        }
    });
        //获取元素
        $('#btn7').click(function () {
        var series = chart.get('series-1');
        var text = '第一个数据列的名字是：“' + series.data[2].y + "”";
        alert(text);
    });
        //获取选中的点
        $('#btn8').click(function () {
        var selectedPoints = chart.getSelectedPoints();
        if (chart.lbl) {
            chart.lbl.destroy();
        }
        chart.lbl = chart.renderer.label('You selected ' + selectedPoints.length + ' points', 100, 60)
            .attr({
            padding: 10,
            r: 5,
            fill: Highcharts.getOptions().colors[1],
            zIndex: 5
        })
            .css({
            color: 'white'
        })
            .add();
    });



    }
    adddata();

    //test
    $('#btn3').click(function(){
            alert('sdf');
    });

   
    //-------------改变标题-------------

    
});