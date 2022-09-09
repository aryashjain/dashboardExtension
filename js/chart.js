const xlabels=[];
const ylabels=[];

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
  }
    

  async function chartIt(){
    await getData();
const ctx= document.getElementById('myChart').getContext("2d");
const myChart= new Chart(ctx,{
//type
type:'bar',
data:{
    labels:xlabels,
     datasets:[
    {
        data:ylabels
        ,
    label:"dataset",
    backgroundColor:["orange","aliceblue",'green']
, bordercolor:[..."black"]
,borderWidth:3,    
}    
],
},
options:{
      maintainAspectRatio:true,
    indexAxis:'y',
    responsive:false,
    padding:{
        left:50,
        right:0,
        top:50,
        botton:0,
    }
    ,
    tooltips:{
        enabled:true,
        backgroundColor:'blue',
    
    },
    title:{
        display:true,
        text:'first horizontal chart',
        fontSize:25,
        
    }
}




})
  }

  
