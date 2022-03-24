window.onload=function(){
    console.log("loaded")
    let button = document.getElementById("spotifyLink");
    let playlist = document.getElementById("spotify");
    button.addEventListener("click", () => {
        if(playlist.style.visibility == 'visible')
        {playlist.style.visibility = 'hidden';}
        else
        {playlist.style.visibility = 'visible';}
    });
}
