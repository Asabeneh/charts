const charts = {
  data: [100, 150, 250, 300, 380, 400, 430, 460, 500],
  chartWrapper: document.querySelector(".chart-wrapper"),
  addBarGraph:document.querySelector("#add-bar-graph"),
  addHistograph: document.querySelector("#add-histograph"),
  addPieChart: document.querySelector("#add-pie-chart"),
  addLineGraph: document.querySelector("#add-line-graph"),
  addCircleGraph: document.querySelector("#add-circle-graph"),
  createBarGraph(){
    let div;
    this.data.forEach(number => {
      div = document.createElement("div");
      div.textContent = number;
      div.classList.add("bar", "bar-graph");
      Object.assign(div.style, {
        width: (number / 500) * 100 + "%",
        backgroundColor: `rgba(0,10,30,${number / 500})`
      })
      this.chartWrapper.appendChild(div);
    });
  },
  createHistograph(){
  let div;
  this.data.forEach(number => {
    div = document.createElement("div");
    div.textContent = number;
    div.classList.add("bar", "histograph");
    Object.assign(div.style, {
      height: number + "px",
      top: 500 - number + "px",
      backgroundColor: `rgba(0,10,30,${number / 500})`
    })

    this.chartWrapper.appendChild(div);
  });
},
createCircleGraph(){
  let div;
  this.data.forEach(number => {
    div = document.createElement("div");
    div.textContent = number;
    Object.assign(div.style, {
      width: number / 4 + "px",
      height: number / 4 + "px",
      borderRadius: number / 2 + "px",
      textAlign: 'center',
      lineHeight: number / 4 + "px",
      display: "inline-block",
      marginLeft: '3px',
      fontSize: number / 20 + "px",
      backgroundColor: `rgba(0,10,30,${number / 500})`

    })
    this.chartWrapper.appendChild(div);
  });
}

}

charts.createBarGraph();


charts.addBarGraph.addEventListener("click", () => {
  charts.chartWrapper.innerHTML = "";
  charts.addHistograph.classList.remove('active');
  charts.addCircleGraph.classList.remove('active');
  charts.addBarGraph.className = 'active';
  charts.createBarGraph();

});

charts.addHistograph.addEventListener("click", () => {
  charts.chartWrapper.innerHTML = "";
  if (window.innerWidth < 525) {
    charts.addHistograph.classList.remove('active');
    charts.addCircleGraph.classList.remove('active');
    charts.addBarGraph.className = 'active'
    charts.createBarGraph();

  }
  else {
    charts.addBarGraph.classList.remove('active');
    charts.addCircleGraph.classList.remove('active');
    charts.addHistograph.className = 'active'
    charts.createHistograph();
  }

});


charts.addCircleGraph.addEventListener("click", () => {
  charts.chartWrapper.innerHTML = "";
  charts.addHistograph.classList.remove('active')
  charts.addBarGraph.classList.remove('active');
  charts.addCircleGraph.className = 'active'
  charts.createCircleGraph();
});


window.addEventListener('resize', (e) => {
  charts.chartWrapper.innerHTML = "";
  if (e.currentTarget.innerWidth <= 525) {
    charts.addHistograph.classList.remove('active')
    charts.addBarGraph.className = 'active'
    charts.createBarGraph();

  }
  else {
    charts.addBarGraph.classList.remove('active');
    charts.addHistograph.className = 'active'
    charts.createHistograph();
  }
});