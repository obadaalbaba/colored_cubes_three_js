# colored_cubes_three_js
## Summary
This code renders two cubes that interact with each other. The goal of this project is to practice using javascript for 3D animations.
## How to Run the Code
1. Download the repository as a a zip file.
2. Extract the folder from the zip file.
3. Add the folder to an environment such as VSCode.
4. Right click on the .html file within VSCode and select "Run with Live Server".
5. Refresh the webpage as needed.

## Initial Problem
1. Set up a 3D environment where two cubes travel toward each other. 
2. Cube A and cube B are colored similarly. Each cube has a red, green, blue, yellow, purple and a black face.
3. The starting orientation of each cube is randomized independently.
The outcomes of the collisions are shown in the image titled "scenariosSummary".
## Assumptions
Cube A's starting position is on the left side of the screen and cube B's starting position is on the right side of the screen. Using this assumption, we can detect a collision when cube B's x position is less than half its size.
Not all 24 orientations of the cubes are needed for this excersise. We only use six orientations per cube so that we have all 36 outcomes.
The outcomes for cube B are not specified in most of the outcomes in the initial problem. We simply stop its motion to focus on cube A's outcome.
## Libraries and Concepts Used
The code uses the three.js library. This library is widely used for 3D animations and games.
Some basic 3D geometry consepts were used as well. For example, a list of basic orientations was used to randomize the initial postion:

const orientationsList = [ [0,0] , [0,Math.PI/2] , [0,Math.PI*3/2] , [Math.PI/2,0], [Math.PI,0] , [Math.PI*3/2,0] ];

Using the [0,0] transformation leaves the cube in it's default position where its red side faces the other cube. Using the [0,Math.PI/2] transformation causes the cube to rotate by 90 degrees along the z-axis causing its yellow side to face the other cube.

## How the Colors Were Applied

## Solution Formulation
