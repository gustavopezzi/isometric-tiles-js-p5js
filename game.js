const GRID_SIZE = 10;
const TILE_WIDTH = 100;
const TILE_HEIGHT = 50;
const MAX_HEIGHT = 80;

let grid = [
  [14, 23, 23, 23, 23, 23, 23, 23, 23, 13],
  [21, 32, 33, 33, 28, 33, 28, 33, 31, 20],
  [21, 34,  0,  0, 25, 33, 30,  1, 34, 20],
  [21, 34,  0,  0, 34,  1,  1, 10, 34, 20],
  [21, 25, 33, 33, 24, 33, 33, 33, 27, 20],
  [21, 34,  4,  7, 34, 18, 17, 10, 34, 20],
  [21, 34,  4,  7, 34, 16, 19, 10, 34, 20],
  [21, 34,  6,  8, 34, 10, 10, 10, 34, 20],
  [21, 29, 33, 33, 26, 33, 33, 33, 30, 20],
  [11, 22, 22, 22, 22, 22, 22, 22, 22, 12],
];

let tile_images = [];

let x_start = 0;
let y_start = 0;

function draw_grid() {
  x_start = width/2 - TILE_WIDTH/2;
  y_start = 50;
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      draw_tile((tile_images[grid[j][i]]), i, j);
    }
  }
}

function draw_tile(img, x, y) {
  let x_screen = x_start + (x - y) * TILE_WIDTH/2;
  let y_screen = y_start + (x + y) * TILE_HEIGHT/2;
  let z_offset = MAX_HEIGHT - img.height;
  image(img, x_screen, y_screen + z_offset);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 34; i++) {
    tile_images.push(loadImage("./tiles/tile-" + i + ".png"));
  }
}

function draw() {
  background("black");
  draw_grid();
}