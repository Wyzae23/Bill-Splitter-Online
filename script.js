let numPeople = document.querySelector('numPeopleInput');

function textBox(numPeople){
    numPeople = numPeople*1; // Convert to int
    if( numPeople !== numPeople ) throw 'Invalid argument'; // Check NaN
    var container = document.getElementsByClassName('left-side'); //Cache container.

    for(var i = 0; i <= numPeople; i++){
        var tb = document.createElement('input');
        tb.type = 'text';
        tb.id = 'textBox_' + i; // Set id based on "i" value
        container.appendChild(tb); 
    }
}