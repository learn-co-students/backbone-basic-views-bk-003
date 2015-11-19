app = {}

function bootstrap() {
  var mainView = new MainView
  app.mainView = mainView
  $("body").append(mainView.el)
  // instantiate your view object here

  // attach your view object to the app object as a property
  // where the name is mainView

  // and append your view object's HTML to the body tag
}

//note to self. when instantiating a new object the varirable should be regular camel case ex: 'mainView'
//but the actual object should be ex 'MainView', the first letter should be capitalized