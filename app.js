app = {};

function bootstrap() {
  // instantiate your view object here
  // var mainView = new MainView();
  // attach your view object to the app object as a property
  // where the name is mainView
  app.mainView = new MainView();
  // and append your view object's HTML to the body tag
  $('body').append(app.mainView.el);
}

bootstrap();