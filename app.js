var app = app || {};

function bootstrap() {
  var mainView = new MainView();
  app.mainView = mainView;
  $("body").append(mainView.el);
}