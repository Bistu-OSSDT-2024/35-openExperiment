   let display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculate() {
        try {
            let result = eval(display.value);
            if (isFinite(result)) {
                display.value = result;
            } else {
                display.value = 'Error';
            }
        } catch (e) {
            display.value = 'Error';
        }
    }
