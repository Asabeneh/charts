const data = [100,150,250,300,380,400,430,460,500];
const chartWrapper = document.querySelector('.chart-wrapper');

const addBarGraph = document.querySelector('#add-bar-graph');
const addHistoGraph = document.querySelector('#add-histograph');
const addPieChart = document.querySelector('#add-pie-chart');
const addLineGraph = document.querySelector('#add-line-graph');
const addCircleGraph = document.querySelector('#add-circle-graph');

const createBarGraph = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.classList.add('bar','bar-graph');
    div.style.width = (number/500)*100 +'%';
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)
});
};

const createHistograph = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.classList.add('bar','histograph');
    div.style.height= number +'px';
    div.style.top = 500 - number + 'px';
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)
})
    
};
const createCircleGraph = () => {
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

const createLineGraph = () => {
    let div;
    data.forEach((number) => {
    div = document.createElement('div');
    div.textContent = number;
    div.style.height='20px';
    div.style.width= '20px';
    div.style.display = "inline-block";
    div.style.marginLeft = "10px"
    div.style.position ="relative";
    div.style.textAlign = "center";
    div.style.borderRadius ="10px"
    div.style.top = 500 - number + 'px';
    div.style.backgroundColor = `rgba(0,10,50,${number/500})`;
    chartWrapper.appendChild(div)
})
    
}


addBarGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createBarGraph();
});

addHistoGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createHistograph();
});

const createPieChart = () => {
    return ;;
};

addPieChart.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createPieChart();
});
addCircleGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createCircleGraph()
})
addLineGraph.addEventListener('click', () => {
    chartWrapper.innerHTML = '';
    createLineGraph();
})

createBarGraph();
