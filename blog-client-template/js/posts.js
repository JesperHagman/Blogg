window.onload = function() {
    fetchPosts();
}

let blogPosts = document.getElementById("posts")

async function fetchPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let posts = await response.json();

        for(let post of posts) {

            let date = new Date(post.date);
            let formatedDate = date.toDateString();

            blogPosts.innerHTML += `
                 <h2 class="space"> ${post.title}</h2>
                 <br>
                 <li><strong>Tags: </strong>${post.tags.join(", ")}</li>
                 <li><i><strong>${post.author}</strong></i> - ${formatedDate}</li>
                 <li>${post.content.slice(0, 100)}<a href="post.html?id=${post['_id']}">
                 <br>
                 ...read more</a></li> 
                 <hr>
            `;
        }

    } catch(error) {
        console.log(error);
    }
} 