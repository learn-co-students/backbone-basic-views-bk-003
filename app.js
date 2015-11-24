app = {};

function bootstrap() {
app.mainView = new mainView();
$('body').append(app.mainView.el);
  // where the name is mainView

  // and append your view object's HTML to the body tag
}
