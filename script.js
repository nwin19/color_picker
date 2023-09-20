const colors = ['pink', 'aqua', 'blue', 'gray', 'yellow', 'dark', 'orange', 'red', 'green'];

const color = document.getElementById('color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const ranIndex = getRandomNumber();

    // background.style.color = colors.bgColor;
    document.body.style.backgroundColor = colors[ranIndex];
    color.textContent = colors[ranIndex];
    
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}