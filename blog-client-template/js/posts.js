window.onload = function() {
    fetchPosts();
}

let blogPosts = document.getElementById("posts")

async function fetchPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let posts = await response.json();

        let maxChar = 100

        for(let post of posts) {

            let postDate = new Date(post.date);
            let formatedDate = `${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}`

            blogPosts.innerHTML += `
                <h2> ${post.title}</h2>

                <p><strong>Tags: </strong>${post.tags.join(", ")}</p>

                <p><i><strong>${post.author}</strong></i> - ${formatedDate}</p>
                
                <li>
                    <p>${post.content.slice(0, 100)}</p>
                </li>
                <br>
            `;

            if (post.content.length > maxChar) {
              let readMore = document.createElement('a')
              readMore.href =`post.html?id=${post['_id']}`
              readMore.innerText ="...read more"
              blogPosts.appendChild(readMore)
            }

        }

    } catch(error) {
        console.log(error);
    }
} 