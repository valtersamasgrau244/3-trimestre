const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Redes Sociais', 'Jogos Eletrônicos', 'Esportes'],
        datasets: [{
            label: 'Quantidade de Participantes',
            data: [50, 30, 20],
            backgroundColor: [
                'rgba(255, 165, 0, 0.2)',  /* Laranja suave */
                'rgba(255, 99, 71, 0.2)',  /* Vermelho claro */
                'rgba(60, 179, 113, 0.2)'  /* Verde médio */
            ],
            borderColor: [
                'rgba(255, 165, 0, 1)',  /* Laranja */
                'rgba(255, 99, 71, 1)',  /* Vermelho */
                'rgba(60, 179, 113, 1)'  /* Verde */
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        }
    }
});
