Backbone views are responsible for one section of the DOM.  They should be able to respond to all the events in that section of the DOM as well as know how to generate the HTML for that portion of the DOM.  Backbone views almost always have at least two main functions: initialize and render.  The initialize method often calls the render method.  So when the backbone view is initialized, it automatically generates all the HTML that it needs.  Each backbone view has a property called "el".  It holds an internal string of HTML that you can later access and insert into the DOM.  Think of it as your own mini in memory DOM that hasn't yet been inserted into the actual webpage's DOM.  You can add and remove things to it without asking the browser to do any rendering.  This allows you to have a bunch of different functions that help you build certain pieces of the view, and keep appending those into your internal view DOM and only when it's fully constructed do one big jQuery append statement into the actualy body of the page. Backbone also gives you a property called $el.  This is just a nice shorthand way of taking that DOM string and wrapping it in a jquery object. Another pattern you'll often see in the render method is that the method returns "this".  This is so you can chain calls to this object because it always just returns itself.

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

As you can see in the filestructure of this lab, backbone projects commonly have a lib directory where all the required libraries are stored.  It also has a view directory where you put all your backbone view files (javascript files that generate HTML).  In the main directory you have an app.js file that actually will instantiate your view objects and append their HTML to the DOM.  We're using jasmine for testing so you don't actually need an index.html file, but we put it in so you can see how you'd actually run this backbone project in the browser.  The index file would load each dependency in the correct order using a script tag, and then run the actual app.js file which would actually build the HTML which the browser would then render.