# TodoList

## Overview
This project handles a list of Todos (actions, tasks, etc) in a way the user can **add**, **complete** and **remove** elements from the list.

## Setup
In order to copy this project, please clone it with *git clone* or download it from GitHub.

* To run the project, use: *yarn start* or *npm start*

## Initialization
This project does **NOT** use *create-react-app*. A custom **Webpack** configuration has been done.

## Storage
The information for this project has been handled only *locally*. Not database or file storage has been used. All the state is managed through *Redux*. In this particular, the application has:

* One reducer to handle the *Todos*
* Actions to handle *add Todo*, *change completed of a given Todo* and *remove a Todo*

## Animations
The list has been animated using **ReactCSSTransitionGroup**

## Styles
The styles have been created using SCSS, and divided into four categories:

* base - Top level and configuration styles.
* components - Components Styles
* mixins - Reusable CSS like *layouts* or *responsive medias*
* animations - To handle animations styles

## Deployment
A copy of this project has been configured for deployment and deployed to Heroku. The URL is *https://mytodolistproject.herokuapp.com/* (it uses the free hosting plan, so it can take a couple of seconds to load). The configuration used (that includes a bit of *Express*) can be found on the next URL: *https://github.com/alanespinet/TodoDep*.

## Thank you very much.
