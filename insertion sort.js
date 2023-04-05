function shimmyLeft(numList, numlistIndex){

    // i > 0 since code should stop when last item has been compared
    for(let i = numlistIndex; i > 0; i--){
        if(numList[i] < numList[i - 1]){
            [numList[i], numList[i - 1]] = [numList[i - 1], numList[i]];
        }
    }
}

function quickSort(numList){
    // i = 1 since quicksort compares with left index. Prevents null pointer exception
    for(let i = 1; i < numList.length; i++){
        if(numList[i] < numList[i - 1]){
            shimmyLeft(numList, i);
        }
    }
}


function main(){
    let input = [4, 2, 7, 9, 1, 3];
    let input2 = [13, 24, 4, 7, 36, 2, 1];

    quickSort(input2);

    console.log(input2);
}

main();
