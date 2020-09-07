function topTenEconomicalBowler(matches,deliveries)
{
    var result={};
    var ids=[];
    for(let match of matches)
    {
        if(match.season==2015)
        {
            ids.push(match.id);
        }
    }
   // console.log(ids);
    for(let delivery of deliveries)
    {
        if(ids.includes(delivery.match_id))
        {
           // console.log(delivery.match_id);
            if(result[delivery.bowler])
            {
                if(delivery.wide_runs==0&&delivery.noball_runs==0)
                {
                    result[delivery.bowler]["balls"]++;   
                }
                result[delivery.bowler]["runs"]+=parseInt(delivery.wide_runs)+parseInt(delivery.noball_runs)+parseInt(delivery.batsman_runs);
            }
            else
            {
                result[delivery.bowler]={};
                result[delivery.bowler]["runs"]=parseInt(delivery.wide_runs)+parseInt(delivery.noball_runs)+parseInt(delivery.batsman_runs);
                if(delivery.wide_runs==0&&delivery.noball_runs==0)
                {
                    result[delivery.bowler]["balls"]=1;   
                }
                else
                {
                    result[delivery.bowler]["balls"]=0; 
                }
            }
        }
    }
    
//console.log(result);
var economyRate={};
var arr=[];
for(let item in result)
{

    economyRate[item]=parseFloat(result[item]["runs"]/(result[item]["balls"]/6)).toFixed(2);
    arr.push([item,economyRate[item]]);

}
arr.sort(function(a, b) {
    return a[1] - b[1];
  });
//console.log(arr);
var finalResult={};
for (let index = 0; index < 10; index++) {
    finalResult[arr[index][0]]=parseFloat(arr[index][1]);
    
}
return finalResult;
}
module.exports=topTenEconomicalBowler;