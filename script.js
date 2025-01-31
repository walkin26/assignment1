$(document).ready(function() {
    // Line Chart
    var ctx = document.getElementById('LineChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Passing Yards',
                borderColor: '#e73f11',
                data: [2688, 4611, 4475, 2309, 4918]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)' 
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }
        }
    });

    // Bar Chart
    var barCtx = document.getElementById('BarChart').getContext('2d');
    var myBarChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Touchdowns',
                data: [13, 34, 35, 15, 43],
                backgroundColor: '#e73f11',
                borderWidth: 1
            }, {
                label: 'Interceptions',
                data: [5, 14, 12, 6, 9],
                backgroundColor: '#d9d9d9',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)' 
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)' 
                    }
                }
            }
        }
    });

    // Pie Chart
    var pieCtx = document.getElementById('PieChart').getContext('2d');
    var myPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Completion Rate', 'Incompletion Rate'],
            datasets: [{
                label: 'Completion Rate vs. Incompletion Rate',
                data: [68.6, 31.4],
                backgroundColor: [
                    '#e73f11',
                    '#d9d9d9'
                ],
                borderWidth: 0
            }]
        }
    });
});
