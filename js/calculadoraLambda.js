

const sumarCompleto = () => {
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value);
    console.log('Funcion sumar ' + n1);
    console.log('Funcion sumar ' + n2);
    var resultado = n1 + n2;
    console.log(resultado);
    document.getElementById('idResSumar').innerHTML = resultado;
};

const restar = () => {
    var n1 = parseInt(document.getElementById('idNumero1').value)
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Funcion sumar' + n1);
    console.log("Funcion sumar" + n2);
    var resultado = n1 - n2;
    console.log(resultado);
    document.getElementById('idResRestar').innerText = resultado
}

const multiplicar = () => {
    var n1 = parseInt(document.getElementById('idNumero1').value)
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Funcion sumar' + n1);
    console.log("Funcion sumar" + n2);
    var resultado = n1 * n2;
    console.log(resultado);
    document.getElementById('idResMultiplicar').innerText = resultado
}

const dividir = () => {
    var n1 = parseInt(document.getElementById('idNumero1').value)
    var n2 = parseInt(document.getElementById('idNumero2').value)
    var resultado = n1 / n2;
    console.log(resultado);
    document.getElementById('idResDividir').innerText = resultado
}

const cambiarImagen = () => {
    document.getElementById('img1').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png';
}

const conceptosJS = () => {
    let var1 = 10;
    let var1texto = 'Texto1';
    console.log(var1);
    console.log(var1texto);

    // var ya no se usa mucho
    var var2 = 10;
    var var2texto = 'Texto2';
    console.log(var2);
    console.log(var2texto);


    const c1 = 10;
    const const1texto = 'Texto3';

    console.log(c1);
    console.log(const1texto);

    // Arreglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    console.log(diasSemana);
}