export let
    chartOptions = {
        chart: {
            type: "area",
            height: 130,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },
        grid: {
            padding: {
                bottom: 10,
            },
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(98, 89, 202,0.7)"],
    },
    btcData = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    ethData = [
        {
            name: "Value",
            data: [48, 35, 80, 62, 45, 53, 43, 65, 35, 56, 38, 54],
        },
    ],
    dashData = [
        {
            name: "Value",
            data: [20, 50, 15, 35, 65, 43, 53, 45, 62, 22, 22, 55],
        },
    ],
    ltcData = [
        {
            name: "Value",
            data: [80, 38, 56, 22, 45, 43, 62, 45, 62, 35, 35, 25],
        },
    ],
    xrsData = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    glmData = [
        {
            name: "Value",
            data: [10, 56, 35, 35, 65, 32, 53, 45, 48, 35, 56, 20],
        },
    ];