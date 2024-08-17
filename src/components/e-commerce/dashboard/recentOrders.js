export let
    recentOrdersSeries = [83],
    recentOrdersOptions = {
        chart: {
            height: 190,
            innerWidth: 100,
            type: "radialBar",
            offsetY: -10,
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: "16px",
                        color: undefined,
                        offsetY: 30,
                    },
                    hollow: {
                        size: "60%",
                    },
                    value: {
                        offsetY: -10,
                        fontSize: "22px",
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#6259ca"],
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            dashArray: 4,
        },
        labels: [""],
        colors: ["#6259ca"],
    }, revenuechartSeries = [{
        name: "Order",
        data: [20, 60, 38, 72, 45, 63, 43, 76]
    }, {
        name: "Sale",
        data: [15, 45, 75, 38, 85, 35, 62, 40]
    }],
    revenuechartOptions = {
        chart: {
            height: 265,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [0, 5],
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgb(98, 89, 202)", "rgba(98, 89, 202, 0.3)"],
        yaxis: {
            title: {
                // text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    };