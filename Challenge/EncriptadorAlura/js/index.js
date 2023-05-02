// Encrypt Function
function encrypt(encrypt = true) {
    const input = document.getElementById('input-text');
    const output = document.getElementById('output-text');

    const transformations = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    if (input.value === '') {
        alert('Ingrese un texto');
        return;
    }
    
    if (!validateString(input.value)) {
        input.value = '';
        return;
    }

    let text = input.value;
    document.getElementById("nothing").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    if (encrypt) {
        for (const [key, value] of Object.entries(transformations)) {
        text = text.replaceAll(key, value);
        }
        alert('Encriptado!');
    } else {
        for (const [key, value] of Object.entries(transformations)) {
        text = text.replaceAll(value, key);
        }
        alert('Desencriptado!');
    }
    output.value = text;
}


function copyToClipboard() {
    const inp = document.getElementById('input-text');
    const out = document.getElementById('output-text');
    out.select();
    document.execCommand('copy');
    alert('Copiado!');
    document.getElementById("nothing").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    inp.value = '';
    out.value = '';
}

function validateString(texto) {
    const regex = /^[a-zñ ]+$/;
    if (!regex.test(texto)) {
        alert('El texto debe tener solo letras minúsculas sin acentos');
        return false;
    }
    return true;
}
