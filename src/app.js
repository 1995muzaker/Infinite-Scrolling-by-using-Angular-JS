var myApp = angular.module('myApp', ['infinite-scroll']);
myApp.controller('DemoController', function($scope) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };
});

myApp.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);
myApp.controller('myCtrl', function($scope) {
    $scope.name = "Pune Fashion Week";
    $scope.date = "15 - 17";
    $scope.day = "April'17";    
    $scope.name1 = "Bangalore Music Week";
    $scope.date1 = "29 - 01";
    $scope.day1 = "May'17"; 
    $scope.name2 = "Delhi Art Festival";
    $scope.date2 = "29 - 01";
    $scope.day2 = "June'17";
    $scope.name3 = "New Years Festival";
    $scope.date3 = "29 - 01";
    $scope.day3 = "Dec'17 - Jan'18";  
});
myApp.controller('blogCtrl', function($scope) {
    $scope.date = "23 May 2018";
    $scope.name = "Blog Name";
    $scope.para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";    
    $scope.but = "More";
    $scope.date1 = "23 May 2018";
    $scope.name1 = "Blog Name";
    $scope.para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";    
    $scope.but1 = "More";
    $scope.date2 = "23 May 2018";
    $scope.name2 = "Blog Name";
    $scope.para2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";    
    $scope.but2 = "More";
    $scope.date3 = "23 May 2018";
    $scope.name3 = "Blog Name";
    $scope.para3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";    
    $scope.but3 = "More";
    
});

myApp.controller('eventController', function($scope) {
    $scope.names = "Video";
    $scope.user = "By User Name";
    $scope.date = "July 2018 in Fashion";   
    $scope.share = "Share"; 
    $scope.cmnt = "Comments 50";
    $scope.names1 = "Image";
    $scope.user1 = "By User Name";
    $scope.date1 = "July 2018 in Fashion";    
    $scope.share1 = "Share"; 
    $scope.cmnt1 = "Comments 50";
    $scope.names2 = "Image";
    $scope.user2 = "By User Name";
    $scope.date2 = "July 2018 in Fashion";    
    $scope.share2 = "Share"; 
    $scope.cmnt2 = "Comments 50";
    
});

myApp.controller('footer', function($scope) {
    $scope.place1 = "Pune";
    $scope.place2 = "Bangalore";
    $scope.place3 = "India";  
    $scope.f1 = "H.O.T (House of Talent)";
    $scope.f2 = "ROMA";
    $scope.f3 = "J.B Studio Sessions";
    $scope.f4 = "Events";
    $scope.f5 = "Talent Hunt";
    $scope.f6 = "Life Style Clubs";  
    $scope.f7 = "And More...";
});