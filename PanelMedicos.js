// Mostrar el turno seleccionado
// Obtener el elemento de la tabla
let tabla = document.getElementById('turnosPacientesBody');

// Obtener los datos de localStorage
let datos = JSON.parse(localStorage.getItem('datos'));

// Verificar si hay datos
if (datos) {
    // Crear las filas de la tabla
    let fila = `<tr>
                    <td>${datos.medicos}</td>
                    <td>${datos.especialidad}</td>
                    <td>${datos.hora}</td>
                </tr>`;
    // Agrega la fila a la tabla
    tabla.innerHTML = fila;
} else {
    // Muestra un mensaje si no hay datos
    tabla.innerHTML = '<tr><td colspan="3">No hay datos disponibles.</td></tr>';
}