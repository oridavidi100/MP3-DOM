const player = {
    songs: [
        {
            id: 1,
            title: "Vortex",
            album: "Wallflowers",
            artist: "Jinjer",
            duration: 242,
            coverArt: "./images/cover_art/jinjer_vortex.jpg",
        },
        {
            id: 2,
            title: "Vinda",
            album: "Godtfolk",
            artist: "Songleikr",
            duration: 160,
            coverArt: "./images/cover_art/songleikr_vinda.jpg",
        },
        {
            id: 7,
            title: "Shiroyama",
            album: "The Last Stand",
            artist: "Sabaton",
            duration: 213,
            coverArt: "./images/cover_art/sabaton_shiroyama.jpg",
        },
        {
            id: 3,
            title: "Thunderstruck",
            album: "The Razors Edge",
            artist: "AC/DC",
            duration: 292,
            coverArt: "./images/cover_art/acdc_thunderstruck.jpg",
        },
        {
            id: 4,
            title: "All is One",
            album: "All is One",
            artist: "Orphaned Land",
            duration: 270,
            coverArt: "./images/cover_art/orphaned_land_all_is_one.jpg",
        },
        {
            id: 5,
            title: "As a Stone",
            album: "Show Us What You Got",
            artist: "Full Trunk",
            duration: 259,
            coverArt: "./images/cover_art/full_trunk_as_a_stone.jpg",
        },
        {
            id: 6,
            title: "Sons of Winter and Stars",
            album: "Time I",
            artist: "Wintersun",
            duration: 811,
            coverArt: "./images/cover_art/wintersun_sons_of_winter_and_stars.jpg",
        },
    ],
    playlists: [
        { id: 1, name: "Metal", songs: [1, 7, 4, 6] },
        { id: 5, name: "Israeli", songs: [4, 5] },
    ],
}


function durationConvert(duration)
{
  let min = Math.floor(duration / 60);
  let sec = duration % 60;
  
  if (min < 10){
    min = "0" + String(min);
  }
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  return min+':'+sec
}

function playlistDuration(id) {
    let sum=0;
    let list;
   for (let x=0;x<player.playlists.length;x++){
      if(player.playlists[x].id===id){
        list= player.playlists[x]
      }
    }
    for (let i=0;i<list.songs.length;i++){
      for (let j=0;j<player.songs.length;j++){
        if (list.songs[i]===player.songs[j].id){
         sum +=player.songs[j].duration;
        continue;
        }
      }
    }
    return sum
}

function removeSong(id) {
  let a=0;
    for(let x=0;x<player.songs.length ;x++){
      if (player.songs[x].id===id) a=1}
    if (a===0)
      throw ("non-existent ID,try another one");
  for (let i=0;i<player.songs.length ;i++){
    if (player.songs[i].id===id){
      player.songs.splice(i,1)
    }
  }
  for (let i=0;i<player.playlists.length;i++){
    for (let j=0;j<player.playlists[i].songs.length;j++){
      if (player.playlists[i].songs[j]===id)
        player.playlists[i].songs.splice(j,1);
    }
  }
}
