function getNearest(str, arr){
    var maxMatchRatio = 0;
    var res = ""
    for(var i in arr){
        var matchRatio = 0;
        for(var j in str){
            if(arr[i].includes(str[j]))
                matchRatio += 1;
        }
        if(matchRatio > maxMatchRatio){
            res = arr[i]
            maxMatchRatio = matchRatio  
            // console.log(`${res}, ${maxMatchRatio}, ${matchRatio}`)
        }
            
            
        // console.log(matchRatio, arr[i])
    }
    return res;
}
var arr = ["Open door","Close door", "Open AC" , "Play the song"];
voice_input = "play songs";

command = getNearest(command, arr))

if(command == "Open door"){
    opendoor()
}
