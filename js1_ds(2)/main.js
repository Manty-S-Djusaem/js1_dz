var month = Number(prompt('Your Month: '))

var day = Number(prompt('Your Day: '))

if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    alert('Vodoley')

  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    alert('Ryby')

  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    alert('Oven')
    
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    alert('Telec')

  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    alert('Bliznecy') 

  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    alert('Rak')

  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    alert('Lev')

  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    alert('Deva')

  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    alert('Vesy')

  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    alert('Skorpion')

  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    alert('Strelec')
    
  } else if ((month === 12 && day >= 22) || (month === 1   && day <= 19)) {
    alert('Kozerog')
  }else if(month >= 2 && day >= 2){
    alert('Wright right data')
  }
