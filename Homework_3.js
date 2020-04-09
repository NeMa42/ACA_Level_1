// ex 1-------

function areAllDigitsOdd(n){

    if(n==0){
        return true;
    }
    else if(n%2){
        return areAllDigitsOdd((n-n%10)/10);
    }
    else {
        return false;
    }
}


//ex 2--------

function minPos(arr, min = +Infinity){
    if(arr[0]>=0 && arr[0]<min){
        min = arr[0];
    }
    arr.shift(0);
    if(arr.length>0){
        return minPos(arr, min)
    }
    if( min === +Infinity) {return -1}
    else {return min}
}


//ex 3----------

function fibonacci(n){
    let newArr= [];  
    if (n<=2) {
        newArr = [1,1]
        return newArr.splice(0,n);
      }
    else{
        let newArr = fibonacci(n - 1);
        newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
        return newArr;
  }
};


//ex 4----------

function flatten (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


//ex 5 --------

function theSumOfTheDigits(n){
    let strNum = String(n);
    let res= Number(strNum[0]);
    for(let i =1; i<strNum.length; i++){
        res += Number(strNum[i]);
   
    }
    if(String(res).length>=2){
        return theSumOfTheDigits(res);
    }
    else{
        return res;
    }
}
