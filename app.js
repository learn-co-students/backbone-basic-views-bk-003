app = {};

function bootstrap() {
  var mainView = new MainView// instantiate your view object here
  app.mainView = mainView; // attach your view object to the app object as a property
  $('body').append(mainView.el)// where the name is mainView

  // and append your view object's HTML to the body tag
}