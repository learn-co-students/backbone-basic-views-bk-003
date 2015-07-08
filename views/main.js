MainView = Backbone.View.extend({
  initialize : function() {
    this.render();
  },
  render : function() {
    this.$el.append("<h1>blake</h1>");
    return this; 
  }
})