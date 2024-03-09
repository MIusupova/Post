const userContainer = document.querySelector('.user')

fetch('https://jsonplaceholder.typicode.com/userId')
    .then((res) => res.json())
    .then((res) => renderUsers(res))
    console.log(userId);