
function removeSong(songId) {
   
    document.getElementById(`song-${songId}`).remove();
    let songIndex = player.songs.indexOf(songId)
    player.songs.splice(songIndex,1);
  
    for (let i=0; i<player.playlists.length; i++){
      for (let j=0; j<player.playlists[i].songs.length; j++){
        if (player.playlists[i].songs[j] === songId)
          player.playlists[i].songs.splice(j,1);
      }
    }
  }
    function playSong(songId) {
    // const el = document.getElementById(songId);
    // el.style.backgroundColor = "green";
    // el.style.innerHTML = "Hello World";
    alert("You are playing song number " + songId);
    const ya = document.getElementById(`song-${songId}`);
    ya.style.backgroundColor="green";
    setTimeout(() =>{
      ya.style.backgroundColor="lightgray";
    },1000)
  }
  function maxID (arr)
  {
    let max=0;
    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i].id > max)
        max = arr[i].id;
    }
    return max;
  }
  

function addSong({ title, album, artist, duration, coverArt }) {
    const id=maxID(player.songs)+1;
    const newSong = { id, title, album, artist, duration, coverArt };
    player.songs.unshift(newSong);
    player.songs.sort(compareTitle);
    const songElm = createSongElement(newSong);
    document.getElementById("songs").insertAdjacentElement('beforeend',songElm);
}


function addSongEvent(event) {
    const title = event.path[1].children[1].children[0].value;
    const album = event.path[1].children[1].children[1].value;
    const artist = event.path[1].children[1].children[2].value;
    const duration = durationSec(event.path[1].children[1].children[3].value);
    const coverArt = event.path[1].children[1].children[4].value;
    return addSong({ title, album, artist, duration, coverArt });
}


function generateSongs() {
    const songsDiv = document.getElementById("songs");
    for (let song of player.songs) {
        songsDiv.append(createSongElement(song));
    }
    songsDiv.addEventListener("click", handleSongClickEvent);
}
 
function createSongElement({ id, title, album, artist, duration, coverArt }){
    const children = []
    const classes = []
    const attrs ={id:`song-${id}`}
    const removeso=createElement("button",["remove"],["remove-song"],{onclick:`removeSong(${id})`})
    const playSon=createElement("button",["play"],["playS"],{onclick: `playSong(${id})`})
    const artistEl = createElement("div", [" Artist: ",artist],["artists"]);
    const idEl=createElement("div",["id:",id],["id"]);
    const titleEl=createElement("div",[" title:",title],["title"]);
    const albumEl=createElement("div",[" album:",album],["album"]);
    const durationEl = createElement("div", [ "Duration: ", durationConvert(duration)],[(durationColor(duration))]);
    const coverImageArtUrl = coverArt;
    const imgEl = createElement("img", [] ,["album-art"], {src: coverImageArtUrl});
    children.push(idEl,titleEl,albumEl, artistEl, durationEl, imgEl,removeso,playSon);
    classes.push("song")

    return createElement("div", children, classes, attrs)  
    }

    function createPlaylistElement({ id, name, songs }) {
    const children = []
    const classes = []
    const attrs = {}
    const nameEl = createElement("span", [name],["name"]);
    const idEl=createElement("span",[id],["pId"]);
    const songsEl=createElement("span",[songs],["songs"]);
    const durationEl=createElement("span",[durationConvert(playlistDuration(id))]);
    children.push(" id:",idEl," name:",nameEl," songs:",songsEl," duration :",durationEl)
    classes.push("playlists")
    return createElement("div", children, classes, attrs)

}

function createElement(tagName, children = [], classes = [], attributes = {}) {
    const el = document.createElement(tagName);
        
    // Children
    for(const child of children) {
        el.append(child);
    }
    
    // Classes
    for(const cls of classes) {
        el.classList.add(cls);
    }
    
    // Attributes
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    
    return el;
    }


    const songdiv= document.getElementById("songs");
    const playlistDiv= document.getElementById("playlists")
    
    function PrintAllSongs()
    {
        for(let song of player.songs)
        {
            const { id, title, album, artist, duration, coverArt}= song;
            const songElem = createSongElement({id,
                                                title,
                                                album, 
                                                artist, 
                                                duration, 
                                                coverArt});
            songdiv.appendChild(songElem);
        }
    }
    function PrintAllPlaylists()
    {
        for(let playlist of player.playlists)
        {
            const { id, name, songs}= playlist;
            const playlistElem = createPlaylistElement({id, name, songs});
            playlistDiv.appendChild(playlistElem);
        }
    }
    PrintAllSongs();
PrintAllPlaylists();
document.getElementById("add-button").addEventListener("click", addSongEvent);

function durationColor(duration){
    if (duration<120){
      return "less";
    }
    if(duration>420 ){
        return "more"
    }
    if (duration>=120&&duration<=420){
        return "between"
    }
}

function compareTitle(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 1;
}