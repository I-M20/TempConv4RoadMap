const fromValue = document.getElementById('inputNum');
const fromInputs = document.getElementById('fromInpVal');
const toInputs = document.getElementById('toInpVal');
const output = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');

const toCel = {
    celsius: (val) =>val,
    fahrenheit: (val) => (val - 32) * 5/9,
    kelvin: (val) => val - 273.15
};

const fromCel = {
    celsius: (val) =>val,
    fahrenheit: (val) => (val *9/5) +32,
    kelvin: (val) => val + 273.15
};

function convert() {
    const frV = fromValue.value;
    const frU = fromInputs.value;
    const tU = toInputs.value;
    // console.log(`From: "${frU}", To: "${tU}", Value: ${frV}`); good for debugging
    if(frU === tU) {
        output.textContent = 'Units to be converted can\'t be the same. Please select different ones. ';
        return;
    }

    if (isNaN(frV)){
        output.textContent = 'Please enter a valid number.';
        return;
    }
    let result;
    const celTemp = toCel[frU](frV);
    const mainRes = fromCel[tU](celTemp);
    output.textContent = `${frV} ${frU} is ${mainRes.toFixed(1)} ${tU}`;

}

convertBtn.addEventListener('click', convert);

