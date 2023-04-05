function getCylinderVolume(cylinder){
    let radius = cylinder['radius'];
    let height = cylinder['height'];

    return (Math.PI * radius * 2 * height).toFixed(4);
}


let cylinder = {
    radius: 24,
    height: 50
}

let vol = getCylinderVolume(cylinder);
console.log(vol);