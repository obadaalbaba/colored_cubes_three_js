 // fix animate function: keeps removing box infinitely, uses global variables directly and indirectly
 // TODO LIST: 1. default values for function inputs, 2. check all variable and function names 3. messages for user 4. switch statement 5. open with html direct
 
 //list of basic yz orientations
orientationsList = [ [0,0] , [0,Math.PI/2] , [0,Math.PI*3/2] , [Math.PI/2,0], [Math.PI,0] , [Math.PI*3/2,0] ];
  //random numbers to dictate orientations for cubes A & B: 0-->Red  1-->Yellow  2-->Blue  3-->Purple  4-->Green  5-->Black
randomOrientationA = Math.floor(Math.random() * (6 - 0) + 0);
randomOrientationB = Math.floor(Math.random() * (6 - 0) + 0);
isSameColor = randomOrientationA==randomOrientationB;
cubeBIsBlack = randomOrientationB==5;
cubeBIsRed = randomOrientationB==0;
cubeBIsGreen = randomOrientationB==4;
cubeBIsBlue = randomOrientationB==2;
cubeBIsYellow = randomOrientationB==1;
cubeBIsPurple = randomOrientationB==3;
 //random numbers to dictate random trajectory
randomTrajectoryX = Math.random() * (1 + 1) - 1;
randomTrajectoryY = Math.random() * (1 + 1) - 1;
randomTrajectoryZ = Math.random() * (1 + 1) - 1;
 //cube size and initial speeds
cubeSize = 1
speedAX = 0.02;
speedBX = -0.02;

function moveCube(cube, speed){
    cube.position.x += speed;
}
function moveRandom(cube){
    cube.position.x += randomTrajectoryX;
    cube.position.y += randomTrajectoryY;
    cube.position.z += randomTrajectoryZ;
}
function positionCube( cube, position, size, orientation1, orientation2 ){
    cube.position.x = position*size;
    cube.rotation.y = orientation1;
    cube.rotation.z = orientation2;
}
function noCollision(cube,size){
    return cube.position.x>size/2;
}
 //adding scene and camera as per three.js documentaion. Played around with camera position
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.5, 1000);
camera.position.z = 5;
camera.position.y = 1.5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.background = new THREE.Color(0x808080);
 //creating a cube
const geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
 //loading six images for cube A and creating a texture array
var textureAllA = [];
var  texture1A = new THREE.TextureLoader().load("colorImages/redA.png");
var  texture2A = new THREE.TextureLoader().load("colorImages/greenA.png");
var  texture3A = new THREE.TextureLoader().load("colorImages/blueA.png");
var  texture4A = new THREE.TextureLoader().load("colorImages/yellowA.png");
var  texture5A = new THREE.TextureLoader().load("colorImages/purpleA.png");
var  texture6A = new THREE.TextureLoader().load("colorImages/blackA.png");
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture1A } ));
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture2A } ));
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture3A } ));
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture4A } ));
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture5A } ));
textureAllA.push(new THREE.MeshBasicMaterial( { map: texture6A } ));
 //loading six images for cube B and creating another texture array
var textureAllB = [];
var  texture1B = new THREE.TextureLoader().load("colorImages/greenB.png");
var  texture2B = new THREE.TextureLoader().load("colorImages/redB.png");
var  texture3B = new THREE.TextureLoader().load("colorImages/yellowB.png");
var  texture4B = new THREE.TextureLoader().load("colorImages/blueB.png");
var  texture5B = new THREE.TextureLoader().load("colorImages/blackB.png");
var  texture6B = new THREE.TextureLoader().load("colorImages/purpleB.png");
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture1B } ));
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture2B } ));
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture3B } ));
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture4B } ));
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture5B } ));
textureAllB.push(new THREE.MeshBasicMaterial( { map: texture6B } )); 

const cubeA = new THREE.Mesh( geometry, textureAllA );
const cubeB = new THREE.Mesh( geometry, textureAllB );
positionCube(cubeA, -3, cubeSize, orientationsList[randomOrientationA][0], orientationsList[randomOrientationA][1] );
positionCube(cubeB, 3, cubeSize, orientationsList[randomOrientationB][0], orientationsList[randomOrientationB][1]) ;
scene.add( cubeA, cubeB );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

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
    } else{
        
    }
}
animate();