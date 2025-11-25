let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3= arr1.concat(arr2);
console.log(arr3);
arr3.push(7,8,9);
console.log(arr3);

arr3.splice(0,1,33);
console.log(arr3);

arr3.splice(4,3,23,7,32);
console.log(arr3);
