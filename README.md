# TodoList

## Overview
This project handles a list of Todos (actions, tasks, etc) in a way the user can **add**, **complete** and **remove** elements from the list.

## Storage
The information for this project has been handled only *locally*. Not database or file storage has been used. All the state is managed through *Redux*. In this particular, the application has:

* One reducer to handle the *Todos*
* Actions to handle *add todo*, *change completed of a give todo* and *remove a todo*

## Animations
The list has been animated using **ReactCSSTransitionGroup**

## Styles
The styles have been created using SCSS, and divided into some categories:

* base - Top level and configuration styles.
* components - Components Styles
* mixins - Reusable CSS like *layouts* or *responsive medias*
* animations - To handle animations styles
