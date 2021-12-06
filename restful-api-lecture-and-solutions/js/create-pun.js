window.onload = function() {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-pun-form');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();


        /*
            {
                "content":"Some pun"
            }
        */
        // Solution 1
        // let contentFromTextarea = document.getElementById('content-textarea').value;
        // // console.log(contentFromTextarea);
        // let formDataObject = {
        //     "content": contentFromTextarea
        // }

        // Solution 2
        let formData = new FormData(form);
        formDataObject = {
            "content": formData.get('content')
        }


        // Solution 3
        // formDataObject = serializeForm(form);

        // console.log(JSON.stringify(formdata));

        try {
            await fetch('https://puns-app.herokuapp.com/puns', {
                method: 'POST', // GET, POST, PATCH, DELETE.
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

let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    // console.log(formData.getAll());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};
