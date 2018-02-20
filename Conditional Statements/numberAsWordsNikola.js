var arr = [],
	output = '',
	result,
	digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
	tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


result = document.getElementById("result");
result.innerHTML = "Result:"


function check(){
	arr = document.getElementById("input1").value.split('');

	if(arr.length == 3){
		output = digits[arr[0]] + ' hundred';
		if(arr[1] > 1) {
			output += ' and ' + tens[arr[1]] + ' ' + digits[arr[2]];
		}
		if (arr[1] == 1) {
			output += ' and ' + teens[arr[2]];
		}
		if(arr[1] == 0 && arr[2] != 0){
			output += ' and ' + digits[arr[2]];
		}
	} 
	else if (arr.length == 2) {
		if(arr[0] > 1) {
			output = tens[arr[0]] + ' ' + digits[arr[1]];
		}
		if (arr[0] == 1) {
			output = teens[arr[1]];
		}
	} else if (arr.length == 1) {
		if (arr[0] == 0) {
			output = 'zero';
		}
		else{
			output = digits[arr[0]];
		}
	}


	result.innerHTML = output;

	
}
