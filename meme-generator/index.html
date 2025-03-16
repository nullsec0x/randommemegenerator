let displayedMemes = []; // Store previously displayed meme URLs

async function generateMeme() {
    try {
        const response = await fetch("https://meme-api.com/gimme/memes");
        const data = await response.json();

        // Check if meme is already displayed, retry if so
        if (displayedMemes.includes(data.url)) {
            console.log("Meme already displayed, fetching new meme...");
            generateMeme(); // Retry
        } else {
            // Add this meme to the displayed list
            displayedMemes.push(data.url);

            // Ensure the URL is an image
            if (data.url.endsWith(".jpg") || data.url.endsWith(".png") || data.url.endsWith(".gif")) {
                document.getElementById("meme-img").src = data.url;
                document.getElementById("meme-title").textContent = data.title;
            } else {
                // Retry if the URL is not an image
                generateMeme();
            }
        }
    } catch (error) {
        console.error("Error fetching meme:", error);
        document.getElementById("meme-title").textContent = "Failed to load meme 😢";
    }
}