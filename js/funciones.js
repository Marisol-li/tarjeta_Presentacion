function mostrarFormulario() {
    document.getElementById('overlay').style.display = 'flex';
}

function guardarTexto(event) {
    event.preventDefault();
    const texto = document.getElementById('text').value;
    document.getElementById('contenido').innerText = texto;
    document.getElementById('overlay').style.display = 'none';
}
