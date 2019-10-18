const getWord = async () => {

    const res = await fetch('/hello');
    const word = await res.text();

    document.getElementById('random-word').innerText = word;
}

getWord();  

const getPosts = async () => {

    const res = await fetch('/api/posts');
    const posts = await res.json();

    posts.forEach(post => {
        const li = document.createElement('li')
        const text = document.createTextNode(post.title)
        li.appendChild(text)
        document.getElementById('posts').appendChild(li);
    });


}

getPosts();