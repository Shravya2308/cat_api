alert(1);
let generate_btn = document.querySelector(".generate");
generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
   fetch("https://api.thecatapi.com/v1/images/search")
   .then(response => response.json()).then(data => 
    {
        let catImgUrl = data[0].url

        let catImgEl = document.createElement('img')
        catImgEl.setAttribute('src',`${catImgUrl}`)
        catImgEl.classList.add("showcase")  
        let catDiv = document.querySelector('.catDiv');
        catDiv.appendChild(catImgEl)
        
    })
    .catch(err => console.log(err))
}