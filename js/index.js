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