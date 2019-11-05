var totalAttended = 0
var totalHeld = 0
var width = 0

function showAttendance() {

    document.querySelector('#batch').innerHTML = 'MCA'
    document.querySelector('#year').innerHTML = '3rd'
    document.querySelector('#sem').innerHTML = '1st'
    document.querySelector('#session').innerHTML = '2019'
    document.querySelector('#from').innerHTML = '21/11/2018'
    document.querySelector('#to').innerHTML = '20/03/2019'

    for(var i=0; i<=7; i++)
        document.querySelectorAll('.sub h3')[i].innerHTML = 'Demo Subject'

    var mybar = document.getElementsByClassName('mybar')
    var details = document.getElementsByClassName('details')
    // attendance = 74
    // for(i=0;i<mybar.length;i++) {
        setProgress(details[0], mybar[0], 11, 13)
        setProgress(details[1], mybar[1], 8, 15)
        setProgress(details[2], mybar[2], 12, 20)
        setProgress(details[3], mybar[3], 5, 15)
        setProgress(details[4], mybar[4], 7, 10)
        setProgress(details[5], mybar[5], 7, 9)
        setProgress(details[6], mybar[6], 10, 12)
        setProgress(details[7], mybar[7], 10, 20)
        setProgress(details[8], mybar[8], totalAttended, totalHeld)
    // }
}


function setProgress(attendanceRatio, attendanceBar, attended, held) {

    width = 1;
    var attendancePercentage = (attended / held) * 100
    totalAttended += attended
    totalHeld += held
    // set value to total class attended and held 
    attendanceRatio.querySelector('.attended').innerHTML = attended
    attendanceRatio.querySelector('.held').innerHTML = held

    var id = setInterval(progress, 20);

    // increase the width by 1 upto desired percentage after every 20ms to show progress effect
    // depending on the width change color 
    function progress() {
        if (width >= attendancePercentage) {
            clearInterval(id)
        } else {
            width++;
            attendanceBar.style.width = width + '%'

            if(width < 60)
                attendanceBar.style.backgroundColor = '#E8290B';
            else if (width < 75)
                attendanceBar.style.backgroundColor = '#F4C724';
            else if (width == 100)
                attendanceBar.style.backgroundColor = '#BB2CD9';
            else
                attendanceBar.style.backgroundColor = '#43BE31';

            attendanceBar.innerHTML = width + '%';  
        }
    }

}

function generateCopy() {
    var doc = new jsPDF()
    var text = 'Overall percentage is '+width
    doc.text(10, 10, text)
    doc.save('idms attendance copy.pdf')
}

