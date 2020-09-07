function extraRunsIn2016(matches,deliveries)
{
var result={};
var ids=[];
for(let match of matches)
{
    
 if(match.season==2016)
 {
    ids.push(match.id);
 }   
 //console.log(ids);
}
for(let delivery of deliveries)
{
   
if(ids.includes(delivery.match_id))
{
   if(result[delivery.bowling_team])
   {
      result[delivery.bowling_team]+=parseInt(delivery.extra_runs);
   }
   else
   {
      result[delivery.bowling_team]=parseInt(delivery.extra_runs);
   }
}
}
return result;
}
module.exports=extraRunsIn2016;