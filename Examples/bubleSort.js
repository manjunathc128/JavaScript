let arr = [6,4,0, 3,-2,1]

Array.prototype.bubleSort = function(arr){

for(let i=0; i<arr.length-1; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
    }    
    } 
}
   return arr 
}
Array.prototype.bubleSort(arr)
console.log(arr)
