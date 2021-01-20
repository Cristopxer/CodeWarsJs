function songDecoder(song){        
    song = song.split('WUB');
    
    return song.join(' ').trim();
  }

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))