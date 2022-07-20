
import plattform from '../img/plattform3.png'
import flowers from '../img/flowers.png'
import mountains from '../img/mountain1.png'
import trees from '../img/trees.png'
import grass from '../img/grass.png'

console.log(plattform)
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5
class Player {

    constructor() {
        this.position = {
            x: 30,
            y: 30
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }
    }
}

class Plattform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y,
            
        }

        this.image = image
        this.width = 500
        this.height = 232
        
    }

    draw() {
        //ctx.fillStyle = 'green'
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Scenery {
  constructor({x, y, image}) {
      this.position = {
          x,
          y,
          
      }

      this.image = image
      this.width = 500
      this.height = 232
      
  }

  draw() {
      //ctx.fillStyle = 'green'
      //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
      ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}

const scenery = [
  new Scenery({
    x:0,
    y:0,
    image: createImage(mountains)
  }),
  new Scenery({
    x:0,
    y:250,
    image: createImage(trees)
  }),
  new Scenery({
    x:0,
    y:350,
    image: createImage(grass)
  })
]


function createImage(imgSrc){
  const image = new Image()
  image.src = imgSrc
  return image
}


const plattformImage = createImage(plattform)


const plattforms = [
  new Plattform({x: 0, y:500, image: plattformImage}), 
  new Plattform({x: 600, y:300, image: plattformImage})
]


const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },

}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    scenery.forEach( scenery => {
      scenery.draw()
    }
    )

    plattforms.forEach(plattform => {
        plattform.draw()
    })
    player.update()
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    }
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    }
    else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            plattforms.forEach(plattform => {
                plattform.position.x -= 5
            })
            scenery.forEach(scenery => {
            scenery.position.x -= 3
            })

        }
        else if (keys.left.pressed) {
            scrollOffset -= 5
            plattforms.forEach(plattform => {
                plattform.position.x += 5
            })
            scenery.forEach(scenery => {
              scenery.position.x += 3
              })
        }
        
    }


    plattforms.forEach(plattform => {

        if (player.position.y + player.height <= plattform.position.y
            && player.position.y + player.height + player.velocity.y >= plattform.position.y
            && player.position.x + player.width >= plattform.position.x
            && player.position.x <= plattform.position.x + plattform.width) {
            player.velocity.y = 0
        }
    })

    if (scrollOffset > 2000)
    {
        alert("Congratulations, you win!")
    }

    if(player.position.y > canvas.height)
    {
      alert("You lose!")
  }

}


addEventListener('keydown', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = true
            break

        case 87:
            console.log('up')
            break

    }

})

addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            console.log('left')
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = false
            break

        case 87:
            console.log('up')
            player.velocity.y -= 20
            break

    }

})

animate()