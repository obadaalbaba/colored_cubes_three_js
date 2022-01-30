//Define constants. 
const cubeSize = 1;
const colors = ['red', 'yellow', 'blue', 'purple', 'green', 'black'];
//orientationsList is a list of six unique transformations. Each transformation results in a different color facing the other cube
const orientationsList = [
    { 
        y: 0,
        z: 0
    },
    {
        y: Math.PI,
        z: 0
    },
    {
        y: 0,
        z: Math.PI * 3 / 2
    },
    { 
        y: 0,
        z: Math.PI / 2
    },
    {
        y: Math.PI / 2,
        z: 0
    },
    {
        y: Math.PI * 3 / 2,
        z: 0
    }
]
//initial speeds
const initialSpeedAX = 0.02;
const initialSpeedBX = -0.02;