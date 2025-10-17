function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gXDXDBPT4D":
        Script1();
        break;
      case "6NzXL36frOJ":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.1;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

