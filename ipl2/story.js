function story(matches)
{
    var result={};
    var arr=[];
    for(let match of matches)
    {
        //console.log(match.player_of_match);
       if(result[match.player_of_match])
       {  
        result[match.player_of_match]+=1;
       } 
       else
       {
        result[match.player_of_match]=1;
       }
    }
    //console.log(result);
    for(let player in result)
    {
        arr.push([player,result[player]]);
    }
    arr.sort(function(a, b) {
        return b[1]-a[1];
      });
      var finalResult={};
      for (let index = 0; index < 10; index++) {
          finalResult[arr[index][0]]=arr[index][1];
          }
          return finalResult;
}
module.exports=story;