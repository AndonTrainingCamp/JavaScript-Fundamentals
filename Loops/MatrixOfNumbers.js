function solve(args){
	let size = +(args[0]),
		matrix = [],
		k = 1,
		i,j;
	for (i = 0; i < size; i++){
		matrix[i] = [];
		for (j = 0; j < size; j++){
			matrix[i][j] = k;
			k++;
		}
		console.log(matrix[i].join(' '));
		k = 2 + i;
	}	
}
