window.onload = function(){
    fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${API_key}`).then(con_to_json).then(function(data){
        generateImg(data);
    });
}
function generateImg(data){
    const container = document.getElementById('img_cont')
    for(let i=0;i<data.length;i++){
        const singleItem = data[i];
        const card = document.createElement('div')
        const img  = document.createElement('img')
        const anchor = document.createElement('a')

        card.classList.add('item')
        img.src = singleItem.urls.thumb;
        anchor.href = `./detail.html?id=${singleItem.id}`
        card.style.borderColor = singleItem.color;

        anchor.appendChild(img)
        card.appendChild(anchor)
        container.appendChild(card)
    }
}