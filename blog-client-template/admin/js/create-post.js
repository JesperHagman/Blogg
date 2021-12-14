
window.onload = function() {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('hej');
    let content = document.getElementById("content");
    let submit = document.getElementById("submit");

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        let formData = new FormData(form);
        formDataObject = {
            "content": formData.get('content'),
            "author": formData.get('author'),
            "title": formData.get('title')
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