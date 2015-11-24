app = {};  //instantiating new app object

function bootstrap() {

  
  // instantiate your view object here

  // attach your view object to the app object as a property
  // where the name is mainView
  app.mainView  /*a property of app is made    */ = new MainView  // new child value
  // and append your view object's HTML to the body tag
  $("body").append(app.mainView.el)  //the element from whats defined in MainView in Views is appended to the body
}
