var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10vh";
    }
    if(currentScrollPos < 100){
        document.getElementById("navbar").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
}

let canvas = document.getElementById('chart');
let context = canvas.getContext('2d');
let grad = context.createLinearGradient(100, 200, 100, 0);
grad.addColorStop(0, 'rgba(255,255,255,1)');
grad.addColorStop(0.3, 'rgba(255,255,255,1)');
grad.addColorStop(1, 'rgba(249,226,185,1)');
new Chart(document.getElementById("chart"), {
    type: 'line',
    defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'shabnam'",
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [
            {
                data: [18, 20, 32, 9, 47, 10, 30],
                label: "تیکت ها",
                lineTension: 0,
                borderColor: "#F19C1C",
                backgroundColor: grad
            },
            {
                data: [],
                label: "دانشنامه",
                borderColor: "#e2e2e2"
            },
            {
                data: [],
                label: "خبر",
                borderColor: "#e2e2e2"
            }
        ]
    },
    options: {
        legend: {
            display: true,
            fullWidth: true,
            rtl: true,
            position: 'bottom',
            labels: {
                fontFamily: "shabnam",
                fontColor: "#03000F",
                padding: 15,
                usePointStyle: true
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    min: 0,
                    max: 50
                },
                scaleLabel: {
                    display: true,
                    labelString: 'تعداد'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'روز'
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});