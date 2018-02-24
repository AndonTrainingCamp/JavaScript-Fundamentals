let inputArr = [1,2,33,5,2,7],
	inputSum = 4;
solve(inputArr, inputSum);

function solve(arr,sum){
	let currentSum = 0,
		j,
		i = 0;
	while (currentSum != sum) {
		for (j = 0; j < arr.length; j++) {
			for (; i < arr.length; i++) {
				currentSum += arr[i];
				if (currentSum < sum) { 
					
				} else if (currentSum > sum) {
					currentSum -= arr[i];
				} else {
					console.log('yes');
					return;
				}			
			}
			currentSum = 0;
			i = j + 1;
			if (j === arr.length - 1) {
				console.log('no');
				return;
			}
		}
	}
}