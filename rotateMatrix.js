function rotateMatrix(matrix) {
   let s = "";
	for (j = 0; j < N; j++) 
		for (i = N - 1; i >= 0; i--)
			s += matrix[i][j] + " ";
	console.log(s)
}


var matrix = [ 
        [ 1, 2, 3, 4],
		[ 5, 6, 7, 8],
		[ 9, 10, 11, 12],
		[13, 14, 15, 16]
	 ];
	 
 var N = matrix.length;
rotateMatrix(matrix);
