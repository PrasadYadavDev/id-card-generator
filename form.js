var card = {
    name: 'Fname Lname',
    address: 'address',
    dob: '01-01-1970',
    phone: '+91 0000000000',
    email: 'abc@domain.com',
    image: 'https://phoenixsaket.github.io/analog-clock/assets/Avatars/avatar-31.png'
}

const types = [
    'name',
    'address',
    'dob',
    'phone',
    'email',
    
]

function valueInput(event, type) {
    const value = event.target.value;
    console.log({ type: type, value: value })
    switch (type) {
        case 'name':
            card.name = value;
            break;
        case 'address':
            card.address = value;
            break;
        case 'dob':
            const date = new Date(value)
            card.dob = date.getDate()+' '+getMonthName(date.getMonth())+', '+date.getFullYear();
            break;
        case 'phone':
            card.phone = value;
            break;
        case 'email':
            card.email = value;
            break;
        case 'image':
            card.image = value;
            break;

        default:
            break;

    }
    saveCard(event)
}

function getMonthName(month){
    let text = "";
    switch(month){
        case 0 : text = 'January'; break;
        case 1 : text = 'February'; break;
        case 2 : text = 'March'; break;
        case 3 : text = 'April'; break;
        case 4 : text = 'May'; break;
        case 5 : text = 'June'; break;
        case 6 : text = 'July'; break;
        case 7 : text = 'August'; break;
        case 8 : text = 'September'; break;
        case 9 : text = 'October'; break;
        case 10 : text = 'November'; break;
        case 11 : text = 'December'; break;
        default :  break;

    }
    return text;
}

function saveCard(event) {
    event.preventDefault();
    event.stopPropagation();
    types.forEach(el => {

        document.getElementById(el).innerHTML = card[el];
    })
    document.getElementById('image').src = card.image;
}