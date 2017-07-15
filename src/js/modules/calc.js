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

export {sqrt, square, cube};
export default {sqrt, square, cube};