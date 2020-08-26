var imageNumbericator = 0
var test =
    {
        url: "https://shorturl.at/mswX9"
    }
    
    
function play() {
    var playButton = document.getElementById('button')
    
    if (imageNumbericator == 0) {
        playButton.src = './Images/pause.png';
        imageNumbericator = 1;
        Audio.test.url.play();
        console.log(test.url)
    } else {
        playButton.src = './Images/play.png';
        imageNumbericator = 0;
        test.pause();
    }
}




