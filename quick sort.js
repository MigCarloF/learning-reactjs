function selectPivot(numList) {
    let i = Math.floor((numList.length - 1) / 2);
    return i;
}

function swapPivotToEnd(numList, pivotIndex) {
    // swaps the locations of pivot to the end of the array
    [numList[pivotIndex], numList[numList.length - 1]] = [numList[numList.length - 1], numList[pivotIndex]];
}

function locateFromLeft(numList, pivot) {
    // returns index when item greater than pivot has been found
    for(let i = 0; i < numList.length - 1; i++){
        if(numList[i] > pivot){
            return i;
        }
    }

    return numList.length - 1;
}

function locateFromRight(numList, pivot) {
    // returns index when item lesser than pivot has been found
    // start at numlist.length - 2 since numlist.length - 1 is the pivot itself
    for(let i = numList.length - 2; i >= 0; i--){
        if(numList[i] < pivot){
            return i;
        }
    }

    return null;
}

function isSorted(numList){
    for(i = 1; i < numList.length; i++){
        if(numList[i - 1] > numList[i]){
            return false;
        }
    }
    return true;
}

function quickSort(numList) {
    // checks to end recursion
    if(isSorted(numList)){
        return numList;
    } else if(numList.length == 2){ // edge case for only 2 numbers
        [numList[0], numList[1]] = [numList[1], numList[0]];
        return numList
    }
    
    let pivotIndex = selectPivot(numList);              // 1) select pivot index at center
    swapPivotToEnd(numList, pivotIndex);                // 2) swap index of pivot to end of array

    // pivot is located at the end here
    pivotIndex = numList.length - 1;            // 3) take new index of pivot 
    let pivot = numList[pivotIndex];                    
    
    let leftItemIndex = 0;
    let rightItemIndex = 1;

    // swaps number from left index with number from right index
    // ends when left index > right index
    while (leftItemIndex < rightItemIndex){             // 4) sort
        leftItemIndex = locateFromLeft(numList, pivot);
        rightItemIndex = locateFromRight(numList, pivot);
        // swap left item and pivot location
        if(leftItemIndex < rightItemIndex){
            [numList[leftItemIndex], numList[rightItemIndex]] = [numList[rightItemIndex], numList[leftItemIndex]];
        }
    }
    
                                                        // 5) when left index overtakes right, swap pivot with item in left index
    [numList[leftItemIndex], numList[pivotIndex]] = [numList[pivotIndex], numList[leftItemIndex]];

    // To track the location of the pivot after the swap
    let pivotCorrectIndex = leftItemIndex;

    // 6) recursively call function until all are sorted
    let preArray = numList.slice(0, pivotCorrectIndex);
    let postArray = numList.slice(pivotCorrectIndex+ 1, numList.length);
    let outputArray = quickSort(preArray).concat(
        [pivot],
        quickSort(postArray)
        );
    return outputArray;
}

function main() {
    let inputList = [2, 6, 5, 3, 8, 7, 1, 0];           // given

    let inputList2 = [4, 4, 7, 9, 1, 3, 0];
    let output = quickSort(inputList2);

    console.log(output);

}

main();