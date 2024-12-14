function calculate(operation) {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    let result;

    if (isNaN(value1) || isNaN(value2)) {
        result = 'Prosím zadejte platná čísla.';
    } else {
        switch (operation) {
            case '+':
                result = value1 + value2;
                break;
            case '-':
                result = value1 - value2;
                break;
            case '*':
                result = value1 * value2;
                break;
            case '/':
                if (value2 === 0) {
                    result = 'Dělení nulou není povoleno.';
                } else {
                    result = value1 / value2;
                }
                break;
            default:
                result = 'Neplatná operace.';
        }
    }

    document.getElementById('result').innerText = result;
}