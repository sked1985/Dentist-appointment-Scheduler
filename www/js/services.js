angular.module('starter.services', [])

.factory('Doctors', function(){


  var doctors = [{
    id: 0,
    name: 'Barry Doyle',
    tagLine: "Visit my clinic",
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  },{
    id: 1,
    name: 'Max Lynx',
    tagLine: "Any year now",
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Matt gallery',
    tagLine: "Boom",
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  },{
    id: 3,
    name: 'Declan Byrbe',
    tagLine: "Any year now",
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  },{
    id: 4,
    name: 'Barry Mc Gettigan',
    tagLine: "Any year now",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return{
    all: function(){
      return doctors;
    },
    remove: function(doctor){
      doctors.splice(doctors.indexOf(doctor), 1);
    },
    get: function(doctorId){
      for(var i = 0; i < doctors.length; i++){
        if(doctors[i].id ===parseInt(doctorId)){
          return doctors[i];
        }
      }
      return null;
    }
  };
});
