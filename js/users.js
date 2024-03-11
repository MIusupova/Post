const usersContainer = document.querySelector('.container-user')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => renderUsers(res))

const renderUsers = (users) => {
    for(let user of users){
        const card = document.createElement('div')
        card.classList.add('card', 'text-center')

        const cardHeader = document.createElement('div')
        cardHeader.classList.add('card-header')
        cardHeader.innerText += 'Пользователь:'
        card.append(cardHeader)

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'text-primary')
        card.append(cardBody)

        const cardName = document.createElement('h5')
        cardName.classList.add('card-name')
        cardName.innerText += user.name
        cardBody.append(cardName)

        const cardUsername = document.createElement('p')
        cardUsername.classList.add('card-username')
        cardUsername.innerText += user.username
        cardBody.append(cardUsername)

        const cardEmail = document.createElement('p')
        cardEmail.classList.add('card-email')
        cardEmail.innerText += user.email
        cardBody.append(cardEmail)

        const cardPhone = document.createElement('p')
        cardPhone.classList.add('card-phone')
        cardPhone.innerText += user.phone
        cardBody.append(cardPhone)

        const cardWebsite = document.createElement('p')
        cardWebsite.classList.add('card-website')
        cardWebsite.innerText += user.website
        cardBody.append(cardWebsite)

        cardBody.innerHTML += `<a href="user.html?id=${user.id}"" class="btn btn-outline-primary">Перейти на страницу пользователя</a>`
        usersContainer.append(card)

    }

}

//<div class="card border-primary mb-3 text-center">
//<div class="card-header">Пользователь:</div>
//<div class="card-body text-primary">
//  <h5 class="card-name">Primary card title</h5>
//  <p class="card-username">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//  <p class="card-email">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//  <p class="card-phone">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//  <p class="card-website">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//  <a href="user.html" class="btn btn-outline-primary">Перейти на страницу пользователя</a>
//</div>
//</div>