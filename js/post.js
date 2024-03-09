const postId = window.location.search.substring(4)
const postContainer = document.querySelector('.post-container')
const postComment = document.querySelector('.comment-container')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)  //postId то что мы достали из адресной строки
.then((res) => res.json())
.then((data) => renderPost(data))

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)  //postId то что мы достали из адресной строки
.then((res) => res.json())
.then((res) => renderComments(res))



const renderPost = (data) => {
    const card = document.createElement('div')
    card.classList.add('card')
    postContainer.append(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.append(cardBody)

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText += data.title
    cardBody.append(cardTitle)

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText += data.body 
    cardBody.append(cardText)
    }

const renderComments = (res) => {
    for(let commentRen of res){
        const card = document.createElement('div')
        card.classList.add('card')
        postComment.append(card)

        const cardHeader = document.createElement('div')
        cardHeader.classList.add('card-header')
        cardHeader.innerText += 'Комментарии:'
        card.append(cardHeader)

        const cardComments = document.createElement('div')
        cardComments.classList.add('card-comments')
        card.append(cardComments)

        const cardName = document.createElement('h5')
        cardName.classList.add('card-name')
        cardName.innerText += commentRen.name
        cardComments.append(cardName)

        const cardEmail = document.createElement('p')
        cardEmail.classList.add('card-email')
        cardEmail.innerText += commentRen.email
        cardComments.append(cardEmail)

        const cardBody = document.createElement('p')
        cardBody.classList.add('card-body')
        cardBody.innerText += commentRen.body
        cardComments.append(cardBody)
    }
    
}

//        <div class="card text-center">
//        <div class="card-header">
//              Комментарии
//        </div>
//            <div class="card-comments">
//              <h5 class="card-name">Special title treatment</h5>
//              <p class="card-email">With supporting text below as a natural lead-in to additional content.</p>
//              <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
//            </div>
//          </div>