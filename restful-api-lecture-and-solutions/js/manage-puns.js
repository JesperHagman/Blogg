window.onload = function() {
    fetchAllPuns();
}

async function fetchAllPuns() {
    try {
        let response = await fetch('https://puns-app.herokuapp.com/puns');
        let puns = await response.json();
        console.log(puns);

        let punsHTML = '';
        for(let pun of puns) {
            let punDate = new Date(pun.date);
            let formatedDate = `${punDate.getFullYear()}-${punDate.getMonth() + 1}-${punDate.getDate()} ${punDate.getHours()}:${punDate.getMinutes()}`

            console.log(pun['_id'])
            punsHTML += `
                <li class="list-group-item">
                    <p>${pun.content} <br> <span class="date">- ${formatedDate}</span> </p>
                    
                    <div>
                        <a href="update-pun.html?id=${pun['_id']}">Update</a> |
                        <a class="delete-link" data-id="${pun['_id']}" href="#">Delete</a> 
                    </div>
                </li>
            `;
        }

        document.getElementById('pun-list').innerHTML = punsHTML;
    } catch(error) {
        console.log(error);
    }

    

    /**
     * Add here an eventlistener to all delete-links, 
     * that makes a request to delete the chosen pun from DB, 
     * And also deletes the pun from the DOM
     * 
     * 1. Begin with selecting all delete-links with an appropiate element selector
     * 2. Loop through all delete-links and add an eventlistener for each delete-link,
     * 3. The eventlisteners should be triggered on the 'click'-event
     * 4. Make sure to use preventDefault(), to prevent the link from reloading the page
     * 5. When triggered, the eventlistener should make a "DELETE" request to the URL: https://puns-app.herokuapp.com/puns/<punID>, and the <punId> should be retrieved from delete-link data-attribute => 'this.dataset.id'
     * 6. Make sure to remove() the whole pun from DOM.
     */

    deletePunEvent();
}


function deletePunEvent() {
    let deleteLinks = document.getElementsByClassName('delete-link');
    console.log(deleteLinks);

    for (let link of deleteLinks) {
        link.addEventListener('click', async function(e) {
            e.preventDefault();

            // console.log(e.target.dataset.id);

            try {
                await fetch('https://puns-app.herokuapp.com/puns/' + e.target.dataset.id,
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


















    