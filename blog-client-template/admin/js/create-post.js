
window.onload = function() {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('hej');

    form.addEventListener('submit', async function(e) {

        e.preventDefault();
        try {
            await fetch('', {
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