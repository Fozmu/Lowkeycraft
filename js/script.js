const wpisy = [
    {

        'titel': "titel",
        'content':"content",
        'img':"img/image0.jpg",
        'update': "1.21.1"

    },

    {

        'titel': "Hi",
        'content':"Hello",
        'img':"img/image0.jpg",
        'update': "1.21.1"

    }

];
console.log(wpisy);
let posts = document.querySelector('.posts');
console.log(posts);
let mojePosty = "";
for(let i= 0; i <wpisy.length; i++){
    mojePosty += `
    <div class="post">
    <h4>${wpisy[i].titel}</h4>
    <span class="badge dark_aqua shadow new-badge" style="font-size: 12px;">${wpisy[i].update}</span>
    <p>${wpisy[i].content}</p>
    <img src="${wpisy[i].img}">
    <hr>
    </div>
    `
}
posts.innerHTML = mojePosty;