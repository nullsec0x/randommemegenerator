async function generateMeme() {
    try {
        const response = await fetch("https://meme-api.com/gimme/memes");
        const data = await response.json();
        
        document.getElementById("meme-img").src = data.url;
        document.getElementById("meme-title").textContent = data.title;
    } catch (error) {
        console.error("Error fetching meme:", error);
        document.getElementById("meme-title").textContent = "Failed to load meme 😢";
    }
}
