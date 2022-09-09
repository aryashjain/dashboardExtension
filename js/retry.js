const xlabels=[];
const ylabels=[];
const pieLabels=[];
var sum=0;
chartIt();
async function getData(){
  const response= await fetch('test.csv');
  const data = await response.text();
  const table= data.split('\n').slice(1);
  
  table.forEach(row=>{
    const col= row.split(',');
    const year = col[0];
    xlabels.push(year);
    const temp = col[1];
    ylabels.push(temp);
   // console.log(year,temp);

  })

  for(let i=0;i<ylabels.length;i++)
  {
     sum+=(ylabels[i]-'0');
    
  }
  console.log(sum);
  for(let i=0;i<ylabels.length;i++)
  {
     let avg =ylabels[i]/sum;
    avg*=100;
     pieLabels.push(avg);
  }
  console.log(pieLabels);
}
  
async function chartIt(){
  await getData();
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Percentage of students',
            data: ylabels,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
