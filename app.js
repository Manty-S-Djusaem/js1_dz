var name = prompt('Your Name: ');

var surname = prompt('Your Surname: ')

var password = Number(prompt('Wright your password: '))


if(password == 12){
    alert('Hi' + ' ' + surname + ' ' + name + ',' + ' ' + 'Accepted');
}else if(password >= 13 && password <= 40){
    alert(name + ' ' + ',' + ' ' + 'not accepted')
}else{
    // console.error('error')
    alert('error')
}