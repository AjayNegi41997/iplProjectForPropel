function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
      
  }
  
  fetchAndVisualizeData();
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYearData);
    visualizeMatchesWonByTeam(data.matchesWonByTeamData);
    visualizeExtraRunsIn2016(data.extraRunsIn2016Data);
    visualizeTopTenEconomicalBowlers(data.topTenEconomicalBowlerData);
    visualizeTopTenManOfTheMatches(data.storyData);
    
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }

 //console.log(seriesData);
// Highcharts.chart("matches-played-per-year", {
//     chart: {
//         plotBackgroundColor:'#000000',
//         type: 'column'
//     },
//     title: {
//         text: 'Matches Player Per Year'
//     },  
//     xAxis: {
//         type: 'category',
//      },
//     yAxis: {
//         min: 0,
//         title: {
//             text: "Matches"
//         }
//     },
//     legend: {
//         enabled: true
//     },
//     tooltip: {
//         pointFormat: 'Matches Played: <b>{point.y:.1f}</b>'
//     },
    // series: [{
    //     name: 'Years',
    //     data: seriesData
      
    // }]
// });
Highcharts.chart("matches-played-per-year", {
    chart: {
        borderColor: '#EBBA95',
        borderWidth: 4,
        plotBackgroundColor:'#000000',
        type: 'column'
    },
    title: {
        text: 'MATCHES PLAYED PER YEAR'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }, title: {
            style: {
                fontSize: '20px'},
            text: 'YEARS'
        }
    },
    yAxis: {
        min: 0,
        title: {
            style: {
                fontSize: '20px'},
            text: 'MATCHES PLAYED'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Matches: <b>{point.y} </b>'
    },
    series: [{
        name: 'Years',
        data: seriesData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
           // format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
  }

  function visualizeMatchesWonByTeam(matchesWonByTeam)
  {
    var seriesData2 = {};
    var count=0;
    for (let year in matchesWonByTeam) {
        count++;
      for(let teams in matchesWonByTeam[year])
      {
          
        if(seriesData2[teams])
        {
            if(matchesWonByTeam[year][teams]!="")
            seriesData2[teams].push(matchesWonByTeam[year][teams]);
            else
            seriesData2[teams].push(0);
        }
        else
        {
            seriesData2[teams]=[];
            for (let i = 1; i < count; i++) {
                seriesData2[teams].push(0);
              }
            seriesData2[teams].push(matchesWonByTeam[year][teams])
           
        }
      }
    }
    let array = [];
    for (let object in seriesData2) {
      let x = {};
      x["name"] = object;
      x["data"] = seriesData2[object];
      array.push(x);
    }
    console.log("arr=",array);
    console.log(seriesData2)
    
Highcharts.chart("matches-won-by-team", {
    chart: {
        borderColor: '#EBBA95',
        borderWidth: 4,
        plotBackgroundColor:'#000000',
        type: 'column'
    },
    title: {
        
        text: 'MATCHES WON BY EACH TEAM'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: Object.keys(matchesWonByTeam),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            style: {
                fontSize: '20px'},
            text: "Matches Won"
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} matches</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: array
  });
}

function  visualizeTopTenManOfTheMatches(storyData)
{
    const seriesData3 = [];
    for (let player in storyData) {
      seriesData3.push([player, storyData[player]]);
    }

    // Highcharts.chart("story", {
    //     chart: {
    //         type: 'cylinder',
    //         options3d: {
    //             enabled: true,
    //             alpha: 15,
    //             beta: 15,
    //             depth: 50,
    //             viewDistance: 25
    //         }
    //     },
    //     title: {
    //         text: 'TOP TEN MAN OF THE MATCHES SO FAR'
    //     },
    //     plotOptions: {
    //         series: {
    //             depth: 25,
    //             colorByPoint: true
    //         }
    //     },
    //     series:seriesData3
    // });
    // Highcharts.chart("story", {
    //     chart: {
    //         type: 'variablepie'
    //     },
    //     title: {
    //         text: 'Countries compared by population density and total area.'
    //     },
    //     tooltip: {
    //         headerFormat: '',
    //         pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
    //             'Area (square km): <b>{point.y}</b><br/>' +
    //             'Population density (people per square km): <b>{point.z}</b><br/>'
    //     },
    //     series:seriesData3
    // });

    Highcharts.chart("story", {
        chart: {
            borderColor: '#EBBA95',
            borderWidth: 4,
            plotBackgroundColor:'#000000',
            type: 'pie'
        },
        title: {
            text:'TOP TEN MAN OF THE MATCHES SO FAR'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}times</b>'
        },
        accessibility: {
            point: {
                valueSuffix: 'times'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    style:{
                        color:'#FFFFFF'
                    },
                    enabled: true
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Man of the match',
            colorByPoint: true,
            data: seriesData3
        }]
    });
         
}
function visualizeExtraRunsIn2016(data)
{
    Highcharts.chart("extra-runs-per-team", {
        chart: {
            borderColor: '#EBBA95',
            borderWidth: 4,
            plotBackgroundColor:'#000000'
        },

        title: {
            text: "Extra runs conceded by Teams in 2016"
        },
      
        subtitle: {
            text: "Source: Csv data released by IPL"
        },
      
        xAxis: {
          categories: Object.keys(data),
          crosshair: true
        }
      , yAxis: {
        min: 0,
        title: {
          text: "Runs"
        }
      }
      ,
      
        series: [
          {
            name: "Extra runs conceded",
            data: Object.values(data)
          }
        ]
      
      
      });
}

function visualizeTopTenEconomicalBowlers(data)
{
    Highcharts.chart("top-ten-economical-bowler" , {
        chart: {
            borderColor: '#EBBA95',
            borderWidth: 4,
            plotBackgroundColor:'#000000',
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'TOP TEN ECONOMICAL BOWLERS IN 2015'
        },
        xAxis: {
            
            categories: Object.keys(data),
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: "Economy Rate"
            }
          },
      
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true
            }
        },
        series: [{
            data: Object.values(data),
            name: 'Economy Rate',
            showInLegend: true
        }]
    });
}