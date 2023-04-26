let url = 'https://jsonplaceholder.typicode.com/users'
let app = document.getElementById('id')

// fetch(url)
// .then(response =>response.json())
// .then(data => console.log(data))

async function getArticles(url){
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
}

getArticles(url)