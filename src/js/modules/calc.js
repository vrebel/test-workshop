function cube(x){
    return square(x)*x;
}

function square(x){
    return x*x;
}

function randomInt(min, max){
    return Math.round( Math.random()*(max-min) + min );
}

export { square, cube, randomInt};