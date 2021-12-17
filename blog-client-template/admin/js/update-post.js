
window.onload = function () {

}


const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let idFromUrl = urlParams.get('id')

getBlogPost()
updateBlogPost();

async function getBlogPost() {
    let oldPost = document.getElementById('content')
    let oldTitle = document.getElementById("title")
    let oldAuthor = document.getElementById("author")

    try {
        await fetch(`http://localhost:5000/posts/${idFromUrl}`)
            .then((res) => res.json())
            .then((data) => {
                oldPost.innerHTML = data.content
                oldTitle.value = data.title
                oldAuthor.value = data.author
              
let arrayOfTags = [
    "travel",
    "food",
    "painting",
    "coding",
    "javascript"
]
    for(let tags of arrayOfTags) {
        
        if(data.tags.includes(tags)) {
            let checked = "checked"
            document.getElementById("tags").innerHTML += `<input ${checked} name="tags"type="checkbox"value="${tags}">${tags}</input>`
        }else {
            document.getElementById("tags").innerHTML += `<input name="tags"type="checkbox"value="${tags}">${tags}</input>`
        }  
    }       
})
    } catch(error) {
        console.log(error)
    }     
}

function updateBlogPost() {
    let form = document.getElementById('update-post');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        let formData = new FormData(form);
        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "tags": formData.getAll('tags'),
            "content": formData.get('content')
        }
        console.log(formDataObject)
        console.log(JSON.stringify(formDataObject));

        try {
            await fetch(`http://localhost:5000/posts/${idFromUrl}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject)
            })

            location.replace('index.html');

        } catch (error) {
            console.log(error);
        }
    })
}
