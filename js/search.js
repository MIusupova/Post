const searchText = window.location.search.substring(8).replaceAll('%20', ' ')
const searchContainer = document.querySelector('.search-container')
const posts = document.querySelector('.posts')
const usersCon = document.querySelector('.users')

fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchText}`)
.then((res) => res.json())
.then((res) => renderResult(res))

fetch(`https://jsonplaceholder.typicode.com/users?username=${searchText}`)
.then((res) => res.json())
.then((res) => userResult(res))  

const renderResult = (data) => {
    for(let post of data){
        const titlePost = document.createElement('h5')
        titlePost.classList.add('post')
        titlePost.innerText += 'Post:'
        posts.append(titlePost)
        
        const col = document.createElement('div')
        col.classList.add('col')
        posts.append(col)

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

}
    }

const userResult = (users) => {
    for(let user of users){

        const titleUser = document.createElement('h5')
        titleUser.classList.add('user')
        titleUser.innerText += 'User:'
        usersCon.append(titleUser)
        
        const card = document.createElement('div')
        card.classList.add('card', 'text-center')
        usersCon.append(card)
    
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
    
        }
    }
      