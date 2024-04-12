let hr=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
 let now=new Date();
 let hh=now.getHours();
 let mm=now.getMinutes();
 let ss=now.getSeconds();
 

 let hrotation=30*hh+mm/2;
 let mrotation=6*mm;
 let srotation=6*ss;

 hr.style.transform = `rotate(${hrotation}deg)`;
 min.style.transform = `rotate(${mrotation}deg)`;
 sec.style.transform = `rotate(${srotation}deg)`;
 var date=new Date().toDateString();
document.getElementById('date').textContent=date;
}
setInterval(displayTime,1000);