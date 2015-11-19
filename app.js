app = {};

function bootstrap() {
  myView = new mainView();
  // instantiate your view object here
  app['mainView'] = myView;
  // attach your view object to the app object as a property
  // where the name is mainView
  debugger
  $("body").append(app.mainView.el);
}

bootstrap()
