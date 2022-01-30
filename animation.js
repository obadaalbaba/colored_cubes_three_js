// fix animate function: keeps removing box infinitely, uses global variables directly and indirectly
// TODO LIST: 1. default values for function inputs, 2. check all variable and function names 
//3. messages for user after the outcome 4. switch statement 5. open with html direct 
//5. separate the js into 3 files main.js includes the main pieces. Very light 7-8 lines max One file includes all constants including Boolean, One file with all methods
//6. change CreateCube to one method. Create folder colorImages/A/…..png
//7. Initial speed and Size part of CreateCube method
//adding scene and camera as per three.js documentaion. Played around with camera position
const scene = createScene(color=0x808080);
const renderer = createRenderer();
const camera = createCamera(cameraPositionZ=5, cameraPositionY=1.5);
const cubeSize = 1;
const cubeA = createCubeA(cubeSize);
const cubeB = createCubeB(cubeSize);
//list of basic yz orientations
const orientationsList = [ [0,0] , [0,Math.PI/2] , [0,Math.PI*3/2] , [Math.PI/2,0], [Math.PI,0] , [Math.PI*3/2,0] ];
//random numbers to dictate orientations for cubes A & B: 0-->Red  1-->Yellow  2-->Blue  3-->Purple  4-->Green  5-->Black
const randomOrientationA = randomInteger(6,0);
const randomOrientationB = randomInteger(6,0);
//boolean variables for orientations
const isSameColor = randomOrientationA==randomOrientationB;
const cubeBIsBlack = randomOrientationB==5;
const cubeBIsRed = randomOrientationB==0;
const cubeBIsGreen = randomOrientationB==4;
const cubeBIsBlue = randomOrientationB==2;
const cubeBIsYellow = randomOrientationB==1;
const cubeBIsPurple = randomOrientationB==3;
//positioning and orienting cubes
positionCube(cubeA, -3, cubeSize, orientationsList[randomOrientationA][0], orientationsList[randomOrientationA][1] );
positionCube(cubeB, 3, cubeSize, orientationsList[randomOrientationB][0], orientationsList[randomOrientationB][1]) ;
scene.add( cubeA, cubeB );
//cube initial speeds
const speedAX = 0.02;
const speedBX = -0.02;
//random numbers to dictate random trajectory
const randomTrajectoryX = randomNumber(1,-1);
const randomTrajectoryY = randomNumber(1,-1);
const randomTrajectoryZ = randomNumber(1,-1);
animate();

function createScene(color){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(color);
    return scene;
}
function createRenderer(){
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement ); //double check
    return renderer;
}
function createCamera(cameraPositionZ, cameraPositionY){
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.5, 1000);
    camera.position.z = cameraPositionZ;
    camera.position.y = cameraPositionY;
    return camera;
}
function createCubeA(cubeSize=1){
    const geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    const textureAllA = [];
    //loading six images for cube A and creating a texture array
    const  texture1A = new THREE.TextureLoader().load("colorImages/redA.png");
    const  texture2A = new THREE.TextureLoader().load("colorImages/greenA.png");
    const  texture3A = new THREE.TextureLoader().load("colorImages/blueA.png");
    const  texture4A = new THREE.TextureLoader().load("colorImages/yellowA.png");
    const  texture5A = new THREE.TextureLoader().load("colorImages/purpleA.png");
    const  texture6A = new THREE.TextureLoader().load("colorImages/blackA.png");
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture1A } ));
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture2A } ));
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture3A } ));
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture4A } ));
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture5A } ));
    textureAllA.push(new THREE.MeshBasicMaterial( { map: texture6A } ));
    const cubeA = new THREE.Mesh( geometry, textureAllA );
    return cubeA;
}
function createCubeB(cubeSize=1){
    const geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    const textureAllB = [];
    //loading six images for cube B and creating another texture array
    const  texture1B = new THREE.TextureLoader().load("colorImages/greenB.png");
    const  texture2B = new THREE.TextureLoader().load("colorImages/redB.png");
    const  texture3B = new THREE.TextureLoader().load("colorImages/yellowB.png");
    const  texture4B = new THREE.TextureLoader().load("colorImages/blueB.png");
    const  texture5B = new THREE.TextureLoader().load("colorImages/blackB.png");
    const  texture6B = new THREE.TextureLoader().load("colorImages/purpleB.png");
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture1B } ));
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture2B } ));
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture3B } ));
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture4B } ));
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture5B } ));
    textureAllB.push(new THREE.MeshBasicMaterial( { map: texture6B } ));
    const cubeB = new THREE.Mesh( geometry, textureAllB );
    return cubeB;
}
function randomInteger(upperLimmit, lowerLimit){
    return Math.floor(Math.random() * (upperLimmit - lowerLimit) + lowerLimit);
}
function positionCube( cube, position, size, orientation1, orientation2 ){
    cube.position.x = position*size;
    cube.rotation.y = orientation1;
    cube.rotation.z = orientation2;
}
function randomNumber(upperLimmit, lowerLimit){
    return Math.random() * (upperLimmit - lowerLimit) + lowerLimit;
}
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera ); //global
    if(noCollision(cubeB, cubeSize)) {
        moveCube(cubeA, speedAX);
        moveCube(cubeB, speedBX);
    } else if(isSameColor) {
        scene.remove(cubeA, cubeB);
    } else if(cubeBIsBlack){
        scene.remove(cubeA);
    } else if(cubeBIsRed){   
    } else if(cubeBIsGreen) {
        moveCube(cubeA, 2*speedAX);
    } else if(cubeBIsBlue) {
        moveCube(cubeA, -speedAX);
    } else if(cubeBIsYellow){
        moveCube(cubeA, speedAX/2);
    } else if(cubeBIsPurple){
        moveRandom(cubeA);
    } else{}
}
function noCollision(cube,size=1){
    return cube.position.x>size/2;
}
function moveCube(cube, speed){
    cube.position.x += speed;
}
function moveRandom(cube){
    cube.position.x += randomTrajectoryX;//global variable
    cube.position.y += randomTrajectoryY;//global variable
    cube.position.z += randomTrajectoryZ;//global variable
}