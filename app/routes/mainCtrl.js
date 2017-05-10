angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {
    
    $scope.deck = mainSrv.getShuffledDeck();

    $scope.player1 = mainSrv.drawN($scope.deck, 6);
    $scope.player2 = mainSrv.drawN($scope.deck, 6);
    
    $scope.discard = [];

    // $scope.player1Flip = [0,0,1,0,0,1];
    $scope.player1Flip = [0,0,0,0,0,0];
    $scope.player2Flip = [0,0,0,0,0,0];

    $scope.discardTop = null;
    $scope.draw = function () {
        $scope.discard.push(mainSrv.draw($scope.deck));
        $scope.discardTop = $scope.discard[$scope.discard.length - 1];
    }
    $scope.deckLen = $scope.deck.length;

    $scope.flipDownCard = function (player, cardIndex) {
        if (player == 1) {
            $scope.player1Flip[cardIndex] = 1;
        } else if (player == 2){
            $scope.player2Flip[cardIndex] = 1;
        }
    }

    $scope.reshuffleDiscard = function () {
        $scope.deck = mainSrv.shufflePack($scope.discard);
        $scope.discard = [];
        $scope.discardTop = null;
    }
})