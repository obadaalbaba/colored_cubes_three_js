function createScene(sceneColor) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneColor);
    return scene;
}

function createRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

function createCamera(cameraPositionZ = 5, cameraPositionY = 1.5) {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    camera.position.z = cameraPositionZ;
    camera.position.y = cameraPositionY;
    return camera;
}

function createCube(cubeSize = 1, cubeName, colors) {
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const textures = colors.map((color) => {
        const texture = new THREE.TextureLoader().load("colorImages/" + cubeName + "/" + color + ".png");
        return new THREE.MeshBasicMaterial({
            map: texture
        });
    });
    const cube = new THREE.Mesh(geometry, textures);
    return cube;
}

function initializeCubeOrientation(cube, initialPosition ,colors ,flip=false) {
    //Initiate cube position
    cube.position.x = initialPosition;
    const color = getRandomColor(colors);
    cube.rotation.y = orientationsList[color]['y'];
    cube.rotation.z = orientationsList[color]['z'];
    cube.color=color;
    if(flip==true){cube.rotation.y += Math.PI;}
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    if(noCollision(cubeB, cubeSize)) {
        moveCube(cubeA, initialSpeed);
        moveCube(cubeB, -initialSpeed);
    } else if (cubeA.color == cubeB.color) {
        scene.remove(cubeA, cubeB);
    } else if (cubeB.color == 'black') {
        scene.remove(cubeA);
    } else if (cubeB.color == 'green') {
        moveCube(cubeA, 2 * initialSpeed);
    } else if (cubeB.color == 'blue') {
        moveCube(cubeA, -initialSpeed);
    } else if (cubeB.color == 'yellow') {
        moveCube(cubeA, initialSpeed / 2);
    } else if (cubeB.color == 'purple') {
        moveRandom(cubeA);
    }
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomNumber(upperLimmit, lowerLimit) {
    return Math.random() * (upperLimmit - lowerLimit) + lowerLimit;
}

function noCollision(cube, size = 1) {
    return cube.position.x > size / 2;
}

function moveCube(cube, speed) {
    cube.position.x += speed;
}

function moveRandom(cube) {
    cube.position.x += randomTrajectory[0];
    cube.position.y += randomTrajectory[1];
    cube.position.z += randomTrajectory[2];
}
function vectorMagnitude(vector) {
    return Math.sqrt(Math.pow(vector[0],2)+Math.pow(vector[1],2)+Math.pow(vector[2],2));
}
function getRandomTrajectory(initialSpeed) {
    let randomTrajectory = [randomNumber(1, -1), randomNumber(1, -1), randomNumber(1, -1)];
    const magnitudeTrajectory = vectorMagnitude(randomTrajectory);
    return randomTrajectory.map(function(item) {return item*initialSpeed/magnitudeTrajectory});
}