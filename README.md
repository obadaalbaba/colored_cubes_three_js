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

## Libraries and Concepts Used
The code uses the three.js library. This library is widely used for 3D animations and games.
Some basic 3D geometry consepts were used as well. For example, a list of basic orientations was used to randomize the initial postion:

const orientationsList = [ [0,0] , [0,Math.PI/2] , [0,Math.PI*3/2] , [Math.PI/2,0], [Math.PI,0] , [Math.PI*3/2,0] ];

Using the [0,0] transformation leaves the cube in it's default position where its red side faces the other cube. Using the [0,Math.PI/2] transformation causes the cube to rotate by 90 degrees along the z-axis causing its yellow side to face the other cube.

## How the Colors Were Applied

## Assumptions
Cube A's starting position is on the left side of the screen and cube B's starting position is on the right side of the screen. Using this assumption, we can detect a collision when cube B's x position is less than half its size.
Not all 24 orientations of the cubes are needed for this excersise. We only use six orientations per cube so that we have all 36 outcomes.

## Solution Formulation
