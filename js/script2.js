document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://prueba-c3c0f-default-rtdb.firebaseio.com/collection.json')
        .then(response => response.json())
        .then(data => {
            const sexos = {
                hombre: 0,
                mujer: 0,
                'lgbtq+': 0
            };

            for (let key in data) {
                if (data[key].sexo in sexos) {
                    sexos[data[key].sexo]++;
                }
            }

            const tableBody = document.getElementById('sexo-table-body');
            for (let sexo in sexos) {
                const row = document.createElement('tr');
                const sexoCell = document.createElement('td');
                const countCell = document.createElement('td');

                sexoCell.textContent = sexo;
                countCell.textContent = sexos[sexo];

                row.appendChild(sexoCell);
                row.appendChild(countCell);
                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error:', error));
});
