window.onload = function() {
    fetchAllBlogPosts();
}

async function fetchAllBlogPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();

        let blogPostsHTML = '';
        for(let blog of blogPosts) {
            let blogDate = new Date(blog.date);
            let formatedDate = `${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()} ${blogDate.getHours()}:${blogDate.getMinutes()}`

            console.log(blog['_id'])
            blogPostsHTML += `
                <tr> 
                    <th>Title</th> 
                    <th>Author</th>
                    <th>Tags</th>
                    <th>Date</th> 
                    <th>Action</th>
                </tr>

                <tr> 
                    <td>${blog.title}</td>
                    <td> ${blog.author}</td>  
                    <td>${blog.tags}</td> 
                    <td>${formatedDate}</td>  
                    <td>  
                        <a href="../admin/update-post.html?id=${blog['_id']}">Update</a> |
                        <a class="delete-link" data-id="${blog['_id']}" href="#">Delete</a>
                    </td>
                </tr>
            `
        }
        document.getElementById('blog-list').innerHTML = blogPostsHTML;
    } catch(error) {
        console.log(error);
    }  
    deleteBlogEvent();
}

function deleteBlogEvent() {
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