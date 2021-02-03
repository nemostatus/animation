let img = new Image()
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
img.onload = () => {init()}
let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d')
const scale = 2
const width = 16
const height = 18
const scaledWidth = width* scale
const scaledHeight = height * scale
function init(){
    ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
}