import key from './test'

console.log(key)

let gifHolder = document.querySelector('.gif')

let data;

async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    
    try {
        const response = await fetch(endpoint);
        const jsonData = await response.json();
        data = jsonData.data;
        for (let i = 0; i < data.length; i++) {
            const img = document.createElement('img');
            img.src = data[i].images.fixed_height.url;
            gifHolder.appendChild(img);
            console.log(data[i].embed_url)
        }
    } catch (error) {
        console.error("You've had the following error: \n", error);
    }
}

getImage('tacobell');