app = {};

function bootstrap() {
  // instantiate your view object here
    view = new MainView();
  // attach your view object to the app object as a property
  // where the name is mainView
    app.mainView = view

  // and append your view object's HTML to the body tag
  
  $("body").append(view.el)
}
