# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Smart components have a constructor and hold their own individual states that can be acted upon and called upon. This makes them the brain behind the dumb components, as the dumb components can only perform alterations on states through the parent component functions.

 //Googled Answer



 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.

 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

When we use yarn add, we are adding a package to our file that allows us to read the file differently. When we add react, we are installing a package that allows us to compile a react file more easily.

 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}

        }
      }

      render() {
          let {recipes} = this.state
          const newRecipe = recipes.map(function(recipe, index){
          });

            return(
                let {recipes} = this.state
          <ul>
                <li>{recipes}</li>
                <li key={newRecipe.name}>{newRecipe.name}</li>
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
search, submit, email

 //Googled Answer
month, number, password, radio .....

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

States are a saved snapshot of a current value of an object that can be manipulated.

 //Googled Answer

The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer


 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
