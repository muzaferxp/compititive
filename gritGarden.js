
function gritGarden(martix){
 let visited = [];
 let steps = 0;
 let col_index = 0;
 let row_index = 0
 while(!visited.includes([row_index,col_index].join("_"))){
    
    if(col_index < 0 || row_index < 0 || row_index >= martix.length || col_index >= martix[row_index].length )
     return steps;
    
    let o = martix[row_index][col_index]
    
    visited.push([row_index,col_index].join("_"));
    steps += 1
    switch(o){
        case "R":
            col_index += 1;
            break;
        case "L":
            col_index -= 1;
            break;
        case "U":
            row_index -= 1;
            break;
        case "D":
            row_index += 1;
            break;
    }
 }
 return steps
 
}


var martrix_input = [["R",  "R",   "R",  "R"],
                    ["L",  "L",   "D",  "L"],
                    ["R",  "U", "L", "R"]];

var result = gritGarden(martrix_input);

console.log(result);
