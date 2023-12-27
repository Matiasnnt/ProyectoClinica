
    // Función para cargar los turnos de pacientes en la tabla
    function cargarTurnosPacientes(turnos) {
        const turnosPacientesBody = document.getElementById('turnosPacientesBody');
        turnosPacientesBody.innerHTML = '';

        //reucpera los turnos de localstorage
        let turnos = localStorage.getItem('datos')
        if (turnos) {
            //convierte los turnos en un array
            turnos = JSON.parse(turnos)

        }

        turnos.forEach(turno => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${turno.paciente}</td>
                <td>${turno.fecha}</td>
                <td>${turno.hora}</td>
            `;
            turnosPacientesBody.appendChild(fila);
        });
    }

    
