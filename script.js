// ベンダープレフィックス部分
// （先行実装であることを示す慣習）
navigator.getUserMedia =
    navigator.getUserMedia          ||  // Specofication
    navigator.webkitGetUserMedia    ||  // Chrome
    navigator.mozGetUserMedia       ;   // Firefox

window.URL =
    window.URL          ||
    window.webkitURL    ;
    
window.addEventListener('load', function(){
  navigator.getUserMedia(
        {audio: true, video:true},
        function(stream){
            var video = document.getElementById('video');
            video.src = window.URL.createObjectURL(stream);
            video.play();
        },
        function(error){
            console.error(error);
        }
    );
});
