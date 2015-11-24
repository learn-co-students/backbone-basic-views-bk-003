app = {};

function bootstrap() {
  // instantiate your view object here
  // attach your view object to the app object as a property
  // where the name is mainView
  // and append your view object's HTML to the body tag
  app.mainView = new MainView();
  $('body').append(app.mainView.el)
}

