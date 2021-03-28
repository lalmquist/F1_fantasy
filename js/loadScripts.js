var driversSelected = []

function firstLoad(){
  createHTMLTable()
  loadDriversStart(true)
}

function loadDriversStart(loadLeagueBOOL){
    drivers = [selectText];
    var d = new Date();
    var year = d.getFullYear()

    var request = new XMLHttpRequest()

    // TEMP
    year = 2020

    request.open('GET', 'http://ergast.com/api/f1/' + year + '/drivers.json', true)
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
    
      if (request.status >= 200 && request.status < 400) {
          for (var driver in data.MRData.DriverTable.Drivers){
            var newDriver = data.MRData.DriverTable.Drivers[driver].code
            drivers.push(newDriver)
          }
          // create league options
          if (loadLeagueBOOL) {
            loadLeagues()
          }
          writeToDropdowns()
      } else {
        console.log('error')
      }
    }
    request.send()
}

function createHTMLTable(){
  // create driver options
  for (var i = 0; i <= tableLen - 1; i++){
    tableLine = '<tr><th></th><th></th></tr><tr><td>'
    tableLine += 'P' + (i + 1) + '</td><td>'
    tableLine += '<select id="DriverList' + String(i) + '" onchange="change()">'
    tableLine += '</select></td></tr>'

    document.getElementById('table').innerHTML += tableLine;
  }
  tableLine ='</tr>'
  document.getElementById('table').innerHTML += tableLine;
}

function writeToDropdowns(){
    // remove all  options
    for(var j = 0; j < tableLen; j++){
      var driverstring = 'DriverList' + j;
      var sel = document.getElementById(driverstring);
      var selected = sel.value
      var str = ""
      sel.innerHTML = str;
      sel.value = selected
      }
  
  // add available drivers to each dropdown
  for(var j = 0; j < tableLen; j++){
      var driverstring = 'DriverList' + j;
      var sel = document.getElementById(driverstring);
      for(var i = 0; i < drivers.length; i++) {
          var opt = document.createElement('option');
          opt.innerHTML = drivers[i];
          opt.value = drivers[i];
          sel.appendChild(opt);
      }
  }
  // get current league
  var sel = document.getElementById('userLeagueSelect');
  currentLeague = sel.value
  driversSelected = getLeagueData(currentLeague)

  // set picks for current league
  setCurrentPicks(driversSelected)
}

function setCurrentPicks(driversSelected) {
  // add current driver picks to each dropdown
  for(var j = 0; j < tableLen; j++){
    var driverstring = 'DriverList' + j;
    var sel = document.getElementById(driverstring);
    sel.value = driversSelected[j]
  }
}