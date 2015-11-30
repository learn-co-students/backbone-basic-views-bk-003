app = {};

function bootstrap() {
  var view = new mainView();
  app.mainView = view;
  $("body").append(view.el)
  // instantiate your view object here
  // attach your view object to the app object as a property
  // where the name is mainView

  // and append your view object's HTML to the body tag
}

bootstrap()
