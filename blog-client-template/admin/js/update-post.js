
window.onload = function () {
    let queryString = location.search;
    let urlParams = new URLSearchParams(queryString);
    let idFromUrl = urlParams.get('id');
    let url = (`http://localhost:5000/posts/${idFromUrl}`);

    let id = urlParams + "61af793730c5ff026cb0ec1c"; //ta bort sen

    getBlogPost();

    updateBlogPost();
}

async function getBlogPost(id) {
    try {
        let response = await fetch(url);
        let blogPost = await response.json();

        document.getElementById('title').value = blogPost.title;
        document.getElementById('author').value = blogPost.author;
        document.getElementById('tags').value = blogPost.tags;
        document.getElementById('content').value = blogPost.content;
    } catch(error) {
        console.log(error);
    }
}

function updateBlogPost(id) {
    let postUpdate = document.getElementById('update-post');
    postUpdate.addEventListener('submit', async function (e) {
        e.preventDefault();
        let postData = new FormData(postData);
        postDataObject = {
            "title": postData.get('title'),
            "author": postData.get('author'),
            "tags": postData.get('tags'),
            "content": postData.get('content')
        }

        try {
            await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postDataObject)
            })

            location.replace('admin/index.html');
        } catch (error) {
            console.log(error);
        }
    })
}

/* const submitBtn = document.getElementById('submit-btn');
const updatePost = document.getElementById('update-post');


//Calling functions
submitBtn.addEventListener('click', submitUpdate);
getBlogPost()
    .catch(error => {
        console.log(error);
    });
postBlogPost();

//Get post
async function getBlogPost() {
    const response = await fetch(`http://localhost:5000/posts/${idFromUrl}`);
    const blogPost = await response.json();
    document.getElementById('update-post').innerHTML = blogPost;
    ///Länka ihop med html input
}; 

//Update post
async function submitUpdate(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = updatePost;
    try {
    const formData = new FormData(form);
    const responseData = await postFormDataJson({url, formdata});
    console.log({responseData});
} catch (error) {
    console.log(error);
}

//Submit post
async function postBlogPost({url, formdata}) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorMessage = await response();
        console.log(error);
    }
    return response.json();
}}; */