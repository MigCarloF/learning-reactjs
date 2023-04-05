function hello(){
    console.log("Hello World");
}

function performanceCheck(f){
    let start = performance.now();
    f();
    let end = performance.now();

    return end - start;
}

let perf = performanceCheck(hello);
console.log(perf);


