const btn = document.getElementById('btn')
const salida = document.getElementById('salida')
let estado = true

document.getElementById('btn').textContent = 'Ocultar'

btn.addEventListener('click', () => {
    if (estado) {
        salida.style.display = 'none'
        btn.textContent = 'Mostrar'
    } else {
        salida.style.display = 'block'
        btn.textContent = 'Ocultar'
    }
    estado = !estado
})
