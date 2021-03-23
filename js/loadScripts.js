function loadDriversStart(){
    loadLeagues()

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

          createHTMLTable()
      } else {
        console.log('error')
      }
    }
    
    request.send()

}

function createHTMLTable(){
  for (var i = 0; i <= tableLen - 1; i++){
    tableLine = '<tr><th></th><th></th></tr><tr><td>'
    tableLine += 'P' + (i + 1) + '</td><td>'
    tableLine += '<select id="DriverList' + String(i) + '" onchange="change()">'
    tableLine += '</select></td></tr>'

    document.getElementById('table').innerHTML += tableLine;
  }
  tableLine ='</tr>'
  document.getElementById('table').innerHTML += tableLine;

  writeToDropdowns()
}

function writeToDropdowns(){
  
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

  setCurrentPicks()
}

function setCurrentPicks() {
  // get data from database for user and team

  // parse and shit

  // TEMP
  var user = 'Logan'
  var userData = ['HAM','BOT','VER','RIC','VET']

  // add current driver picks to each dropdown
  for(var j = 0; j < tableLen; j++){
    var driverstring = 'DriverList' + j;
    var sel = document.getElementById(driverstring);
    sel.value = userData[j]
  }
}