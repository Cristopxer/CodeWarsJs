// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {  
  url = url.replace("www.", "").split("//");
  return url[1] ? url[1].split(".")[0] : url[0].split(".")[0];

  // return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

console.log(domainName("www.google.com"));
