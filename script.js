const generateBtn = document.querySelector("#generate-btn");
const imageContainer = document.querySelector("#image-container");
const imageWidthSlider = document.querySelector("#image-width-slider");

imageWidthSlider.addEventListener("input", function() {
    const newWidth = this.value;
    imageContainer.style.width = `${newWidth}px`;
});

generateBtn.addEventListener("click", function() {
    const query = "gradient"; 
    const orientation = "landscape";
    const url = `https://api.unsplash.com/photos/random?client_id=8e3-k6F1YxExm_bcDeN5g8Amoo9li_I42NUAPhb3q2o&query=${query}&orientation=${orientation}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            const image = document.createElement("img");
            image.src = imageUrl;
            imageContainer.innerHTML = "";
            imageContainer.appendChild(image);
        })
        .catch(error => console.log(error));
});


