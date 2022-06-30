let len = 30;
let abort = false;
let tempArray = [];
let sampleArray = [];

const generateSampleArray = () => {
    tempArray = [];
    while (tempArray.length < len) {
        randNum = Math.floor(Math.random() * 300);
        if (!tempArray.includes(randNum)) {
            tempArray.push(randNum);
        }
    }
}

generateSampleArray();

if (tempArray) {
    sampleArray = structuredClone(tempArray);
}

const getRatio = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return [min, max];
}

const remapRatio = (old_value, old_min, old_max, new_min, new_max) => {
    new_value = ((old_value - old_min) / (old_max - old_min)) * (new_max - new_min) + new_min;
    return new_value;
}

const swapDivs = (element_1, element_2) => {
    let temp = element_1.cloneNode(true);
    element_1.innerHTML = element_2.innerHTML;
    element_2.innerHTML = temp.innerHTML;
}

const createShape = (array) => {
    array = array.slice(0, 31);
    algo_div.innerHTML = '';
    inputData.innerHTML = array.join(', ');
    const [min, max] = getRatio(array);
    for (let [index, value] of array.entries()) {
        let div = document.createElement('div');
        let divInner = document.createElement('div');
        let divArrow = document.createElement('div');
        div.classList.add('shape');
        div.id = `shape-parent-${index}`;
        div.dataset.index = index;
        divInner.classList.add('shape-inner');
        divInner.innerHTML = `<small>${value}</small>`;
        divInner.id = `shape-${index}`
        divArrow.classList.add('shape-arrow');
        divArrow.id = `shape-arrow-${index}`;
        divArrow.innerHTML = '&#8679;';
        temp = remapRatio(value, min, max, 2, 45);
        divInner.style.height = `${temp}vh`;
        r = (temp * 33) % 255;
        g = (temp * 55) % 255;
        b = (temp * 77) % 255;
        divInner.style.color = autoTextColor(r, g, b);
        divInner.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        div.appendChild(divInner);
        div.appendChild(divArrow);
        algo_div.appendChild(div);
    }
}

const updateSampleArray = (array) => {
    algo_div.innerHTML = '';
    createShape(array);
}

const bubbleSort = async (array) => {
    resetOutput();
    for (let [index, value] of array.entries()) {
        algoStatus.innerHTML = `Sorting`;
        for (let j = 0; j < array.length - index - 1; j++) {
            if (abort) {
                return;
            }
            iter += 1;
            iterCount.innerHTML = iter;
            let div = document.querySelector(`#shape-parent-${j}`);
            let divNext = document.querySelector(`#shape-parent-${j + 1}`);
            let divArrow = div.querySelector(`.shape-arrow`);
            let divNextArrow = divNext.querySelector(`.shape-arrow`);
            div.style.visibility = 'hidden';
            divNext.style.visibility = 'hidden';
            divArrow.style.visibility = 'visible';
            divNextArrow.style.visibility = 'visible';
            divArrow.style.color = 'red';
            divNextArrow.style.color = 'green';
            await timer(interval);
            if (array[j] > array[j + 1]) {
                swap += 1;
                swapCount.innerHTML = swap;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapDivs(div, divNext);

            }
            outputData.innerHTML = array.join(', ');
            div.style.visibility = 'visible';
            divNext.style.visibility = 'visible';
            let arrowDiv = document.querySelectorAll(`.shape-arrow`);
            arrowDiv.forEach(div => {
                div.style.visibility = 'hidden';
            })
        }
        await timer(interval);
        if (index === array.length - 1) {
            algoStatus.innerHTML = `Complete`;
        }
    }
}

if (actionBtn) {
    actionBtn.addEventListener('click', () => {
        abort = false;
        bubbleSort(sampleArray);
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        abort = true;
        resetOutput();
        sampleArray = structuredClone(tempArray);
        updateSampleArray(sampleArray);
    })
}

if (newDataBtn) {
    newDataBtn.addEventListener('click', () => {
        abort = true;
        resetOutput();
        generateSampleArray();
        sampleArray = structuredClone(tempArray);
        updateSampleArray(sampleArray);
    })
}

createShape(sampleArray);

if (customInput) {
    customInput.addEventListener('input', () => {
        data = customInput.value;
        resetOutput();
        if (data.length) {
            array = data.split(',').map(Number);
            sampleArray = array.slice(0, 31);
            createShape(sampleArray);
        } else {
            sampleArray = structuredClone(tempArray);
            createShape(sampleArray);
        }
    })
}
