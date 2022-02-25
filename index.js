function findMatching(drivers, string){
return drivers.filter( e => e.toUpperCase() === string.toUpperCase()) 
}

function fuzzyMatch(drivers, string){
return drivers.filter(e => e.startsWith(string))
}

function matchName(drivers, string){
return drivers.filter( e => e.name === string )
}