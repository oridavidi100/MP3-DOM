
 function playSong(songId) {
        const selectedSong = document.getElementById(songId);
        const classes = []
        classes.push(["selected"])
    
        const songs = document.getElementsByClassName("song");
        for (let song of songs) {
            song.classList.remove(classes)
        }
        selectedSong.classList.add(classes);
    }
    
    function createSongElement({ id, title, album, artist, duration, coverArt }) {
        const artistEl = createElement("span", [artist]);
        
        const durationEl = createElement("span", ["" + duration] ,["duration", "short-duration"], {onclick: `console.log('${duration}')`});
      
        const coverImageArtUrl = "https://townsquare.media/site/295/files/2015/09/Razors-Edge.jpg";
        const imgEl = createElement("img", [] ,["album-art"], {src: coverImageArtUrl});
      
        return createElement("div", ["Artist: ", artistEl, "Duration: ", durationEl, imgEl]);
      }

    function createPlaylistElement({ id, name, songs }) {
        const children = []
    
        const ul= document.createElement("ul");
        for(let i=0; i<3; i++)
        {
            let list= document.createElement("li");
            list.innerHTML = arguments[i];
            ul.appendChild(list);
        }
        children.push(ul);
        const classes = []
        classes.push(["playlist"])
        const attrs = {}
        return createElement("div", children, classes, attrs, id)
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


sortedSongs();

sortedPlaylists(); 

printAllSongs();

printAllPlaylists();