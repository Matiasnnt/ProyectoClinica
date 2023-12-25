
    // Simulación de turnos de pacientes
    let turnosPacientes = [
        { medico: 'Dr. Médico 1', paciente: 'Paciente 1', fecha: '2023-12-15', hora: '10:00' },
        { medico: 'Dr. Médico 2', paciente: 'Paciente 2', fecha: '2023-12-16', hora: '14:30' },
        // Otros turnos simulados
    ];

    // Función para cargar los turnos de pacientes en la tabla
    function cargarTurnosPacientes(turnos) {
        const turnosPacientesBody = document.getElementById('turnosPacientesBody');
        turnosPacientesBody.innerHTML = '';

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

    // Función para buscar turnos por el nombre del médico
    function buscarTurnosMedico() {
        const nombreMedico = document.getElementById('nombreMedico').value;
        const turnosFiltrados = turnosPacientes.filter(turno => turno.medico.includes(nombreMedico));
        cargarTurnosPacientes(turnosFiltrados);
        if (turnosFiltrados.length > 0) {
            cargarTurnosPacientes(turnosFiltrados);
        } else {
            alert('No se encontraron turnos para el médico ingresado.');
        }
    }

    

    // Llamada a la función para cargar los turnos de pacientes al cargar la página
    cargarTurnosPacientes(turnosPacientes);

