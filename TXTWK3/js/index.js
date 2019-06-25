

document.getElementById('background-btn').addEventListener('click', function(){



    var backgroundImage = document.getElementById('newimg')

    

    var newimg = document.getElementById('background').style.background = "url('C:\Users\admin\Desktop\TXTWK3\assets\Background-Picture-Html.jpg')";

});



document.getElementById('left').addEventListener('click', function () {



    var position = document.getElementById('ball').style.left;



    var newPosition = parseInt(position) - 20;



    document.getElementById('ball').style.left = newPosition + 'px';

});



document.getElementById('right').addEventListener('click', function () {



    var position = document.getElementById('ball').style.left;



    var newPosition = parseInt(position) + 20;



    document.getElementById('ball').style.left = newPosition + 'px';



});
document.getElementById('up').addEventListener('click', function () {



    var position = document.getElementById('ball').style.left;



    var newPosition = parseInt(position) + 20;



    document.getElementById('ball').style.up = newPosition + 'px';

});


document.getElementById('down').addEventListener('click', function () {



    var position = document.getElementById('ball').style.left;



    var newPosition = parseInt(position) - 20;



    document.getElementById('ball').style.up = newPosition + 'px';

});