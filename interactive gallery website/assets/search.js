window.onload = function(){
    const loc = window.location.href;
    const url = new URL(loc);
    const search_params = new URLSearchParams(url.search);

    if(!search_params.has('q') || search_params.get('q') == ""){
        window.location.href = './index.html'
    }

    fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${search_params.get('q')}&client_id=${API_key}`).then(con_to_json).then(function(data){
        generateImg(data.results);

        document.getElementsByName('q')[0].value = search_params.get('q')
        document.getElementById('search_query').innerHTML = `<b style="color:#974">${search_params.get('q').toUpperCase()}</b>`
    });

}


function generateImg(data){
    const container = document.getElementById('res_cont')
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