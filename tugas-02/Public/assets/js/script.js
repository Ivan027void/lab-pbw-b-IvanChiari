function getDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}

function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    return hour + ':' + minute;
}

document.getElementById('demo').innerHTML = 'Hello JavaScript';
document.getElementById("jam").innerHTML = getTime();
document.getElementById("tanggal").innerHTML = getDate();
