angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
    $location.url('/app/home');
  };
})

.controller('HomeCtrl', function($scope, $ionicModal) {

  $scope.description="  Welcome to the dentist appointment scheduler. Select your location and make an appointment"

  $scope.openAbout = function(){
    $ionicModal.fromTemplateUrl('templates/about.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.cancelAbout = function(){
    $scope.modal.hide();
  }

  $scope.openComments = function(){
    $ionicModal.fromTemplateUrl('templates/comments.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.cancelComments = function(){
    $scope.modal.hide();
  }

  $scope.provinces = [
    { title: 'Leinster', id: 1, clinics:3},
    { title: 'Munster', id: 2, clinics:6},
    { title: 'Connacht', id: 3, clinics:5},
    { title: 'Ulster', id: 4, clinics:3}
  ];
})

.controller('ProvincesCtrl', function($scope, $stateParams, $ionicLoading, $timeout) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay:0
    });

    $timeout(function () {
      $ionicLoading.hide();
    $scope.items = [
      {id:1, county: 'Carlow', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/3/38/Carlow_County_Crest.svg'},
      {id:2, county: 'Dublin', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/6/66/Dublin_crest.svg'},
      {id:3, county: 'Kildare', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/en/c/c5/KildareCrest.png'},
      {id:4, county: 'Kilkenny', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/2/20/Kilkenny_County_Crest.svg'},
      {id:5, county: 'Laois', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/7/7f/Laoiscocologo.png'},
      {id:6, county: 'Longford', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/e/e4/Longford_county_arms.png'},
      {id:7, county: 'Louth', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/b/bb/Louth_county_arms.png'},
      {id:8, county: 'Meath', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/e/e5/Meath_coa.svg'},
      {id:9, county: 'Offaly', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/d/d7/Offaly_crest.svg'},
      {id:10, county: 'Westmeath', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg'},
      {id:11, county: 'Wexford', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/e/ef/IRL_COA_County_Wexford_3D.svg'},
      {id:12, county: 'Wicklow', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/7/73/Wicklow_county_arms.png'}
    ];},2000);



})

.controller('MunsterCtrl', function($scope, $stateParams, $ionicLoading, $timeout) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay:0
    });

    $timeout(function () {
      $ionicLoading.hide();
    $scope.items = [
      {id:1, county: 'Carlow', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/3/38/Carlow_County_Crest.svg'},
      {id:2, county: 'Dublin', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/6/66/Dublin_crest.svg'},
      {id:12, county: 'Wicklow', artist: 'Nickelback', image: 'http://upload.wikimedia.org/wikipedia/commons/7/73/Wicklow_county_arms.png'}
    ];},2000);



})

.controller('DoctorsCtrl', function($scope, Doctors){

  $scope.doctors = Doctors.all();
  

})

.controller('ImageGalleryCtrl', function($scope){
  $scope.items = [
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg'
  }
]
});
