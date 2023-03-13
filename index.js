let background = document.getElementById('cont');
const colors = ["#e34464","#e38444","#a144e3","#44e374","#d6e344"];
function changebackground(){
    const random= Math.ceil(Math.random()*5);
    background.style.backgroundColor=colors[random];
}
setInterval(changebackground,2000);
