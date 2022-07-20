
import plattform from '../img/plattform3.png'
import flowers from '../img/flowers.png'
import mountains from '../img/mountain1.png'
import trees from '../img/trees.png'
import grass from '../img/grass.png'
import standright from '../img/IdleRight.png'
import runright from '../img/Run2.png'
import runleft from '../img/RunBack.png'

console.log(plattform)
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
const playerOffsetY = 20;
const gravity = 0.5
let isJumping = false;

class Player {

  constructor() {
    this.speed = 10

    this.position = {
      x: 30,
      y: 30
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 250
    this.height = 250
    this.image = createImage(standright)
    this.frames = 0
    this.sprites = {
      stand:{
        right: createImage(standright),
        cropwidth: 350
      },
      run:{
        left: createImage(runleft),
        right: createImage(runright),
        cropwidth: 250
      }
    }
    this.currentSprite = this.sprites.stand.right
    this.currentCropWidth = 177
  }

  draw() {
    ctx.drawImage(
      this.currentSprite,
      510 * this.frames,
      0,
      350,
      261,
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height)
  }

  update() {
    this.frames++
    if(this.frames > 15 && this.currentSprite === this.sprites.stand.right)
    {this.frames = 0}
    else if(this.frames > 12 && this.currentSprite === (this.sprites.run.right))
    {this.frames = 0}
    else if(this.frames > 12 && this.currentSprite === (this.sprites.run.left))
    {this.frames = 0}
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    }
  }
}

class Plattform {
  constructor({ x, y, image }) {
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
  constructor({ x, y, image }) {
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




function createImage(imgSrc) {
  const image = new Image()
  image.src = imgSrc
  return image
}
let plattformImage = createImage(plattform)

let player = new Player()
let plattforms = []
let scenery = []

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },

}

let scrollOffset = 0

function init() {


   plattformImage = createImage(plattform)

   player = new Player()

   

   plattforms = [
    new Plattform({ x: 0, y: 500, image: plattformImage }),
    new Plattform({ x: 600, y: 300, image: plattformImage }),
    new Plattform({ x: 1200, y: 250, image: plattformImage }),
    new Plattform({ x: 2000, y: 500, image: plattformImage })
  ]

   scenery = [
    new Scenery({
      x: 0,
      y: 0,
      image: createImage(mountains)
    }),
    new Scenery({
      x: 0,
      y: 250,
      image: createImage(trees)
    }),
    new Scenery({
      x: 0,
      y: 350,
      image: createImage(grass)
    })
  ]

   scrollOffset = 0

}

function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  scenery.forEach(scenery => {
    scenery.draw()
  }
  )

  plattforms.forEach(plattform => {
    plattform.draw()
  })
  player.update()
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  }
  else if ((keys.left.pressed && player.position.x > 100) 
  || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
    player.velocity.x = -player.speed
  }
  else {
    player.velocity.x = 0

    if (keys.right.pressed) {
      scrollOffset += player.speed
      plattforms.forEach(plattform => {
        plattform.position.x -= player.speed
      })
      scenery.forEach(scenery => {
        scenery.position.x -= player.speed * 0.66
      })

    }
    else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5
      plattforms.forEach(plattform => {
        plattform.position.x += player.speed
      })
      scenery.forEach(scenery => {
        scenery.position.x += player.speed * 0.66
      })
    }

  }


  plattforms.forEach(plattform => {

    if (player.position.y + player.height <= (plattform.position.y+playerOffsetY)
      && player.position.y + player.height + player.velocity.y >= (plattform.position.y +playerOffsetY)
      && player.position.x + player.width >= plattform.position.x
      && player.position.x <= plattform.position.x + plattform.width) {
      player.velocity.y = 0
      isJumping = false
    }
  })

  if (scrollOffset > 2000) {
    init()
    alert("Congratulations, you win!")
  }

  if (player.position.y > canvas.height) {
    init()
    alert("You lose!")
  }

}


addEventListener('keydown', ({ keyCode }) => {

  switch (keyCode) {
    case 65:
      console.log('left')
      keys.left.pressed = true
      player.currentSprite = player.sprites.run.left
      break

    case 83:
      console.log('down')
      break

    case 68:
      console.log('right')
      keys.right.pressed = true
      player.currentSprite = player.sprites.run.right
      break

    case 87:
      if(!isJumping)
      {
      console.log('up')
      player.velocity.y -= 15
      isJumping = true
      break
      }
      else{
        break
      }
      
  }

})

addEventListener('keyup', ({ keyCode }) => {

  switch (keyCode) {
    case 65:
      keys.left.pressed = false
      player.currentSprite = player.sprites.stand.right
      console.log('left')
      break

    case 83:
      console.log('down')
      break

    case 68:
      console.log('right')
      keys.right.pressed = false
      player.currentSprite = player.sprites.stand.right
      break

    case 87:
      console.log('up')
      
      break

  }

})

init()
animate()