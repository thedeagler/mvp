angular.module('codeOff.game', [])

.controller('gameCtrl', ['$scope', '$document', function ($scope, $document) { 
  $scope.input = $scope.text;
  $scope.incorrect = {};
  
  $scope.text = 'Readymade +1 echo park pork belly XOXO. Tote bag kogi gentrify, blue bottle forage artisan cred butcher 8-bit. DIY cred hashtag, bushwick occupy echo park messenger bag quinoa irony pop-up mlkshk. Chia you probably haven\'t heard of them kitsch DIY tacos. Master cleanse irony microdosing, art party tattooed twee before they sold out deep v skateboard mustache. Vice master cleanse fixie, wayfarers single-origin coffee salvia scenester squid microdosing plaid organic listicle fingerstache. Leggings mumblecore gastropub, letterpress cliche hashtag celiac.';
  $scope.typed = [];
  $scope.toType = $scope.text.split('');
  $scope.pos = 0;

  $document.on('keydown', function(e) {
    if(e.keyCode) {
      // Backspace
      if(e.keyCode === 8) {
        e.preventDefault();
      }
      // Super
      else if (e.keyCode === 93 || e.keyCode === 91) {
        e.preventDefault();
      }
    }
  });

  $scope.keyCheck = function(e) {
    // If typed letter is correct, add the letter to the "typed" array
    if(String.fromCharCode(e.charCode) === $scope.toType[0]) {
      console.log('gotem');
      $scope.typed.push($scope.toType.shift());
    }
    // If typed letter is incorrect, add it to the incorrectly typed letters object
    else {
      console.log('nope');
      if(!!!$scope.incorrect.hasOwnProperty(e.charCode)) {
        $scope.incorrect[e.charCode] = 1;
      }
      else {
        $scope.incorrect[e.charCode]++;
      }
    }
  };


}]);

    /*shift= 16
    ctrl = 17
    alt  = 18
    caps = 20
    tab  = 9
    enter= 13
    bksp = 8
    super= 91/93
    up   = 38
    down = 40
    left = 37
    right= 39
    del  = 46*/
// function keyDownEvent(e) {
//     var other = {};
//     var output= {};
//     output['meta'] = {};
//     var html = '';

//     e = (e) ? e : ((event) ? event : null);

//     if (e) {
//         output['keyCode']   = (e.keyCode) ? e.keyCode : 'N/A';
//         output['charCode'] = (e.charCode) ? e.charCode : 'N/A';
//         output['meta']['shift']     =   e.shiftKey  ? true : false;
//         output['meta']['ctrl']      =   e.ctrlKey   ? true : false;
//         output['meta']['alt']       =   e.altKey    ? true : false;
//         output['meta']['meta']      =   e.metaKey   ? true : false;

//         html = document.getElementById('output')
//         return html.innerHTML += '<pre>keyDown : ' + JSON.stringify(output) + '</pre>';
//     } else {
//         return 'error';
//     }
// }

// function keyPressEvent(e) {
//     var other = {};
//     var output= {};

//     e = (e) ? e : ((event) ? event : null);

//     if (e) {
//         output['keyCode']   = (e.keyCode) ? e.keyCode : 'N/A';
//         output['charCode'] = (e.charCode) ? e.charCode : 'N/A';

//         html = document.getElementById('output')
//         return html.innerHTML += '<pre>keyPress : ' + JSON.stringify(output) + ' Character : <strong>' +  String.fromCharCode(output['charCode']) + '</strong></pre><hr/>';
//     } else {
//         return 'error';
//     }
// }

// var test = document.getElementById('test');
// test.onkeydown = keyDownEvent;
// test.onkeypress = keyPressEvent;