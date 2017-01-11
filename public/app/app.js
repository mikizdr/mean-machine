// create our angular app
angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

// create the controllers
// this will be the controller for the ENTIRE site
.controller('mainController', function() {
    
    // bind this to vm (view-model)
    var vm = this;

    // create a bigMessage variable to display in our view
    vm.bigMessage = 'A smooth see never made a skilled sailor.';
})

// home page specific controller
.controller('homeController', function() {

    // bind this ti vm (view-model)
    var vm = this;

    // create a message for the home page
    vm.message = 'Welcome! This is the home page.'
})

// create about page controller
.controller('aboutController', function() {

    // bind this to vm (view-model)
    var vm = this;

    // create a message for the about page
    vm.message = 'Look! I am an obut page!';
})

// create contact page controller
.controller('contactController', function() {

    // bind this to vm (view-model)
    var vm = this;

    // create a message for the contact page
    vm.message = 'Contact us! BTW this is just a demo.';
});