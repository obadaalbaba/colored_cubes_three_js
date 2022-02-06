//Define constants. 
const cubeSize = 1;
const colors = ['red', 'yellow', 'blue', 'purple', 'green', 'black'];
//orientationsList is a list of six unique transformations. Each transformation results in a different color facing the other cube
const orientationsList = {
    red: { 
        y: 0,
        z: 0
    },
    yellow: {
        y: Math.PI,
        z: 0
    },
    blue: {
        y: 0,
        z: Math.PI * 3 / 2
    },
    purple: { 
        y: 0,
        z: Math.PI / 2
    },
    green: {
        y: Math.PI / 2,
        z: 0
    },
    black: {
        y: Math.PI * 3 / 2,
        z: 0
    }
};
//initial speed
const initialSpeed = 0.02;