
var arr  = process.argv;
var sum = 0;
for (var index = 2; index < arr.length; index++) {
    sum+= Number(arr[index]);
}
console.log(sum);