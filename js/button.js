window.onload = function () {
  var gm = document.getElementById("gm");
  var exp = document.getElementById('exp');
// gm.onclick=function (){
  
//   window.location.reload();
// }
gm.onclick=function(){thisfunc()};


exp.onclick=function screenshot(){
html2canvas(document.querySelector("#whole")).then(canvas => {
 // document.body.appendChild(canvas)
  let a = document.createElement("a");
a.download = "snap.png";
a.href = canvas.toDataURL("image/png");
a.click();
downloader();
});
}
}

function  thisfunc(){
  window.location.reload();
setTimeout(thatfunc,9000);


}

function downloader(){

x = document.getElementsByClassName("zWGUib");
y = x.length
arr = new Array()
var arrayToCSV = ""


// 
var meta = "Meeting ID,Meeting detail ,\n"

for (i = 0; i < y; i++) {
arrayToCSV += x[i].innerText + ",\n";

}

if (arrayToCSV == "") {

alert("Please open the participants list in Meet window and try again.")
} else {
arrayToCSV = meta + arrayToCSV;

var link = document.createElement("a");
link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodeURI(arrayToCSV));
link.setAttribute("target", '_blank');
link.setAttribute("download", meetID + " (" + meetTime + ").csv");
document.body.appendChild(link); // Required for FF
link.click();
document.body.removeChild(link);

}
}
function thatfunc(){

x = document.getElementsByClassName("zWGUib");
y = x.length
arr = new Array()

for (i = 0; i < y; i++) {
arr[i]= x[i].innerText ;

}

if(arr.empty)
{
alert('Please open the participany list in the meeting window')
}


// if (arrayToCSV == "") {

// alert("Please open the participants list in Meet window and try again.")
// } else {
//   arrayToCSV = meta + arrayToCSV;

//  var link = document.createElement("a");
//  link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodeURI(arrayToCSV));
//  link.setAttribute("target", '_blank');
//  link.setAttribute("download","down.csv");
//  document.body.appendChild(link); // Required for FF
//  link.click();
//  document.body.removeChild(link);
 console.log('x=',x);

console.log('data =:',arr);
}
//export {arr};
