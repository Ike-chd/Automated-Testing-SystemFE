const barChartOptions = {
    series: [
        {
            data: [5, 5, 5, 5, 5]
        }
    ],
    chart: {
        type: 'bar',
        height: 550,
        width: 990,
        toolbar: {
            show: false
        }
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%'
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ['Zulu', 'English', 'Math', 'Geo', 'History']
    },
    yaxis: {
        title: {
            text: 'Count'
        }
    }
};

const barChart = new ApexCharts(
        document.querySelector('#bar-chart'),
        barChartOptions
        );
barChart.render();

$('#download').click(function () {
    if (barChart) {
        var canvas = document.getElementById("bar-chart");
        var width = 990;
        var height = 550;
        barChart.dataURI().then(({ imgURI, blob }) => {
            if (width > height) {
                console.log("landscape"); // testing only...
                let pdf = new jsPDF('l', 'px', [width, height]);
                pdf.backgroundColor = 'white';
                //then we get the dimensions from the 'pdf' file itself
                width = pdf.internal.pageSize.getWidth();
                height = pdf.internal.pageSize.getHeight();
                widthWithPadding = width - 20;
                heightWithPadding = height - 20;
                pdf.addImage(imgURI, 'PNG', 10, 10, widthWithPadding, heightWithPadding);
                pdf.save("chart.pdf");
            } else {
                console.log("portrait"); // testing only...
                let pdf = new jsPDF('p', 'px', [height, width]);
                pdf.backgroundColor = '#BFBFBF';
                //then we get the dimensions from the 'pdf' file itself
                width = pdf.internal.pageSize.getWidth();
                height = pdf.internal.pageSize.getHeight();
                widthWithPadding = width - 20;
                heightWithPadding = height - 20;
                pdf.addImage(imgURI, 'PNG', 10, 10, widthWithPadding, heightWithPadding);
                pdf.save("chart.pdf");
        }
        });
    }
});