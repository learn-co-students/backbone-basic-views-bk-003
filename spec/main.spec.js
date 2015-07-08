'use strict';

describe("test rendering, adding ids and handling clicks", function() {
  var gameView;
  beforeEach(function() {
    // setFixtures('<div id="container"></div>'); 

  });

  describe( "#render & addIds", function() {
    it("should create insert a in HTML when its initialized", function() {
      run();
      expect($("body")).toContainHtml('<h1>blake</h1>');
    });     
  });
}