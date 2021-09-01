
const args = process.argv.slice(2);

function calcArea(r){
    const area =  3.14 * Math.pow(r, 2);
    console.log(`Yarıçapı (${r}) olan dairenin alanı: ${area}`);
}

calcArea(args[0] * 1);


