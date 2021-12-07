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
            await fetch('', {       //Blogginläggets id
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