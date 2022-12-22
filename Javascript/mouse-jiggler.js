noise.seed(Math.random());

for (var x = 0; x < canvas.width; x++) {
  for (var y = 0; y < canvas.height; y++) {
    // All noise functions return values in the range of -1 to 1.

    // noise.simplex2 and noise.perlin2 for 2d noise
    var value = noise.simplex2(x / 100, y / 100);
    // ... or noise.simplex3 and noise.perlin3:
    var value = noise.simplex3(x / 100, y / 100, time);

    image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
  }
}


const el = document.querySelector('mouse');

function render (a) {
    const noiseX = (noise.simplex2(0, a*0.0005) + 1) / 2;
    const noiseY = (noise.simplex2(1, a*0.0005) + 1) / 2;

    const x = noiseX * window.innerWidth;
    const y = noiseY * window.innerHeight;

    el.style.transform = 'translate(${x}px, ${y}px)';
    requestAnimationFrame(render);
}

requestAnimationFrame(render);



const el = document.querySelector('.mouse');
let lastMove = 0;

// When the mouse is being moved
function onMouseMove (e) {
  // Get the x and y coordinates
  x = e.clientX;
  y = e.clientY;
  
  // Save the last move time
  lastMove = Date.now();
}

// Update the mouse position based on x & y
function updateMouse (x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function render (a) {
  // Check if last move was more than 500ms ago
  if (Date.now() - lastMove > 500) {
    // Generate a fake mouse position
    
    //Uses the rest of the library that isn't being used but idk what else is in the library
        // and idk how to actually use the ellipsis
    ...
    updateMouse(x, y);
  }
}

// Listen to mouse events
window.addEventListener('mousemove', onMouseMove);
