const xlabels2=[];
const ylabels2=[];
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
    xlabels2.push(year);
    const temp = col[1];
    ylabels2.push(temp);
   // console.log(year,temp);

  })

  for(let i=0;i<ylabels2.length;i++)
  {
     sum+=(ylabels2[i]-'0');
    
  }
  console.log(sum);
  for(let i=0;i<ylabels2.length;i++)
  {
     let avg =ylabels2[i]/sum;
    avg*=100;
     pieLabels.push(avg);
  }
  console.log(pieLabels);
}
  
async function chartIt(){
  await getData();

const ctx2= document.getElementById('myPie').getContext("2d");
const myPie= new Chart(ctx2,{
//type
type:'pie',
data:{
    labels:xlabels2,
    datasets:[
    {
        data:pieLabels
    ,
    label:"dataset",
    backgroundColor:["orange","aliceblue",'green']
, bordercolor:[..."black"]
,borderWidth:3,    
}  ,
  
],
},
options:{
    responsive: false,
},


})
}