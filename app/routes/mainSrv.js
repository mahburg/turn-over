angular.module('app').service('mainSrv', function () {
    let unshuffled = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH'];

    function shuffle(pack) {
        let shuffPack = pack.slice();
        let i = 0, j = 0, temp = null;
        for (i = shuffPack.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = shuffPack[i];
            shuffPack[i] = shuffPack[j];
            shuffPack[j] = temp;
        }
        return shuffPack;
    }

    
    this.getDeck = function () {
        return unshuffled;
    }
    this.getShuffledDeck = function(){
        return shuffle(unshuffled);
    }

    this.shufflePack = function (pack) {
        return shuffle(pack);
    }
    
    this.drawN = function (arr, n) {
        if (!n) {
            n = 1;
        }
        if (n > arr.length) {
            return -1;
        }
        let drawPack = [];
        for (let i = 0; i < n; i++){
            drawPack.push(arr.pop());
        }
        return drawPack;
    }

    this.draw = function (deck) {
        return deck.pop();
    }
    //flip card
    //draw/discard/exchange
    //score hand
    //match card flip
})