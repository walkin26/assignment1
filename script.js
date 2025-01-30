function start() {

    // Bar Chart

    const ctx = document.getElementById('BarChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenues', 'Expenses'],
            datasets: [{
                label: 'In millions',
                data: [444, 421],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart

    const pieCtx = document.getElementById('PieChart');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['English', 'French', 'Other', 'Prefer not to say'],
            datasets: [{
                label: '# of responses',
                data: [44, 2, 51, 3],
                borderWidth: 1
            }]
        }
    });


    // Line Chart

    const lineCtx = document.getElementById('LineChart');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['2008', '2009', '2010', '2011'],
            datasets: [{
                label: 'George Brown College',
                data: [12748, 13866, 13914, 14068],
                borderWidth: 1
            }]
        }
    });

}

$(window).on('load', start);