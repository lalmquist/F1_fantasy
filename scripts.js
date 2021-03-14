function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

var selectText = "Click Here"
var drivers = [selectText, "HAM","BOT","VER"];
var driversAvailable = [];
var driversSelected = [];

// number of drivers to choose
var tableLen = 3;

function change(){
    // remove all non-selected options
    for(var j = 0; j < tableLen; j++){
        removeArray =[]
        var driverstring = 'DriverList' + j;
        var sel = document.getElementById(driverstring);
        var selected = sel.value
        var str = ""
        for(var n = 0; n < sel.options.length; n++){
            if (sel.options[n].value == selectText ||
                sel.options[n].value == selected) {
                    str += "<option>" + sel.options[n].value + "</option>"
                }
            }
        sel.innerHTML = str;
        sel.value = selected
        }
    removeSelected();
}
    
function loadDriversStart(){

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
}

function removeSelected(){
    driversAvailable = drivers;
    var driversAvailable = arrayRemove(driversAvailable,selectText)
    // remove selected drivers from available drivers array
    for(var m = 0; m < tableLen; m++){
        var tablename = 'DriverList' + m;
        var table = document.getElementById(tablename);
        var driverSelected = table.value;
        var driversAvailable = arrayRemove(driversAvailable,driverSelected)
    }
    
    // add available drivers to each dropdown
    for(var j = 0; j < tableLen; j++){
        var driverstring = 'DriverList' + j;
        var sel = document.getElementById(driverstring);
        var selected = sel.value
        var str = ""
            for(var i = 0; i < driversAvailable.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = driversAvailable[i];
                opt.value = driversAvailable[i];
                sel.appendChild(opt);
                
                
                str += "<option>" + driversAvailable[i] + "</option>"
            }
        }
        getSelectedDrivers()
}
function getSelectedDrivers(){
    driversSelected = [];
    for(var m = 0; m < tableLen; m++){
        selectArray = [];
        var tablename = 'DriverList' + m;
        var table = document.getElementById(tablename);
        var driverSelected = table.value;
        selectArray.push(driverSelected);
        selectArray.push(m+1);
        if (table.value != selectText) {
            driversSelected.push(selectArray)
        }
        
    }
    console.log(driversSelected)
}