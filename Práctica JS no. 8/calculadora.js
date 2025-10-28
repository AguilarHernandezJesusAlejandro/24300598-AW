const NUM_MATERIAS_FIJO = 3;

function calcularPromedios() {
    let html = '<div class="card shadow p-4"><h5 class="card-title">Resultados</h5>';
    html += '<table class="table table-striped mt-3"><thead class="table-dark">';
    html += '<tr><th>Materia</th><th>Promedio final</th><th>Estado</th></tr></thead><tbody>';

    for (let i = 1; i <= NUM_MATERIAS_FIJO; i++) {
        const nombre = (document.getElementById(`materia-${i}-nombre`).value || `Materia ${i}`).trim();
        let suma = 0;
        let okMinimo = true; // asumo todo bien hasta ver una nota < 70

        for (let j = 1; j <= 4; j++) {
            const v = parseFloat(document.getElementById(`materia-${i}-unidad-${j}`).value);
            if (isNaN(v) || v < 0 || v > 100) {
                alert(`Revisa la unidad ${j} de "${nombre}" (0 a 100).`);
                return;
            }
            suma += v;
            if (v < 70) okMinimo = false;
        }

        const promedioReal = suma / 4;
        let promedioFinal = promedioReal;
        let estado = 'Aprobado';
        let clase = '';

        if (!okMinimo) {
            promedioFinal = 60; // si alguna < 70
            estado = 'No aprobado';
            clase = 'table-danger';
        } else if (promedioFinal < 70) {
            estado = 'No aprobado';
            clase = 'table-warning';
        } else {
            clase = 'table-success';
        }

        html += `<tr class="${clase}"><td>${nombre}</td><td>${promedioFinal.toFixed(2)}</td><td>${estado}</td></tr>`;
    }

    html += '</tbody></table></div>';
    document.getElementById('resultados').innerHTML = html;
}