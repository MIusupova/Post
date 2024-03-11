const userId = window.location.search.substring(4)

const userContainer = document.querySelector('.user')
const postContainer = document.querySelector('.posts')
const textPost = document.querySelector('.text-post')
const row = document.querySelector('.row')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then((res) => res.json())
.then((res) => renderUser(res));

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
.then((res) => res.json())
.then((data) => renderPosts(data));


const renderUser = (user) => {
    const card = document.createElement('div')
    card.classList.add('card')
    userContainer.append(card)

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header', 'text-center', 'card-text')
    cardHeader.innerText += 'Пользователь:'
    card.append(cardHeader)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'text-center', 'text-primary')
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
}

const renderPosts = (posts) => {
    for (let post of posts){
    const col = document.createElement('div')
    col.classList.add('col')
    row.append(col)

    const card = document.createElement('div')
    card.classList.add('card')
    col.append(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.append(cardBody)

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = post.title
    cardBody.append(cardTitle)

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = post.body
    cardBody.append(cardText)

    cardBody.innerHTML += `<a href="post.html?id=${post.id}" class="btn btn-outline-primary">Открыть пост</a>`

    }
    
        
}


//user
//<div class="card border-primary mb-3 text-center">
//    <div class="card-header">Пользователь:</div>
//        <div class="card-body text-primary">
//            <h5 class="card-name">Primary card title</h5>
//            <p class="card-username">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <p class="card-email">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <p class="card-phone">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <p class="card-website">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    </div>
//</div>

//posts
//<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 flex-gap">
//          <div class="col">
//            <div class="card">
//              <div class="card-body">
//                <h5 class="card-title">Card title</h5>
//                <p class="card-text">
//                  Some quick example text to build on the card title and make up the bulk of the
//                  card's content.
//                </p>
//                <a href="post.html" class="btn btn-outline-primary">Открыть пост</a>
//            </div>
//</div>