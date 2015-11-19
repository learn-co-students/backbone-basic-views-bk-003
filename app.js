app = {};

function bootstrap() {
  // instantiate your view object here

  // attach your view object to the app object as a property
  // where the name is mainView

  // and append your view object's HTML to the body tag

  view = new MainView;
  app.mainView = view;
  $("body").append(view.el);
}