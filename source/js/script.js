var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Нұр-Сұлтан қаласы', 'Алматы қаласы', 'Шымкент қаласы', 'Ақмола облысы', 'Ақтөбе облысы', 'Алматы облысы'],
        datasets: [{
            label: 'Инфекциялар саны',
            data: [239830, 238334, 49090, 68924, 43909, 69554],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Елдер бойынша инфекциялар саны',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});