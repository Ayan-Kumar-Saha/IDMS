var width = 0

var accordions = document.querySelectorAll("div.accordion");

for(var i=0; i< accordions.length; i++){
    accordions[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    };
}


function showAttendance() {
    var myBar = document.getElementsByClassName('mybar')
    for(i=0; i<myBar.length; i++) {
        setProgress(myBar[i])
    }
}
function setProgress(attendanceBar) {

    var percentage = attendanceBar.innerHTML
    attendanceBar.style.width = percentage + '%'
    attendanceBar.innerHTML += '%'
        
    if (percentage < 60)
        attendanceBar.style.backgroundColor = '#E8290B';
    else if (percentage < 75)
        attendanceBar.style.backgroundColor = '#F4C724';
    else if (percentage == 100)
        attendanceBar.style.backgroundColor = '#BB2CD9';
    else
        attendanceBar.style.backgroundColor = '#43BE31';
 
}