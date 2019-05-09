// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, {Component} from 'react'
import App.css from './App'


class Print extends Component {

print = () => {
    return "I am a component"
}
render() {
    this.print

return (
    <h1>{this.print}</h1>
)
}
} export default Print

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array

const jsLoop = (arr) => {
    for (let i = 0; i < arr.length; i++){
        return `${arr[i]} is at index ${i}`
    }
}

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var steal = (array) => {
const lowest = []
for(let i = 0; i < array.length; i++) {
    if(array[i] < lowest){
        max.push(array[i])
    }else{
        return
    }
return lowest
    }
}
