let interval = 200 / 2;
let step = 20;
let iter = 0;
let swap = 0;
const algo_div = document.querySelector('#visual-algo'),
        actionBtn = document.querySelector('#action'),
        resetBtn = document.querySelector('#reset'),
        newDataBtn = document.querySelector('#new-data'),
        output = document.querySelector('#output'),
        incrSpeedBtn = document.querySelector('#incr-speed'),
        decrSpeedBtn = document.querySelector('#decr-speed'),
        resetSpeedBtn = document.querySelector('#reset-speed'),
        customInput = document.querySelector('#custom-input'),
        inputData = document.querySelector('#input-data'),
        outputData = document.querySelector('#output-data'),
        iterCount = document.querySelector('#iter-count'),
        swapCount = document.querySelector('#swap-count'),
        algoStatus = document.querySelector('#status'),
        speedometer = document.querySelector('#speedometer');

const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

const resetOutput = () => {
    iter = 0;
    swap = 0;
    algoStatus.innerHTML = `Not Started`;
    iterCount.innerHTML = 0;
    swapCount.innerHTML = 0;
}

const autoTextColor = (r, g, b) => {
    r_inv = r * 0.299;
    g_inv = g * 0.587;
    b_inv = b * 0.114;
    if (r_inv + g_inv + b_inv > 145) {
        return '#000000';
    } else {
        return '#ffffff';
    }
}

if (speedometer) {
    if (interval < 0) {
        interval = 0;
        speedometer.innerHTML = 'Max';
    } else {
        speedometer.innerHTML = `${ parseFloat(1 / interval * 1000).toFixed(2) }`;
    }
}

if (incrSpeedBtn) {
    incrSpeedBtn.addEventListener('click', () => {
        interval -= step;
        if (interval <= 0) {
            interval = 0;
            speedometer.innerHTML = 'Max';
        } else {
            speedometer.innerHTML = `${ parseFloat(1 / interval * 1000).toFixed(2) }`;
        }
    });
}

if (decrSpeedBtn) {
    decrSpeedBtn.addEventListener('click', () => {
        interval += step;
        if (interval > 3000) {
            interval = 3000;
            speedometer.innerHTML = 'Min';
        } else {
            speedometer.innerHTML = `${ parseFloat(1 / interval * 1000).toFixed(2) }`;
        }
    });
}

if (resetSpeedBtn) {
    resetSpeedBtn.addEventListener('click', () => {
        interval = 1000 / 2;
        speedometer.innerHTML = `${ parseFloat(1 / interval * 1000).toFixed(2) }`;
    });
}
