function songDecoder(song) {
  return song
    .split("WUB")
    .filter((word) => word !== "")
    .join(" ");
}

console.log(songDecoder('WUBIWUBAMWUBWUBWUBX'));