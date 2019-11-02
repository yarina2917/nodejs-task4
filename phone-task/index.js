function createPhone() {
    const container = document.querySelector('.phone-container');
    const result = document.querySelector('.result');

    let ifNumberMode = false;
    let currentId = null;
    let currentIndex = 0;

    let mainTimeout;
    let valuesTimeout;

    container.addEventListener('click', clickHandler);
    document.querySelector('.reset').addEventListener('click', resetHandler);
    document.querySelector('.delete-value').addEventListener('click', deleteValueHandler);
    document.querySelector('.change-mode').addEventListener('click', () => ifNumberMode = !ifNumberMode);
    setValues(container);

    function clickHandler(event) {
        if (event.target.id !== '') {
            clearTimeout(valuesTimeout);
            clearTimeout(mainTimeout);

            if (!ifNumberMode) {
                let valuesArr = event.target.innerHTML.split(' ');
                if (valuesArr.length > 1) {
                    if (currentId !== +event.target.id) {
                        currentId = +event.target.id;
                        currentIndex = 1;
                    } else {
                        currentIndex = currentIndex + 1 > valuesArr.length - 1 ? 1 : currentIndex + 1;
                    }
                    valuesTimeout = setTimeout(() => {
                        result.innerHTML += valuesArr[currentIndex] === '_' ? ' ' : valuesArr[currentIndex]
                    }, 300);
                }
            } else {
                valuesTimeout = setTimeout(() => result.innerHTML += event.target.id, 300);
            }

            mainTimeout = setTimeout(() => currentId = null, 450)
        }
    }

    function resetHandler() {
        currentId = null;
        result.innerHTML = '';
        clearTimeout(valuesTimeout);
        clearTimeout(mainTimeout);
    }

    function deleteValueHandler() {
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
    }

}

function setValues(container) {
    let values = [
        [1], [2, 'a', 'b', 'c'], [3, 'd', 'e', 'f'], [4, 'g', 'h', 'i'],
        [5, 'j', 'k', 'l'], [6, 'm', 'n', 'o'], [7, 'p', 'q', 'r', 's'],
        [8, 't', 'u', 'v'],  [9, 'w', 'x', 'y', 'z'], [0, '+', '_']
    ];

    values.forEach(el => {
        let element = document.createElement('button');
        element.innerHTML = el.join(' ');
        element.id = el[0].toString();
        container.appendChild(element)
    });
}

createPhone();
