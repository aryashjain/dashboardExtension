  getTime();
  function getTime(){
        var date = new Date();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        document.getElementById("p1").innerHTML = current_time;
  }