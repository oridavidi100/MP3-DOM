
 function playSong(songId) {
    
    document.getElementById(songId).style.backgroundColor="green";
    alert("play"+songId)
}
 
function createSongElement({ id, title, album, artist, duration, coverArt }){
    
    const children = []
    const classes = []
    const attrs ={}
    const playSon=createElement("button",["p"],["playS"],{onclick: `playSong(${id})`,id:`${id}`})
    const removeButton=createElement("button",["b"],["removeB"],{onclick :`removeSong(${id})`,id:`${id}`})
    const artistEl = createElement("div", [" Artist: ",artist],["artists"]);
    const idEl=createElement("div",["id:",id],["id"]);
    const titleEl=createElement("div",[" title:",title],["title"]);
    const albumEl=createElement("div",[" album:",album],["album"]);
    const durationEl = createElement("div", [ "Duration: ", durationConvert(duration)],[(durationColor(duration))]);
    const coverImageArtUrl = coverArt;
    const imgEl = createElement("img", [] ,["album-art"], {src: coverImageArtUrl});
    children.push(idEl,titleEl,albumEl, artistEl, durationEl, imgEl,removeButton,playSon);
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