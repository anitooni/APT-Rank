function drawChart(aptValue, livingScore, transportScore, infraScore, eduScore){
    var label = ["총점", "주거", "교통", "인프라", "교육"]
    var data = [aptValue, livingScore, transportScore, infraScore, eduScore]      
    var color = 'white'
    var align = 'start'

    if(isNaN(transportScore)){
      label = ["총점", "주거", "인프라", "교육"]
      data = [aptValue, livingScore, infraScore, eduScore]        
    }
    if(eduScore == "region"){
      label = ["총점", "공급필요", "인구수", "일자리수"]
      data = [aptValue, livingScore, transportScore, infraScore]        
    }
    if(aptValue < 85 && livingScore < 85 && transportScore < 85 && infraScore < 85){
      color = 'black'
      align = 'end'
    }

    var ctx = document.getElementById("valueChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      plugins:[ChartDataLabels],
      data: {          
        labels: label,
        datasets: [{                
          data: data,
          backgroundColor: [
              '#ff3d38',
              '#f97f95',
              '#f97f95',
              '#f97f95',
              '#f97f95',
          ],
          borderColor: [
              'rgba(255,99,132, 0)',
              'rgba(54, 162, 235, 0)',
          ],                
          barThickness: 17,            
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,          
        plugins:{
          legend:{
            display: false
          },            
          datalabels: {
            display: true,
            color: color,
            align: align,
            anchor: 'end',              
            offset: 6,
            textAlign: 'center',
            font: {
              weight: 'bold'
            },              
          },                      
        },
        animation: {            
          x:{
            from: 100
          }
        },
        scales: {
          x:{
            type: 'linear',
            min: 0,
            max: 100,
          },
          myScale: {              
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }          
      }
  });
}

function drawSubChart(score, avgScore, label1, label2, color1, color2, className){
    var ctx = document.getElementById(className).getContext('2d');
    var color = 'white'
    var align = 'start'

    if(score < 85 && avgScore < 85){
      color = 'black'
      align = 'end'      
    }

    var myChart = new Chart(ctx, {
      type: 'bar',
      plugins:[ChartDataLabels],
      data: {          
        labels: [label1, label2],
        datasets: [{                
          data: [score, avgScore],
          backgroundColor: [
              color1,
              color2,
          ],               
          barThickness: 20,            
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,          
        plugins:{
          legend:{
            display: false
          },            
          datalabels: {
            display: true,
            color: color,
            align: align,
            anchor: 'end',              
            offset: 6,
            textAlign: 'center',
            font: {
              weight: 'bold'
            },              
          },                      
        },
        animation: {            
          x:{
            from: 100
          }
        },
        scales: {
          x:{
            type: 'linear',
            min: 0,
            max: 100,
          },
          myScale: {              
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }          
      }
  });
}   