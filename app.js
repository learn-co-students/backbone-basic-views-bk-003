app = {};

function bootstrap() {
  // instantiate your view object here
  var mainView = new app.MainView;
  // attach your view object to the app object as a property
  // where the name is mainView
  app.mainView = mainView;
  // and append your view object's HTML to the body tag
  $("body").append(mainView.el);
}
