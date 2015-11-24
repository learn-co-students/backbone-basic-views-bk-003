app = {};

function bootstrap() {
  // instantiate your view object here
  app.mainView = new MyView();
  // attach your view object to the app object as a property
  // where the name is mainView

  // and append your view object's HTML to the body tag
  $('body').append(app.mainView.el);
}