function essaPalavraEUmPalindromo() {
    let palavra = prompt('Digite uma palavra:');
    
    let separarLetras = palavra.split('');
    let palavraInvertida = separarLetras.reverse().join('');

    if (palavra === palavraInvertida) {
        alert(`${palavra} é um palíndromo!`);
    } else {
        alert(`${palavra} não é um palíndromo!`);
    }
}

essaPalavraEUmPalindromo();
