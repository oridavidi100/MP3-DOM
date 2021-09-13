
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
        const children = []
        const ul = document.createElement("ul");
        for (let i = 0; i < 5; i++)
        {
            if (arguments[i] === arguments[4])
            {
                arguments[i] = durationConvertor(arguments[4]);
            }
            let list = document.createElement("li"); 
            list.innerText = arguments[i]
            ul.append(list);
        }
        let currentImg= document.createElement("img");
        currentImg.src= arguments[5];
        ul.appendChild(currentImg);
        children.push(ul)
        const classes = []
        classes.push(["song"]) // CSS later
        const attrs = { onclick: `playSong(${arguments[0]})`,}
        return createElement("div", children, classes, attrs, arguments[0])
    }
    


/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs }) {
    const children = []
    const classes = []
    const attrs = {}
    return createElement("div", children, classes, attrs)
}

function createElement(tagName, children = [], classes = [], attributes = {}, id) {
    const element = document.createElement(tagName);
    for (let child of children)
    {
        element.appendChild(child);
    }
    element.classList.add(classes);
    Object.entries(attributes).forEach(([key,value]) => {
        if (key !== undefined) {
            element.setAttribute(key, value);
        }
    })

    element.id = id;
    return element;
}
