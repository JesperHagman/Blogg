window.onload = function() {
    createPostEvent()
    generateTags()
}

function createPostEvent() {
    let form = document.getElementById('hej');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
   
        let formData = new FormData(form);
        formDataObject = {
            "content": formData.get('content'),
            "author":  formData.get('author'),
            "title":   formData.get('title'),
            "tags":    formData.getAll('tags')   
        }
        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })
            location.replace('index.html');
        } catch(error) {
        }
    });
}
function generateTags(){
    let tags = document.getElementById("tags")
    tags.innerHTML = ` 
        <input name="tags" type="checkbox" value="travel">     Travel     </input>
        <input name="tags" type="checkbox" value="food">       Food       </input>
        <input name="tags" type="checkbox" value="painting">   Painting   </input>
        <input name="tags" type="checkbox" value="coding">     Coding     </input>
        <input name="tags" type="checkbox" value="javascript"> Javascript </input>
        <input name="tags" type="checkbox" value="pun">        Pun </input>
    ` // to add or remove a tag you need to add/remove in update-post.js aswell
}

    
