export let
    btcOptions = {
        width : '100%',
        plugins: {
            legend: {
                position: "top",
                display: false,
            },

            title: {
                display: false,
                text: "Btcmarketchart",
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                },
            },
            y: {
                display: false,
                title: {
                    display: true,
                    text: "Value",
                },
            },
        },
    },
    btcData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                data: [85, 75, 96, 84, 85, 92, 79, 78, 74, 85, 86, 80],
                label: "Ethereum Price",
                backgroundColor: "rgba(98, 89, 202, 0.2)",
                borderColor: "#6259ca",
                borderWidth: "2",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                tension: 0.4,
                fill: true,
            },
        ],
    },
    ethOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },

            title: {
                display: false,
                text: "Ethmarketchart",
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                },
            },
            y: {
                display: false,
                title: {
                    display: true,
                    text: "Value",
                },
            },
        },
    },
    ethData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        type: "line",
        datasets: [
            {
                data: [34, 23, 54, 34, 56, 76, 34, 76, 34, 55, 23, 76],
                label: "Ethereum Price",
                backgroundColor: "rgba(98, 89, 202, 0.2)",
                borderColor: "#6259ca",
                borderWidth: "2",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                tension: 0.4,
                fill: true,
            },
        ],
    },
    xrpOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },

            title: {
                display: false,
                text: "Xrpmarketchart",
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                },
            },
            y: {
                display: false,
                title: {
                    display: true,
                    text: "Value",
                },
            },
        },
    },
    xrpData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        type: "line",
        datasets: [
            {
                data: [7, 5, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 7, 10],
                label: "Ethereum Price",
                backgroundColor: "rgba(98, 89, 202, 0.2)",
                borderColor: "#6259ca",
                borderWidth: "2",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                tension: 0.4,
                fill: true,
            },
        ],
    },
    ltcmOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },

            title: {
                display: false,
                text: "Xrpmarketchart",
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                },
            },
            y: {
                display: false,
                title: {
                    display: true,
                    text: "Value",
                },
            },
        },
    },
    ltcmData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        type: "line",
        datasets: [
            {
                data: [7, 5, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 7, 10],
                label: "Ethereum Price",
                backgroundColor: "rgba(98, 89, 202, 0.2)",
                borderColor: "#6259ca",
                borderWidth: "2",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                tension: 0.4,
                fill: true,
            },
        ],
    },
    cryptoMarketData = [
        {
            id: 1,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/btc.svg`,
            name: "Bitcoin",
            coinName: "BTC",
            lastPrice: 10153,
            marketPrice: "51,191,183,730",
            changes: "+3.49",
            change: "success",
        },
        {
            id: 2,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/eth.svg`,
            name: "Ethereum",
            coinName: "ETH",
            lastPrice: 425.25,
            marketPrice: "4,48,308,110",
            changes: "+0.53",
            change: "success",
        },
        {
            id: 3,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
            name: "Ripple",
            coinName: "XRP",
            lastPrice: 1.2029,
            marketPrice: "7,63,80,043",
            changes: "+0.26",
            change: "success",
        },
        {
            id: 4,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/ltc.svg`,
            name: "litecoin",
            coinName: "LTC",
            lastPrice: 1547.67,
            marketPrice: "6,14,18,730",
            changes: -0.63,
            change: "danger",
        },
        {
            id: 5,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/neo.svg`,
            name: "Neo",
            coinName: "NEO",
            lastPrice: 723.48,
            marketPrice: "19,07,67,295",
            changes: -2.18,
            change: "danger",
        },
        {
            id: 6,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xmr.svg`,
            name: "Monero",
            coinName: "XMR",
            lastPrice: 305.16,
            marketPrice: "4,778,157,533",
            changes: "+3.12",
            change: "success",
        },
        {
            id: 7,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/eos.svg`,
            name: "EOS",
            coinName: "EOS",
            lastPrice: 149.18,
            marketPrice: "8,44,49,000",
            changes: -1.42,
            change: "danger",
        },
        {
            id: 8,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/steem.svg`,
            name: "Steem",
            coinName: "Steem",
            lastPrice: 0.467813,
            marketPrice: "8,358,735,080",
            changes: "+3.49",
            change: "success",
        },
        {
            id: 9,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/miota.svg`,
            name: "Iota",
            coinName: "IOTA",
            lastPrice: 2.34,
            marketPrice: "6,504,100,862",
            changes: -1.05,
            change: "danger",
        },
        {
            id: 10,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/dash.svg`,
            name: "Dash",
            coinName: "DASH",
            lastPrice: 747.222,
            marketPrice: "5,881,413,815",
            changes: "+0.94",
            change: "success",
        },
        {
            id: 11,
            img: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/waves.svg`,
            name: "Waves",
            coinName: "NEM",
            lastPrice: 181.39,
            marketPrice: "3,084,108,676",
            changes: -3.23,
            change: "danger",
        },
    ];