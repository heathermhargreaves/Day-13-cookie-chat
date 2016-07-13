angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //In your controller you'll have a getMessages function and a postMessage function, but should be placed on $scope.
  // $scope.message;
  $scope.message;


  $scope.getMessages = function() {
    //setting messages to getMessages as it is inoked
    $scope.messages = messageService.getMessages()
    //telling getMessages to wait to return data once it has data from API
    .then(function(response) {
      //setting return value of response from web api get request to messages
      $scope.messages = response.reverse();
    });
  };
  //invoking function getMessages to display messages
  $scope.getMessages();

  $scope.postMessage = function(message) {
    messageService.postMessage(message)
    .then($scope.getMessages);
    $scope.message = '';
  };
  //The getMessages function will call the getData method on the messageService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)



  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will then post it to the backend.




  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  // setInterval(function(){
  //   $scope.getMessages();
  // }, 1500);
});
