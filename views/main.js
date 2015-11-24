// create your view object here and call it MainView
// it should extend (inherit) from the main backbone view object
// your view object should have two properties that point to functions:
//   1. initialize
//   2. render
var MainView = Backbone.View.extend({
  initialize: function() {  // is initialized

    this.render();
  },
  render: function(){  // when render function is called as page initializes,
    this.$el.append("<h1>blake</h1>") // self.element is made equal to html tag of blake and returned
    return this;
  }
})

// 1. initialize
//    - this function should call on the render function

// 2. render
//    - this function should append the following HTML to $el
//      <h1>blake</h1>
//    - it should return the instance of the class

