function cube(x){
    return square(x)*x;
}

function square(x){
    return x*x;
}

function sqrt(x){
    if( x < 0 ){
        throw new Error('srqt não funciona com números negativos');
    }
    return Math.exp(Math.log(x)/2);
}

function randomInt(min, max){
    return Math.round( Math.random()*(max-min) + min );
}

export {sqrt, square, cube, randomInt};