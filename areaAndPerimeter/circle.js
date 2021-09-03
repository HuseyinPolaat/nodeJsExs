

const circleArea  = (radius) => {
    
    let area = 3.14 * Math.pow(radius, 2);
    console.log(`${radius} yarıçaplı dairenin alanı: ${area}`);    
}


const circleCircumference  = (radius) => {
    
    let perimeter = 2 * 3.14 * radius;
    console.log(`${radius} yarıçaplı dairenin çevre uzunluğu: ${perimeter}`)

}

module.exports = {
    circleArea,
    circleCircumference 
}