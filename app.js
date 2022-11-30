let img = document.querySelector("#img")
function selectImg(event){
    let image = event.target.files[0]

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
        img.src = e.target.result;
        localStorage.setItem('img', e.target.result)
    }

}

function getImgFromLocalStorage(){
    let imgUrl = localStorage.getItem('img')
    console.log(typeof imgUrl)
    if(imgUrl !== null){
        img.src = imgUrl
    }
}
getImgFromLocalStorage()