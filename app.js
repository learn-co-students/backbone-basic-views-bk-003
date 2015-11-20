app = {};

function bootstrap() {
  // instantiate your view object here
  var mainView = new MainView()
  app.mainView = mainView;
  $('body').append(mainView.el)

  // attach your view object to the app object as a property
  // where the name is mainView

  // and append your view object's HTML to the body tag
}