let post_url = 'https://jsonplaceholder.typicode.com/posts/'
let user_urls = 'https://jsonplaceholder.typicode.com/users/'
let app = document.querySelector('#app')

async function getAuthor(url,id){
    let response = await fetch(url+id)
    let author = await response.json()
    return author
}
// fetch(url)
// .then(response =>response.json())
// .then(data => console.log(data))

async function getArticles(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    data.forEach(async post => {
        post.user = await getAuthor(user_urls,post.userId)
        app.innerHTML += 
        `<article>
        <h2 class = 'h4'>${post.title}</h2>
        <small class = 'badge badge-danger'>${post.user.name}</small>
        <p>${post.body}</p>
        </article>
        <hr>`
    });
}

getArticles(post_url)