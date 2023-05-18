
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => reload(data))


let body = document.querySelector('body')
function reload(arr) {
    for (let i of arr) {
        let box = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('p')
        name.classList.add('p')
        img.classList.add('act_img')

        img.src = i.thumbnailUrl
        name.innerHTML = i.title

        body.append(box)
        box.append(img, name)
    }

}