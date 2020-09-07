const fs=require("fs");
const csv= require("csvtojson");
 const matchesPlayedPerYear=require("./ipl2/matchesPlayedPerYear");
 const extraRunsIn2016=require("./ipl2/extraRunsIn2016");
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH="./public/data.json";
const matchesWonByTeam=require("./ipl2/matchesWonByTeam");
const topTenEconomicalBowler=require("./ipl2/topTenEconomicalBowler");
const story=require("./ipl2/story");
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";

function main()
{
csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
  csv()
  .fromFile(DELIVERIES_FILE_PATH)
  .then(deliveries => {
    let result=matchesPlayedPerYear(matches);
    let result2=matchesWonByTeam(matches);
    let result3=extraRunsIn2016(matches,deliveries);
    let result4=topTenEconomicalBowler(matches,deliveries);
    let result5=story(matches);
    
    saveMatchesPlayedPerYear(result,result2,result3,result4,result5);
  });
 });
}

function saveMatchesPlayedPerYear(result,result2,result3,result4,result5) {
    var jsonData ={
      matchesPlayedPerYearData: result,matchesWonByTeamData: result2,extraRunsIn2016Data:result3,topTenEconomicalBowlerData:result4, storyData:result5
    };
    console.log("working");
    jsonData = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonData, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();

