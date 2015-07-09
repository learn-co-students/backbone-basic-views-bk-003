function bootstrap() {
 var mainView = new MainView();
 $("body").append(mainView.el); 
 return mainView;
}