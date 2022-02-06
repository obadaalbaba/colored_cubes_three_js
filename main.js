//this file depends on constants and functions defined in the other files: constants.js & main.js
//adding scene and camera as per three.js documentaion. Played around with camera positionconst scene = createScene(sceneColor = 0x808080);
const scene = createScene(color=0x808080);
const renderer = createRenderer();
const camera = createCamera(cameraPositionZ = 5, cameraPositionY = 1.5);
//Create Cubes
const cubeA = createCube(cubeSize, cubeName = 'A',colors);
const cubeB = createCube(cubeSize, cubeName = 'B',colors);
//positioning and orienting the cubes randomly
initializeCubeOrientation(cubeA, initialPosition = -3, colors, flip=false);
initializeCubeOrientation(cubeB, initialPosition = 3, colors, flip=true);
//Adding Cubes to the scene
scene.add(cubeA, cubeB);
//random trajectory speeds
randomTrajectory = getRandomTrajectory(initialSpeed);
//Animate
animate();