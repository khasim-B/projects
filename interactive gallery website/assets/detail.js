let likco;
const cotainer = document.querySelector(".related")
window.onload = function(){
    const loc = window.location.href;
    const url = new URL(loc)
    const search_params = new URLSearchParams(url.search);
    if(!search_params.has('id') || search_params.get('id') == ""){
        window.location.href = './index.html'
    }

    fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_key}`).then(con_to_json).then(function(data){
        generte_details(data)    
        likco = data.likes;
    })  
    
    
}
var islike = false;
function turncol(){
    islike = !islike;
    if (islike){
        document.getElementById("like").src = "./assets/favorite-heart-button.png"
        likco += 1;
    }else{
        document.getElementById("like").src = "./assets/favorite-heart-outline-button.png";
        likco -= 1;
    }
    document.getElementById("likes").value = likco;    

}

function generte_details(data){
    document.getElementById('search_img').src = data.urls.regular;
    document.getElementById('desc').innerHTML = data.alt_description;
    document.getElementById('author').innerHTML = data.user.name;
    document.getElementById('author').style.color = "#fff";
    document.getElementById('search_img').style.borderColor = data.color;
    document.getElementById('img_id').innerHTML = data.tags[Math.floor(Math.random(data.tags.length))].title;
    document.getElementById('likes').value = data.likes;
    document.getElementById('loca').innerHTML = data.user.location;
    document.getElementById('view').innerHTML = data.views;
    
    const date = new Date(data.created_at)
    const upload_date = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    document.getElementById('date').innerHTML = upload_date; 

    document.getElementById("port").href = data.user.social.portfolio_url
    document.getElementById("down").href = data.links.download;
    document.getElementById("pf-img").src = data.user.profile_image.medium;
}