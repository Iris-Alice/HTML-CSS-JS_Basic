var game = {
    startTime: null,
    stopTime: null,
    displayArea: document.getElementById('display-area'),

    start: function () {
        game.startTime = Date.now();
        document.body.onkeypress = game.stop;
    },

    stop: function () {
        game.stopTime = Date.now();
        var resultTime = (game.stopTime - game.startTime) / 1000;

        if (resultTime >= 9.5 && resultTime <= 10.5) {
            game.displayArea.innerText = resultTime + '秒でした。すごい！';
        } else {
            game.displayArea.innerText = resultTime + '秒でした。残念！';
        }
    }
};

if(confirm('OKを押して10秒だと思ったら何かキーを押してください'))
{
    game.start();
    console.log(game.startTime);
    console.log(game.stopTime);
}