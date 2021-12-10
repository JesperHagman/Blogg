window.onload = function () {
    updateBlogEvent();
}

function updateBlogEvent() {
    let blogEdit = document.getElementById(''); //Bloggpostens id

    blogEdit.addEventListener('submit', async function(e) {
        e.preventDefault();

        let blogData = new FormData(form);
        blogDataObject = {
            "content": blogData.get('content')
        }

        try {
            await fetch('', {       //Blogginläggets id  // Satte id=${blog['_id'] så kolla på post.js hur jag gjorde där -Jesper
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogDataObject),
            })
            location.replace('admin/index.html');

        } catch(error) {

        }
    })
}