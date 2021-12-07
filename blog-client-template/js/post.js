let queryString = window.location.search
console.log(queryString)
let urlParams = new URLSearchParams(queryString)
console.log(urlParams)
urlParams.get()


// window.onload = function() {
//     fetchAllBlogPosts();
// }
// let getDeleteBtns = document.getElementsByClassName("delete-link")

// async function fetchAllBlogPosts() {
//     try {
//         let response = await fetch('http://localhost:5000/posts');
//         let blogPosts = await response.json();

//         let blogPostsHTML = '';
//         for(let blog of blogPosts) {
//             let blogDate = new Date(blog.date);
//             let formatedDate = `${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()} ${blogDate.getHours()}:${blogDate.getMinutes()}`

//             blogPostsHTML += `
//                 <section> 
//                     <h1>${blog.title}</h1>
//                     <br>
//                     <a> ${blog.author}</a> | <a>${formatedDate}</a>
//                     <br>
//                     <a>tags: ${blog.tags}</a> 
//                     <br>
//                     <a>${blog.content}</a> 
//                     </section>
//                     `      
//         }
//         document.getElementById('blog-list').innerHTML = blogPostsHTML;
//     } catch(error) {
//         console.log(error);
// } 
// } 