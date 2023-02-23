const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

//Solution 1:

renderPosts();

function renderPosts(){
    posts.forEach((item, index) => {
        const postContainer = `
            <section class="post-container">
                <div class="post-heading">
                    <img src="${item.avatar}" alt="avatar of ${item.username}" class="avatar" id="poster-avatar">
                    
                    <div class="post-user-details">
                        <p class="user-full-name" id="poster-full-name">${item.name}</p>
                        <p class="user-location" id="poster-location">${item.location}</p>
                    </div>
    
                </div>
    
                <div class="post-main-image">
                    <img src="${item.post}" alt="post by ${item.username}" class="main-image" id="poster-image">
                </div>
    
                <div class="icon-container">
                    <img src="images/icon-heart.png" alt="icon-heart" class="icon heartIcon" id="heart-icon${index}" onclick="likePost(event)"/>
                    <img src="images/icon-comment.png" class="icon" alt="icon-comment" />
                    <img src="images/icon-dm.png" class="icon" alt="icon-dm" />
                </div>
    
                <p class="likes-message" id="poster-likes${index}">${item.likes} likes</p>
                <p class="poster-message" id="poster-message"><span class="username" id="poster-username">${item.username}</span> just took a few mushrooms lol</p>
    
            </section>`
    
        document.querySelector("body").innerHTML += postContainer
    })

    //same as above but with basic for loop:

    // for(let i = 0; i < posts.length; i++){
    //     const postContainer = `
    //         <section class="post-container">
    //             <div class="post-heading">
    //                 <img src="${posts[i].avatar}" alt="avatar of ${posts[i].username}" class="avatar" id="poster-avatar">
                    
    //                 <div class="post-user-details">
    //                     <p class="user-full-name" id="poster-full-name">${posts[i].name}</p>
    //                     <p class="user-location" id="poster-location">${posts[i].location}</p>
    //                 </div>
    
    //             </div>
    
    //             <div class="post-main-image">
    //                 <img src="${posts[i].post}" alt="post by ${posts[i].username}" class="main-image" id="poster-image">
    //             </div>
    
    //             <div class="icon-container">
    //                 <img src="images/icon-heart.png" alt="icon-heart" class="icon" id="heart-icon${i}" onclick="likePost()"/>
    //                 <img src="images/icon-comment.png" class="icon" alt="icon-comment" />
    //                 <img src="images/icon-dm.png" class="icon" alt="icon-dm" />
    //             </div>
    
    //             <p class="likes-message" id="poster-likes${i}">${posts[i].likes} likes</p>
    //             <p class="poster-message" id="poster-message"><span class="username" id="poster-username">${posts[i].username}</span> just took a few mushrooms lol</p>
    
    //         </section>`
    
    //     document.querySelector("body").innerHTML += postContainer
    // }

}

function likePost(event){
    const index = (event.target.id).slice((event.target.id).length-1)
    
    if(posts[index].liked === false) {        
        posts[index].likes += 1
        document.getElementById(`heart-icon${index}`).src = "./images/icon-filled-heart.png"
        posts[index].liked = true
    } else {
        posts[index].likes -= 1
        document.getElementById(`heart-icon${index}`).src = "./images/icon-heart.png"
        posts[index].liked = false
    }
    
    document.getElementById(`poster-likes${index}`).innerText = `${posts[index].likes} likes`
}
