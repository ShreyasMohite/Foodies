const showfood = () => {
    const img = document.querySelector("img");
    fetch("https://foodish-api.herokuapp.com/api/").then((data) => {
        return data.json();
    }).then((actualdata) => {
        images = actualdata.image;
        img.setAttribute("src", images);
    })

}

const food = () => {
    showfood();
}