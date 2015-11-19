app = {};

function bootstrap() {
  // instantiate your view object here
  var view = new MainView();
  app.mainView = view
  // attach your view object to the app object as a property
  // where the name is mainView
  $("body").append(view.el);
  // and append your view object's HTML to the body tag
}