const timer = ms => new Promise(resolve => setTimeout(resolve, ms));
const interval = 2000;


const bubbleSort = async (array) => {
    for (let [index, value] of array.entries()) {
        // console.log(`${index}: ${value}`);
        await timer(interval);
        for (let j = 0; j < array.length - index - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                console.log(`${index}: ${value}`);
                await timer(interval);
            }
        }
    }
}