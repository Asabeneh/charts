const data = [100, 150, 250, 300, 380, 400, 430, 450, 460, 500]
const chartWrapper = document.querySelector('.chart-wrapper')
const addBarGraph = document.querySelector('#add-bar-graph')
const addHistograph = document.querySelector('#add-histograph')
const addCircleGraph = document.querySelector('#add-circle-graph')

const createBarGraph = data => {
  let div
  data.forEach(number => {
    div = document.createElement('div')
    div.textContent = number
    div.classList.add('bar', 'bar-graph')
    Object.assign(div.style, {
      width: (number / 500) * 100 + '%',
      backgroundColor: `rgba(255, 165, 0,${number / 500})`
    })
    chartWrapper.appendChild(div)
  })
}
createBarGraph(data)

const createHistograph = data => {
  let div
  data.forEach(number => {
    div = document.createElement('div')
    div.textContent = number
    div.classList.add('bar', 'histograph')
    //rgb(255, 165, 0)
    Object.assign(div.style, {
      height: number + 'px',
      top: 500 - number + 'px',
      backgroundColor: `rgba(255, 165, 0,${number / 500})`
    })

    chartWrapper.appendChild(div)
  })
}
const createCircleGraph = data => {
  let div
  data.forEach(number => {
    div = document.createElement('div')
    div.textContent = number
    Object.assign(div.style, {
      width: number / 2.5 + 'px',
      height: number / 2.5 + 'px',
      borderRadius: number / 2.5 + 'px',
      textAlign: 'center',
      lineHeight: number / 2.5 + 'px',
      fontFamily: 'Lato',
      fontWeight: 300,
      display: 'inline-block',
      marginLeft: '3px',
      fontSize: number / 20 + 'px',
      backgroundColor: `rgba(255, 165, 0,${number / 500})`
    })
    chartWrapper.appendChild(div)
  })
}

addBarGraph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  addHistograph.classList.remove('active')
  addCircleGraph.classList.remove('active')
  addBarGraph.className = 'active'
  createBarGraph(data)
})

addHistograph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  if (window.innerWidth < 525) {
    addHistograph.classList.remove('active')
    addCircleGraph.classList.remove('active')
    addBarGraph.className = 'active'
    createBarGraph(data)
  } else {
    addBarGraph.classList.remove('active')
    addCircleGraph.classList.remove('active')
    addHistograph.className = 'active'
    createHistograph(data)
  }
})

addCircleGraph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  addHistograph.classList.remove('active')
  addBarGraph.classList.remove('active')
  addCircleGraph.className = 'active'
  createCircleGraph(data)
})

window.addEventListener('resize', e => {
  chartWrapper.innerHTML = ''
  if (e.currentTarget.innerWidth <= 525) {
    addHistograph.classList.remove('active')
    addBarGraph.className = 'active'
    createBarGraph(data)
  } else {
    addBarGraph.classList.remove('active')
    addHistograph.className = 'active'
    createHistograph(data)
  }
})
