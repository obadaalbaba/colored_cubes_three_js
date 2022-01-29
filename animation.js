 //adding scene and camera per three.js documentaion. Played around with position
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.5, 1000);
camera.position.z = 5;
camera.position.y = 1.5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.background = new THREE.Color(0x808080);
 //list of basic yz orientations
angleListYZ = [ 
    [0 , 0], 
    [0 , Math.PI/2],
    [0 , Math.PI*3/2],
    [Math.PI/2 , 0],
    [Math.PI , 0],
    [Math.PI*3/2 , 0]
 ];
  //random numbers to dictate orientations for cubes A & B: 0-->Red  1-->Yellow  2-->Blue  3-->Purple  4-->Green  5-->Black
randomIntegerYZA = Math.floor(Math.random() * (6 - 0) + 0);
randomIntegerYZB = Math.floor(Math.random() * (6 - 0) + 0);
 //creating booleans
isSameColor = randomIntegerYZA==randomIntegerYZB;
cubeBIsBlack = randomIntegerYZB==5;
cubeBIsRed = randomIntegerYZB==0;
cubeBIsGreen = randomIntegerYZB==4;
cubeBIsBlue = randomIntegerYZB==2;
cubeBIsYellow = randomIntegerYZB==1;
cubeBIsPurple = randomIntegerYZB==3;
 //random numbers to dictate random trajectory
randomTrajectoryX = Math.random() * (1 + 1) - 1;
randomTrajectoryY = Math.random() * (1 + 1) - 1;
randomTrajectoryZ = Math.random() * (1 + 1) - 1;

function moveCube(cube1, speed1){
    cube1.position.x += speed1;
}

 //creating a cube
size = 1
const geometry = new THREE.BoxGeometry(size,size,size);

/*for ( var i = 0; i < geometry.faces.length; i++){
    geometry.faces[i].color.setHex ( Math.random() * 0xffffff);
}*/

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
 //const cubeA = new THREE.MeshBasicMaterial( geometry, { color: 0xffffff, vertexColors: true } );
cubeA.position.x = -3*size
cubeA.rotation.y = angleListYZ[randomIntegerYZA][0];
cubeA.rotation.z = angleListYZ[randomIntegerYZA][1];
speedAX = 0.02;
speedAY = 0;
speedAZ = 0;



const cubeB = new THREE.Mesh( geometry, textureAllB );
cubeB.position.x = 3*size
cubeB.rotation.y = angleListYZ[randomIntegerYZB][0];
cubeB.rotation.z = angleListYZ[randomIntegerYZB][1];
speedBX = -0.02;
speedBY = 0;
speedBZ = 0;

 //creating a scene and animation
scene.add( cubeA, cubeB );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    if(cubeB.position.x>(size/2)) {
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
        cubeA.position.x += randomTrajectoryX;
        cubeA.position.y += randomTrajectoryY;
        cubeA.position.z += randomTrajectoryZ;
    } else{
        
    }
}
animate();