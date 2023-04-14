const showUsersBtn = document.getElementById('btn');
const userList = document.getElementById('users-list');
const mass = document.getElementById('mass');

function getUsers() {
    mass.style.display = 'block';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        mass.style.display = 'none';
        users.slice(0, 10).forEach(user => {
            const li = document.createElement('li');
            li.innerText = user.name;
            userList.appendChild(li);
        });
    })
    .catch(error => console.log(error));
}

showUsersBtn.addEventListener('click', getUsers);

