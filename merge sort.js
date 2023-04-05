function merge(arr1, arr2, arrOrig){

    // indeces of arr1 and arr2
    let i = 0, i1 = 0, i2 = 0;


    while(i1 < arr1.length && i2 < arr2.length){
        if(arr1[i1] < arr2[i2]){
            arrOrig[i] = arr1[i1];
            i++;
            i1++;
        } else {
            arrOrig[i] = arr2[i2];
            i++;
            i2++;
        }
    }

    // edge cases when the first while loop exits and there are still items in the arrays
    while(i1 < arr1.length){
        arrOrig[i] = arr1[i1];
        i++;
        i1++;
    }

    while(i2 < arr2.length){
        arrOrig[i] = arr2[i2];
        i++;
        i2++;
    }

    return arrOrig;

}

function mergeSort(arrOrig){
    // returns when list length == 1
    if(arrOrig.length == 1){
        return arrOrig
    }

    let arr1 = arrOrig.slice(0, Math.floor(arrOrig.length/2));
    let arr2 = arrOrig.slice(Math.floor(arrOrig.length/2), arrOrig.length);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return merge(arr1, arr2, arrOrig);
}

function main(){
    let input = [4, 2, 7, 9, 1, 3];
    let input2 = [13, 24, 24, 7, 36, 2, 1];

    let sortedList = mergeSort(input2);

    console.log (sortedList);

}

main();