// create your view object here and call it MainView
// it should extend (inherit) from the main backbone view object

// your view object should have two properties that point to functions:
//   1. initialize
//   2. render

// 1. initialize
//    - this function should call on the render function

// 2. render
//    - this function should append the following HTML to $el
//      <h1>blake</h1>
//    - it should return the instance of the class

var MainView = Backbone.View.extend({
  initialize : function() {
    this.render();
  },
  render : function() {
    this.$el.append("<h1>blake</h1>")
    return this;
  }
});