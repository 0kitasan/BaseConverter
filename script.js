function convertFromDecimal() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryInput = document.getElementById('binaryInput');
    const octalInput = document.getElementById('octalInput');
    const hexInput = document.getElementById('hexInput');

    resetInputStyles();

    if (decimalInput === '') {
        binaryInput.value = '';
        octalInput.value = '';
        hexInput.value = '';
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);

    if (isNaN(decimalNumber)) {
        setInvalidInputs(['decimalInput']);
        return;
    }

    binaryInput.value = formatBinary(decimalNumber.toString(2));
    octalInput.value = decimalNumber.toString(8);
    hexInput.value = decimalNumber.toString(16).toUpperCase();
}

function convertFromBinary() {
    const binaryInput = document.getElementById('binaryInput').value.replace(/\s+/g, '');
    const decimalInput = document.getElementById('decimalInput');
    const octalInput = document.getElementById('octalInput');
    const hexInput = document.getElementById('hexInput');

    resetInputStyles();

    if (binaryInput === '') {
        decimalInput.value = '';
        octalInput.value = '';
        hexInput.value = '';
        return;
    }

    if (!/^[01]+$/.test(binaryInput)) {
        setInvalidInputs(['binaryInput']);
        return;
    }

    const decimalNumber = parseInt(binaryInput, 2);

    decimalInput.value = decimalNumber;
    octalInput.value = decimalNumber.toString(8);
    hexInput.value = decimalNumber.toString(16).toUpperCase();
}

function convertFromOctal() {
    const octalInput = document.getElementById('octalInput').value;
    const decimalInput = document.getElementById('decimalInput');
    const binaryInput = document.getElementById('binaryInput');
    const hexInput = document.getElementById('hexInput');

    resetInputStyles();

    if (octalInput === '') {
        decimalInput.value = '';
        binaryInput.value = '';
        hexInput.value = '';
        return;
    }

    if (!/^[0-7]+$/.test(octalInput)) {
        setInvalidInputs(['octalInput']);
        return;
    }

    const decimalNumber = parseInt(octalInput, 8);

    decimalInput.value = decimalNumber;
    binaryInput.value = formatBinary(decimalNumber.toString(2));
    hexInput.value = decimalNumber.toString(16).toUpperCase();
}

function convertFromHex() {
    const hexInput = document.getElementById('hexInput').value;
    const decimalInput = document.getElementById('decimalInput');
    const binaryInput = document.getElementById('binaryInput');
    const octalInput = document.getElementById('octalInput');

    resetInputStyles();

    if (hexInput === '') {
        decimalInput.value = '';
        binaryInput.value = '';
        octalInput.value = '';
        return;
    }

    if (!/^[0-9A-Fa-f]+$/.test(hexInput)) {
        setInvalidInputs(['hexInput']);
        return;
    }

    const decimalNumber = parseInt(hexInput, 16);

    decimalInput.value = decimalNumber;
    binaryInput.value = formatBinary(decimalNumber.toString(2));
    octalInput.value = decimalNumber.toString(8);
}

function formatBinary(binaryString) {
    return binaryString.replace(/(.{4})/g, '$1 ').trim();
}

function clearAllInputs() {
    document.getElementById('decimalInput').value = '';
    document.getElementById('binaryInput').value = '';
    document.getElementById('octalInput').value = '';
    document.getElementById('hexInput').value = '';
    resetInputStyles();
}

function setInvalidInputs(excludeIds) {
    const inputs = [
        { id: 'decimalInput', element: document.getElementById('decimalInput') },
        { id: 'binaryInput', element: document.getElementById('binaryInput') },
        { id: 'octalInput', element: document.getElementById('octalInput') },
        { id: 'hexInput', element: document.getElementById('hexInput') }
    ];

    inputs.forEach(input => {
        if (!excludeIds.includes(input.id)) {
            input.element.value = '无效输入';
            input.element.classList.add('invalid-input');
        }
    });
}

function resetInputStyles() {
    const inputs = [
        document.getElementById('decimalInput'),
        document.getElementById('binaryInput'),
        document.getElementById('octalInput'),
        document.getElementById('hexInput')
    ];

    inputs.forEach(input => {
        input.classList.remove('invalid-input');
    });
}