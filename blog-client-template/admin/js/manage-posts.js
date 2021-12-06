window.onload = function() {
    fetchAllBloggPosts();
}

async function fetchAllBloggPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let bloggPosts = await response.json();

        let bloggPostsHTML = '';
        for(let blogg of bloggPosts) {
            let bloggDate = new Date(blogg.date);
            let formatedDate = `${bloggDate.getFullYear()}-${bloggDate.getMonth() + 1}-${bloggDate.getDate()} ${bloggDate.getHours()}:${bloggDate.getMinutes()}`

            console.log(blogg['_id'])
            bloggPostsHTML += `
                <li class="list-group-item">
                    <p>${blogg.content} <br> <span class="date">- ${formatedDate}</span> </p>
                    
                    <div>
                        <a href="../admin/update-post.html?id=${blogg['_id']}">Update</a> |
                        <a class="delete-link" data-id="${blogg['_id']}" href="#">Delete</a> 
                    </div>
                </li>
            `;
        }

        document.getElementById('blogg-list').innerHTML = bloggPostsHTML;
    } catch(error) {
        console.log(error);
    }  

    deleteBloggEvent();
}

function deleteBloggEvent() {
    let deleteLinks = document.getElementsByClassName('delete-link');

    for (let link of deleteLinks) {
        link.addEventListener('click', async function(e) {
            e.preventDefault();

            try {
                await fetch('http://localhost:5000/posts/' + e.target.dataset.id,
                    {
                        method: 'DELETE'
                    }
                );

                e.target.parentNode.parentNode.remove();
            } catch(error) {
                console.log(error)
            }

        })
    }
}