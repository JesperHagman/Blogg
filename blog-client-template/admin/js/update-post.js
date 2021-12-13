/* 
const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let idFromUrl = urlParams.get('id');

(`http://localhost:5000/posts/${idFromUrl}`, {       //Blogginläggets id  // Satte id=${blog['_id'] så kolla på post.js hur jag gjorde där -Jesper
*/

window.onload = function () {
    getBlogPost();
}
const queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idFromUrl = urlParams.get('id');
    const url = (`http://localhost:5000/posts/${idFromUrl}`);

const submitBtn = document.getElementById('submit-btn');
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
        method: "POST",
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
}};