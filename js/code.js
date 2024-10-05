function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function seeMore(){
    const view = document.querySelector('#view')
    view.style.display="block";

    const menu1 = document.querySelector('#menu1')
    menu1.style.display="block";
    const menu = document.querySelector('#menu')
    menu.style.display="none";
}

function bookRoom(){
    const book = document.querySelector('#bool')
    alert('Ocean View Successfully Booked, please fill in your correct info below....we will contact you')
}
function bookRoom2(){
    const book = document.querySelector('#book2')
    alert('City View Successfully Booked, please fill in your correct info below....we will contact you')
}
function bookRoom3(){
    const book = document.querySelector('#book3')
    alert('Garden View Successfully Booked, please fill in your correct info below....we will contact you')
}
function bookRoom4(){
    const book = document.querySelector('#book4')
    alert('Island View Successfully Booked, please fill in your correct info below....we will contact you')
}
function bookRoom5(){
    const book = document.querySelector('#book5')
    alert('Camping  House Successfully Booked, please fill in your correct info below....we will contact you')
}
function bookRoom6(){
    const book = document.querySelector('#book6')
    alert('Ocean View Successfully Booked, please fill in your correct info below....we will contact you')
}

function sendIn(){
    let submit = document.querySelector('#submit')
    const name = document.querySelector('#name').value;
    const number = document.querySelector('#number').value;
    const email = document.querySelector('#email').value;
    const month = document.querySelector('#month').value;
    const room = document.querySelector('#room').value;
    localStorage.setItem('name',name);
    localStorage.setItem('number',number);
    localStorage.setItem('email',email);
    localStorage.setItem('month',month);
    localStorage.setItem('room',room);
    localStorage.getItem('submit',submit)
    if(!name==="" || !number==="" || !email==="" || !month==="" || !room===""){
        alert('Customers details successfully sent In')
    }
}


    // script.js
    document.getElementById('client-information').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const style = document.getElementById('style').value;
    const date = document.getElementById('date').value

    // Create a client object
    const client = {
        name: name,
        phone: phone,
        style: style,
        date:date
    };

    // Store the client object in localStorage
    localStorage.setItem('client', JSON.stringify(client));

        alert('Client information saved!');
    });

    // To retrieve the client information later:
    const savedClient = JSON.parse(localStorage.getItem('client'));
    if (savedClient) {
        console.log('Client to call:', savedClient);
        // Here you would add code to make the call, send an email, etc.
    }



ScrollReveal().reveal(".about_img img",{
    ...scrollRevealOption,
    origin: "left",
});