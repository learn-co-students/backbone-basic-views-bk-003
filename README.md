# Intro to Backbone Views

## Objectives

1. Understand:
  * `el` and `$el`
  * The Initialize Function
  * The Render Function
  * Example
2. Learn how views fit into a Backbone.js file structure.

## Instructions
1. Initialize and render a your view in `views/main.js`.
2. Create an app namespace in `app.js`
3. Attach your view to it the newly created namespace.
4. Append the view's HTML to the `<body>` of your html document.

### About views

Backbone views are responsible for individual sections of the DOM.  They should be able to respond to all the events in that section of the DOM as well as know how to generate the HTML for that portion of the DOM.  Backbone views almost always have at least two main functions: `initialize()` and `render()`. Before we go over these functions, however, let's take a look at two properties that all Backbone views have: `el` and `$el`.

#### `el` and `$el`

Each Backbone view has a property called `el`. This `el` property holds an internal string of HTML that you can later access and insert into the DOM. Think of it as your own mini in-memory DOM that hasn't yet been inserted into the actual webpage's DOM. You can add and remove things to it without asking the browser to do any rendering. This allows you to have a bunch of different functions that help you build certain pieces of the view, and keep appending those into your internal view DOM, and only when it's fully constructed do one big jQuery append statement into the actualy body of the page. Backbone also gives you a property called `$el`. This is just a nice shorthand way of taking that DOM string and wrapping it in a jQuery object.

####General Structure
Much like models in Backbone.js views also extend Backbone. For a full example see below. 

#### Initialize

The initialize method often calls the render method and is responsible for running the view. This pattern creates the following behavior: when the Backbone view is initialized, it automatically generates all the HTML that it needs. 

#### Render

The pattern you will often see in the `render()` function is that the function returns an instance of itself, or `this`. This return of `this` allows us developers to chain calls to this object because it always just returns itself.

See below for a complete example


#### Example

```javascript
MyView = Backbone.View.extend({
  initialize : function() {
    this.render();
  },
  render : function() {
    this.$el.append("<div>some HTML</div>")
    return this;
  }
})
```

## File Structure

```shell
├── app.js
├── index.html
├── lib
│   ├── backbone.js
│   ├── jasmine-jquery.js
│   ├── jquery.min.js
│   └── underscore.js
└── views
    └── main.js
```

As you can see in the file structure of this lab, Backbone projects commonly have a lib directory where all the external, required libraries are stored. This lab has already required the Backbone, jQuery, and Underscore libraries for you.

It also has a view directory where you, appropriately, put all your Backbone view files (JavaScript files that generate HTML). In the main directory, you have an `app.js` file that actually will instantiate your view objects and append their HTML to the DOM.

Since we're using Jasmine for testing, you don't actually need the standard `index.html` file, but we put it in so you can see how you'd actually run this Backbone project in the browser. The index file would load each dependency in the correct order using a script tag, and then run the actual `app.js` file which would build the HTML that the browser would then render.

## Resources

* [What is a view?](https://cdnjs.com/libraries/backbone.js/tutorials/what-is-a-view/)
