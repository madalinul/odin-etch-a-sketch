const gridEl = document.querySelector('.grid');
const sliderEl = document.querySelector('.slider');
const sliderValueEl = document.querySelector('.slider-value');
const resetButtonEl = document.querySelector('.button');

const DEFAULT_SIZE = 30;

const setGridSize = (size) => {
    sliderValueEl.textContent = size;
    gridEl.innerHTML = '';

    gridEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter', onMouseEnter);
        gridEl.appendChild(div);
    }
};

const onMouseEnter = (event) => {
    const backgroundColor = event.target.style.backgroundColor;
    if (!backgroundColor) {
        event.target.style.backgroundColor = getRandomColor();
        return;
    }
    event.target.style.backgroundColor = getNewColor(backgroundColor);
};

const getNewColor = (backgroundColor) => {
    const numArray = backgroundColor.substring(4, backgroundColor.length - 1).split(',');
    const newColors = numArray.map((value) => {
        let numValue = parseInt(value);
        const diff = numValue / 10;
        numValue -= diff;
        return numValue;
    });
    return `rgb(${newColors.join(',')})`;
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * (255 + 1));
};

const getRandomColor = () => {
    return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
};

const onInputChange = (event) => {
    const { value } = event.target;
    setGridSize(parseInt(value));
};

const onClickReset = () => {
    setGridSize(DEFAULT_SIZE);
};

const initGrid = () => {
    setGridSize(DEFAULT_SIZE);
    sliderEl.addEventListener('input', onInputChange);
    resetButtonEl.addEventListener('click', onClickReset);
};

initGrid();
