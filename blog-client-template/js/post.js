window.onload = function() {
    
   
    const queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString)
    let idFromUrl = urlParams.get('id')
    console.log(urlParams)
    console.log(idFromUrl)

    getPost()
    
    async function getPost() {
        let blog = document.getElementById('blog-list');
        
        
        try {
            await fetch(`http://localhost:5000/posts/${idFromUrl}`)
            .then((res) => res.json())
            .then((post) => {
                    let postDate = new Date(post.date)
                    let formatedDate = `${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}`
                    blog.innerHTML = `
                    <h2> ${post.title}</h2>

                    <p><strong>Tags:</strong>${post.tags.join(", ")}</p>

                    <p><i><strong>${post.author}</strong></i> - ${formatedDate}</p>

                    <p>${post.content}</p>
                    `
                })
            } catch(error) {
                    console.log(error)
            }     
    }
}
