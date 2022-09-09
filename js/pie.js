const xlabels2=[];
const ylabels2=[];
const pieLabels=[];
const colorpie=[];

let numblue=0;
let numred=0;
let numorange=0;

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
   if(temp>70)
   {
    colorpie.push('blue');
  numblue++; 
  }
    else if(temp>40)
   {colorpie.push('orange');
  numorange++;
  }
   else
   {colorpie.push('red');
   numred++;
  }

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
alerting();
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
    backgroundColor:colorpie
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
function alerting()
{

  if(numblue>numred&&numblue>numorange)
  document.getElementById("note").innerHTML += 'Great keep going';

  if(numred>numblue&&numred>numorange)
  document.getElementById("note").innerHTML +=  'Not good repeat your point';
  if(numorange>numred&&numorange>numblue)
  document.getElementById("note").innerHTML += 'some students are not listening to you , but overall class is fine';
  ;
}