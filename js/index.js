let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

let copyright = document.createElement('p');
copyright.innerHTML = `Andrew McKinnon ${thisYear}`;

footer.appendChild(copyright);

const skills = ['vanilla js', 'angular', 'git', 'node'];

let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');

for(let i=0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = messageForm.querySelector('#name').value;
    let email = messageForm.querySelector('#email').value;
    let message = messageForm.querySelector('#message').value;

    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('ul');

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`

    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button'

    newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', e => {
        let entry = removeButton.parentNode.parentNode;
        entry.removeChild(newMessage);
    });

    messageList.appendChild(newMessage);

    messageForm.reset();    
})