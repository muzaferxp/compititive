
function spiralTraversalAMatrixArr(matrixArrArr){
  var result = [];
    var reBase = function(matrixArr) {
        
        if (matrixArr.length == 0) {
            return;
        }

        // top
        result = result.concat(matrixArr.shift());

        // right
        for (var j=0; j < matrixArr.length - 1; j++) {
            result.push(matrixArr[j].pop());
        }

        // bottom
        result = result.concat(matrixArr.pop().reverse());

        // left up
        for (var k=matrixArr.length -1; k > 0; k--) {
            result.push(matrixArr[k].shift());
        }

        return reBase(matrixArr);
    };

    reBase(matrixArrArr);

    return result.join(" ");
};

var martrix_input = [[1,  2,   3,  4],
                    [5,  6,   7,  8],
                    [9,  10, 11, 12],
                    [13, 14, 15, 16]];


var result = spiralTraversalAMatrixArr(martrix_input);

console.log(result);
