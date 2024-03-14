const btn = document.querySelector('.btn')
const formControl = document.querySelector('.form-control')

const getSearchForm = (e) => {
    e.preventDefault();
    window.location.href = `${window.location.origin}///Users/arsenarsanakaev/Desktop/javascript%209%20поток/Post/search.html?search=${formControl.value}`
}

btn.addEventListener('click', getSearchForm)