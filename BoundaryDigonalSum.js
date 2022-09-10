
function getDigonalBoundarySum(matrix){
	let sum = 0;

	for (let i = 0; i < n; i++) {

		for (let j = 0; j < n; j++) {
        
            let isBoundry = i == 0 || j == 0 || i == n - 1|| j == n - 1
            
			let isDigonal = i == j || (i + j) == n - 1
            
			 if ( isBoundry || isDigonal ) {
				sum += matrix[i][j];
			}

		
		}
	}

	console.log(sum);
}
	
let n = 5;

let matrix = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 1],
            [2, 3, 4, 5, 6],
            [7, 8, 9, 1, 2],
            [3, 4, 5, 6, 7]]
	
getDigonalBoundarySum(matrix);
	
