var ip = sessionStorage.getItem('ip');
var modulesAVGs;
var testRatings;
var hardestTopics;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/reports/htests",
        success: function (grades) {
            testRatings = grades;
            const barChartOptions = {
                series: [
                    {
                        data: Object.values(testRatings)
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
                colors: ['#246dec', '#cc3c43', '#367952'],
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
                    show: true
                },
                xaxis: {
                    categories: Object.keys(testRatings)
                },
                yaxis: {
                    title: {
                        text: 'Averages'
                    }
                }
            };

            const barChart = new ApexCharts(
                    document.querySelector('#hardest-tests'),
                    barChartOptions
                    );
            barChart.render();

            $('#download2').click(function () {
                if (barChart) {
                    var canvas = document.getElementById("hardest-tests");
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
                            pdf.save("my Hardest tests.pdf");
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
        }
    });
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/reports/htopics",
        success: function (grades) {
            hardestTopics = grades;
            const barChartOptions = {
                series: [
                    {
                        data: Object.values(hardestTopics)
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
                colors: ['#246dec', '#cc3c43', '#367952'],
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
                    show: true
                },
                xaxis: {
                    categories: Object.keys(hardestTopics)
                },
                yaxis: {
                    title: {
                        text: 'Averages'
                    }
                }
            };

            const barChart = new ApexCharts(
                    document.querySelector('#hardest-topics'),
                    barChartOptions
                    );
            barChart.render();

            $('#download3').click(function () {
                if (barChart) {
                    var canvas = document.getElementById("hardest-topics");
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
                            pdf.save("Hardest Topics.pdf");
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
                            pdf.save("Hardest Topics.pdf");
                    }
                    });
                }
            });
        }
    });
});

const areaChartOptions = {
    series: [
        {
            name: 'Purchase Orders',
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders'
            }
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders'
            }
        }
    ],
    tooltip: {
        shared: true,
        intersect: false
    }
};

const areaChart = new ApexCharts(
        document.querySelector('#area-chart'),
        areaChartOptions
        );
areaChart.render();