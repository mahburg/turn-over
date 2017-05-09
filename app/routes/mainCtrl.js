angular.module('app').controller('mainCtrl', function($scope, mainSrv) {
    $scope.deck = mainSrv.getShuffledDeck();
    $scope.player1 = mainSrv.draw($scope.deck, 6);
    $scope.player2 = mainSrv.draw($scope.deck, 6);
    $scope.deckLen = $scope.deck.length;
})