/**
 * Created by Ellen
 */
//TODO: 방어코드 만들기!
app.controller('analysisController', ['$scope', 'sentimentValues', function ($scope, sentimentValues) {
    sentimentValues.success(function (data) {
        var recentData = [];
        var SentimentValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        recentData = data.reverse().slice(0, 10);

        if (recentData.length < 10) {
            for (var i = 0 ; i < recentData.length ; i ++) {
                var value = recentData[i].sentimentValue;
                SentimentValues[i] = value;
            }
        }

        else {
            for (var i = 0 ; i < 10 ; i ++) {
                var value = recentData[i].sentimentValue;
                SentimentValues[i] = value;
            }
        }

        console.log(SentimentValues);
        // 버그 고쳤음. reverse를 다시 안해줘서 거꾸로 나오고있었다.
        SentimentValues = SentimentValues.reverse();

        $scope.labels = ["9daysago", "8daysago", "7daysago", "6daysago", "5daysago", "4daysago", "3daysago", "2daysago", "1daysago", "Today"];
        $scope.series = ['facebook', 'twitter', 'ellenradio'];
        $scope.data = [
            [-15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [+15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            SentimentValues
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        if (SentimentValues[6] <= 0) {
            $scope.channel = "http://ulivearth.ellenseon.net";
        }
        else
            $scope.channel = "http://oldiscool.ellenseon.net";
    });
}]);

//app.controller('ChartController', function ($scope) { //sentiments가 파라미터로 들어가야 함
//    sentiments.success(funtion(data) {
//        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//        $scope.series = ['Series A', 'Series B'];
//        $scope.data = [
//            [65, 59, 80, 81, 56, 55, 40],
//            [28, 48, 40, 19, 86, 27, 90]
//        ];
//        $scope.onClick = function (points, evt) {
//            console.log(points, evt);
//        };
//    });

//정상동작시작
//app.controller('ChartController', function ($scope) {
//    $scope.attrs = {
//        "caption": "That's what I remember of you!",
//        "numberprefix": "",
//        "plotgradientcolor": "000000",
//        "bgcolor": "000000",
//        "showalternatehgridcolor": "0",
//        "divlinecolor": "000000",
//        "showvalues": "0",
//        "showcanvasborder": "0",
//        "canvasborderalpha": "0",
//        "canvasbordercolor": "000000",
//        "canvasborderthickness": "1",
//        "yaxismaxvalue": "10",
//        "captionpadding": "30",
//        "linethickness": "3",
//        "yaxisvaluespadding": "15",
//        "legendshadow": "0",
//        "legendborderalpha": "0",
//        "palettecolors": "#000000,#000000,#000000,#000000,#000000,#000000",
//        "showborder": "0"
//    };
//
//    $scope.categories = [
//        {
//            "category": [
//                {
//                    "label": "Jan"
//                },
//                {
//                    "label": "Feb"
//                },
//                {
//                    "label": "Mar"
//                },
//                {
//                    "label": "Apr"
//                },
//                {
//                    "label": "May"
//                },
//                {
//                    "label": "Jun"
//                },
//                {
//                    "label": "Jul"
//                },
//                {
//                    "label": "Aug"
//                },
//                {
//                    "label": "Sep"
//                },
//                {
//                    "label": "Oct"
//                },
//                {
//                    "label": "Nov"
//                },
//                {
//                    "label": "Dec"
//                }
//            ]
//        }
//    ];
//
//    $scope.dataset = [
//        {
//            "seriesname": "2013",
//            "data": [
//                {
//                    "value": "22400"
//                },
//                {
//                    "value": "24800"
//                },
//                {
//                    "value": "21800"
//                },
//                {
//                    "value": "21800"
//                },
//                {
//                    "value": "24600"
//                },
//                {
//                    "value": "27600"
//                },
//                {
//                    "value": "26800"
//                },
//                {
//                    "value": "27700"
//                },
//                {
//                    "value": "23700"
//                },
//                {
//                    "value": "25900"
//                },
//                {
//                    "value": "26800"
//                },
//                {
//                    "value": "24800"
//                }
//            ]
//        },
//        {
//            "seriesname": "2012",
//            "data": [
//                {
//                    "value": "10000"
//                },
//                {
//                    "value": "11500"
//                },
//                {
//                    "value": "12500"
//                },
//                {
//                    "value": "15000"
//                },
//                {
//                    "value": "16000"
//                },
//                {
//                    "value": "17600"
//                },
//                {
//                    "value": "18800"
//                },
//                {
//                    "value": "19700"
//                },
//                {
//                    "value": "21700"
//                },
//                {
//                    "value": "21900"
//                },
//                {
//                    "value": "22900"
//                },
//                {
//                    "value": "20800"
//                }
//            ]
//        }
//    ];
//});

//정상동작끝