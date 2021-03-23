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
  }