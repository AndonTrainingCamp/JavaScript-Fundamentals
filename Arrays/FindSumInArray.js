let inputArr = [4,5,7,7,3,6],
	inputSum = 9;
solve(inputArr, inputSum);

function solve(arr,sum){
    let currentSum = 0,
        resultArr = [],
        j, 
        k = 0,
	    i = 0;
    while (currentSum != sum) {
        for (j = 0; j < arr.length; j++) {
			for (; i < arr.length; i++) {
				currentSum += arr[i];
				if (currentSum < sum) { 
                    resultArr[k] = arr[i];
                    k++;
				} else if (currentSum > sum) {
					currentSum -= arr[i];
				} else {
                    resultArr[k] = arr[i]; //For the last addend
					console.log(resultArr.join(', '));
					return;
				}			
            }
            resultArr.length = 0;
            k = 0;
			currentSum = 0;
			i = j + 1;
			if (j === arr.length - 1) {
				console.log('no');
				return;
			}
		}
	}
}
