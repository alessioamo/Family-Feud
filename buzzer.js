var enableControls = true;
var someoneBuzzed = false;
var canPressBuzzer = true;
var TEAM1KEYS = ["1","2","3"];
var TEAM2KEYS = ["a","b","c"];
var teamKeys = [{teamNumber: 1, keyToPress: TEAM1KEYS, canPress: true}, {teamNumber: 2, keyToPress: TEAM2KEYS, canPress: true}];

window.addEventListener('keydown', function(e) {
    console.log("Can buzz: " + canPressBuzzer);
    if (enableControls && ((e.key == TEAM1KEYS[0] && teamKeys[0].canPress) || (e.key == TEAM1KEYS[1] && teamKeys[0].canPress) || (e.key == TEAM1KEYS[2] && teamKeys[0].canPress)
                         || (e.key == TEAM2KEYS[0] && teamKeys[1].canPress) || (e.key == TEAM2KEYS[1] && teamKeys[1].canPress) || (e.key == TEAM2KEYS[2] && teamKeys[1].canPress))) {
        console.log("ASDASD");
        someoneBuzzed = true;
        canPressBuzzer = false;
        console.log(e);
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 3; j++) {
                if (e.key == teamKeys[i].keyToPress[j])  {
                    console.log("here " + teamKeys[i].keyToPress[j]);
                    (document.getElementById("team"+teamKeys[i].teamNumber)).style.background = "linear-gradient(to top left, #939600, #fbff00";
                    //startAnswerTimer("scoreDisplayTeamName"+teamKeys[i].teamNumber);
                    disableAllTeamBuzzers();
                    break;
                }
            }
        }
    }
});

function disableAllTeamBuzzers() {
    for (i = 0; i < 2; i++) {
        console.log(teamKeys[i]);
        teamKeys[i].canPress = false;
    }
}

function enableAllTeamBuzzers() {
    for (i = 0; i < 2; i++) {
        console.log(teamKeys[i]);
        teamKeys[i].canPress = true;
    }

    // Reset the CSS of the background scores
    var elements = document.getElementsByClassName("score");
    console.log(elements);

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "#7db9e8";
        elements[i].style.background = "-moz-linear-gradient(top, #7db9e8 0%, #207cca 49%, #2989d8 50%, #1e5799 100%)";
        elements[i].style.background = "-webkit-linear-gradient(top, #7db9e8 0%, #207cca 49%, #2989d8 50%, #1e5799 100%)";
        elements[i].style.background = "linear-gradient(to bottom, #7db9e8 0%, #207cca 49%, #2989d8 50%, #1e5799 100%)";
        elements[i].style.filter = "progid: DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799', GradientType=0)";
    }
}