const data = [100,150,250,300,380,400,430,460,500];
const chartWrapper = document.querySelector('.chart-wrapper');

const addChart = document.querySelector('#add-chart');
const addGraph = document.querySelector('#add-graph');
const addPie = document.querySelector('#add-pie');
const addLineGraph = document.querySelector('#add-line');

const createBarChart = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.style.width = (number/500)*100 +'%';
    div.style.textAlign = "right";
    div.style.paddingRight = "10px"
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)
});
};

const createHistograph = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.style.minWidth = "5%"
    div.style.height= number +'px';
    div.style.display = "inline-block";
    div.style.marginLeft = "3px"
    div.style.position ="relative";
    div.style.textAlign = "center";
    div.style.top = 500 - number + 'px';
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)
})
    
};

    const createLineGraph = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.style.width = number/4 + "px";
    div.style.height= number/4 + 'px';
    div.style.borderRadius = number / 2 + "px";
    div.style.textAlign = 'center';
    div.style.lineHeight = number/4 + 'px';
    div.style.display = "inline-block";
    div.style.marginLeft = "3px";
    div.style.fontSize = number/20 + "px";
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)

});
}



addChart.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createBarChart();
});

   addGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createHistograph();
});

const createPieChart = () => {
    return ;;
};

addPie.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createPieChart();
});
addLineGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createLineGraph()
})

createBarChart();
