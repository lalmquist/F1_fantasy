var currentLeague = '';
function loadLeagues() {
    // get data from database for user teams
    // parse and shit
  
    // TEMP
    var user = 'Logan'
    var userLeagues = ['League01','League02']
  
    var str = ''
    var sel = document.getElementById('userLeagueSelect');
    // add current driver picks to each dropdown
    for(var j = 0; j < userLeagues.length; j++){
        str += "<option>" + userLeagues[j] + "</option>"
    }
    sel.innerHTML = str;

    // get league data
    currentLeague = sel.value
  }

function leagueChange() {
    var sel = document.getElementById('userLeagueSelect');
    loadDriversStart(false)
}

function getLeagueData(league) {
    // do transaction stuff
    if (league == 'League01'){
        return ['SAI','GAS','HAM','RIC','BOT']
    } else {
        return ['None','VET','VER','RIC','SAI']
    }
}