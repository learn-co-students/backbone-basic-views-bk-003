'use strict';

describe( "#boostrap", function() {
  it("should instantiate your view and return the view object", function() {
    bootstrap();
    expect(app.mainView.el).toContainHtml('<h1>blake</h1>')
  });

  it("should use the el property of your view to append the view to the body of the DOM", function() {
    bootstrap();
    expect($("body")).toContainHtml('<h1>blake</h1>');
  });      
});
