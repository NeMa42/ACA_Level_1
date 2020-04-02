// ex 1------

function lowerLimit(arr, num){
	let res = [];

	for(let i = 0; i<arr.length; i++){
		if(arr[i]>num){
			res.push(arr[i]);
		}
	}
	if(res.length== 0){
		res = "Such value doesn't exist"
	}
	return res;
}

// ex 2 ------

function betweenEvens(start, end){
	res = "";

	for(let i = start; i <= end; i++){
		if (allDigitsEven(i)){
			res += i + ",";
		}
	}
	if(res === ""){
		res = "Such number doesn't exist"
	}
	return res
}

function allDigitsEven(n){

	for (let i = Math.abs(n); i>=1; i= (i-i%10)/10){
		if((i%10)%2 == 1){
			return false;
		}
	}
	return true
}

// ex 3 ------


function orderViolationIndex(arr){

	for(let i = 0; i<arr.length; i++){
		if(arr[i] > arr[i+1]){
			return i;
		}
	}
return -1
}

// ex 4 ------

function largestProduct (arr){
	let product = - Infinity;

	for(let i = 0; i< arr.length; i++){
		if((arr[i] * arr[i+1]) > product){
			product = (arr[i] * arr[i+1]);
		}
	}
	return product;
}

// ex 5 ------

function missingNumbers(arr){
	let count = 0;
	let max = -Infinity; 
	let min = +Infinity;

	for (let i = 0; i< arr.length; i++){
		
        if(arr[i]> max){
			max = arr[i];
		}

		if(arr[i]<min){
			min = arr[i];
		}
	}
	return count = (max - min - 1) - (arr.length - 2);
}

// ex 6 ------

function printOfSum(arr){
	let res = [];
    
	for (let i = 0; i<arr.length; i++){
        let sum = 0;
		for(let j = 0; j< (arr[i]).length; j++){
			sum += arr[i][j];
		}
		res.push(sum);
	}
return res;
}

// ex 7 ------

function oddNumXLength(arr){
	let newArr = [];

	for (let i = 0; i< arr.length; i++){
		if(arr[i]%2){
			newArr.push(arr[i]);
		}
	}
	for(let j = 0; j< newArr.length; i++){
		newArr[j]= newArr[j]*newArr.length
	}
	return newArr;
}
