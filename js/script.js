const postsContainer = document.querySelector('.row')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => renderPost(res))

const renderPost = (posts) => {
    for (let post of posts){
        const col = document.createElement('div')
        col.classList.add('col')
        postsContainer.append(col)

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

        cardBody.innerHTML += `<a href="post.html" class="btn btn-outline-primary">Открыть пост</a>`
        

    }
}

//<div class="col">
//          <div class="card">
//            <div class="card-body">
//              <h5 class="card-title">Card title</h5>
//              <p class="card-text">
//                Some quick example text to build on the card title and make up the bulk of the
//                card's content.
//              </p>
//              <a href="post.html" class="btn btn-outline-primary">Открыть пост</a>
//            </div>
//          </div>
//</div>