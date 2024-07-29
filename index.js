function newElement(type, src, pos, l, bot) {
    let element = document.createElement(type)
    element.src = src
    element.style.position = pos
    element.style.left = l
    element.style.bottom = bot
    document.body.append(element)

    return element;
}

function newImage(type, src, pos, l, bot) {
    let element = newElement(type, src, pos, l, bot)
}

function newItem(type, src, pos, l, bot) {
    let element = newElement(type, src, pos, l, bot)
    element.addEventListener('dblclick', function(){
        element.remove() 
    })
}

function newBackground(type, src, pos, l, bot) {
    let element = newElement(type, src, pos, l, bot)
    element.style.zIndex = -100;
}


newImage('img', 'assets/green-character.gif', 'fixed', '100px', '100px')
newImage('img', 'assets/pine-tree.png', 'fixed', '450px', '200px')
newImage('img', 'assets/well.png', 'fixed', '500px', '425px')
newImage('img', 'assets/crate.png', 'fixed', '150px', '200px')
newImage('img', 'assets/pillar.png','fixed', '350px', '100px')
newImage('img', 'assets/tree.png', 'fixed', '200px', '300px')
newItem('img', 'assets/sword.png', 'fixed', '500px', '405px')
newItem('img', 'assets/shield.png', 'fixed', '165px', '185px')
newItem('img', 'assets/staff.png', 'fixed', '600px', '100px')


for (let left = 0; left < 17; left++) {
    for (let bottom = 0; bottom < 4; bottom++) {
        let l = 100 * left + 'px'; 
        let b = 100 * bottom + 'px'
        newBackground('img', 'assets/grass.png', 'fixed', l, b)
    }
}

for (let i = 0; i < 17; i++) {
    for (let j = 4; j < 9; j++) {
        newBackground('img', 'assets/sky.png', 'fixed', i * 100  + 'px', 100 * j + 'px')
    }
}