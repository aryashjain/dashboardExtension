window.onload = function () {
    var gm = document.getElementById("gm");
    var exp = document.getElementById('exp');
  gm.onclick=function refresh(){
    //chrome.tabs.executeScript(null,{file:'logscript.js'})
    window.location.reload();
  }
exp.onclick=function screenshot(){
html2canvas(document.querySelector("#whole")).then(canvas => {
   // document.body.appendChild(canvas)
    let a = document.createElement("a");
  a.download = "snap.png";
  a.href = canvas.toDataURL("image/png");
  a.click();
});
}
}
