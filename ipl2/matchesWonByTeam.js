// const MATCHES_FILE_PATH="./csv_data/matches.csv";
// const csv= require("csvtojson");




// csv()
// .fromFile(MATCHES_FILE_PATH)
// .then(matches => {
//     let result2=matchesWonByTeam(matches);
//     console.log(result2);
//  });

//  csv()


function matchesWonByTeam(matches)
{    var result={};
for(let match of matches)
{
    let season=match.season;
    let winner=match.winner;
    if (winner === "") {
        
      }

else if(result[season])
{
    if (result[season][winner]) {
        result[season][winner]++;
      } else {
        result[season][winner] = 1;
      }
}
else
{
    result[season]={};
    result[season][winner]=1;
}


}
    return result;

}
module.exports=matchesWonByTeam;