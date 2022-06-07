var notes = [ "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#","E"];//names of Notes
var countdown = [ 0, 7, 3, 10, 5, 0 ];//their reference point
var stringName = ['string_E','string_B','string_G','string_D','string_A','string_EE'];//names of divs
var majorSequence = [0,2,2,1,2,2,2,1];//vectors of values according to the scale
var minorSequence = [0,2,1,2,2,1,2,2];
var dorianSequence = [0,2,1,2,2,2,1,2];
var phrygianSequence = [0,1,2,2,2,1,2,2];
var lydianSequence = [0,2,2,2,1,2,2,1];
var mixolydianSequence = [0,2,2,1,2,2,1,2];
var locrianSequence = [0,1,2,2,1,2,2,2];
var scalesNames = ['Ionian','Aeolian','Dorian',
                    'Phrygian','Lydian','Mixolydian','Locrian']

var allSequences = [majorSequence,minorSequence,dorianSequence,
        phrygianSequence,lydianSequence,mixolydianSequence,locrianSequence];

var minor = false;//switchers
var major = false;
var activeNote;
var activeLad;
var created = false;

ShowLads();
ShowNotes();
ShowNames();

const goButton = document.querySelector('#goBtn')
const settings = document.querySelector('#chooseSection');
const scaleScreen = document.querySelector('#scaleScreen');
const scaleNameScreen = document.querySelector('#currentTableScale');


goButton.addEventListener('click', ()=>{
    settings.style.display = 'none';
    if(!created){
        ShowScale();
        created = true;
    }
    else{
        ClearScreenNotes();
        ClearScale();
        ShowScale();
    }
});

const labelNotes1 = document.querySelector('.ulNotes');
const labelNotes2 = document.querySelector('.ulLads');

    labelNotes1.addEventListener('click', function(event){
        if(event.target.closest('.liNotes')){
            let currentNote = event.target;
            ChangeAppearance(currentNote,'note');
            activeNote = currentNote.value;
        }
    })
    labelNotes2.addEventListener('click', function(event){
        if(event.target.closest('.liLads')){
            let currentLad = event.target;
            ChangeAppearance(currentLad,'lad');
            activeLad = currentLad.value;
        }
    })
var changedNotesField = false;
var changedLadsField = false;
var previousNote;
var previousLad;
    function ChangeAppearance(currentTarget,typeOfTarget){
        if (typeOfTarget === 'note')
            if (!changedNotesField) {
                currentTarget.style.color = 'white';
                currentTarget.style.fontSize = '40px';
                previousNote = currentTarget;
                changedNotesField = true;
            }
            else {
                previousNote.style.color = '#aaa';
                previousNote.style.fontSize = '25px';
                currentTarget.style.color = 'white';
                currentTarget.style.fontSize = '40px';
                previousNote = currentTarget;
            }
        else {
            if (!changedLadsField) {
                currentTarget.style.color = 'white';
                currentTarget.style.fontSize = '40px';
                previousLad = currentTarget;
                changedLadsField = true;
            }
            else {
                previousLad.style.color = '#aaa';
                previousLad.style.fontSize = '25px';
                currentTarget.style.color = 'white';
                currentTarget.style.fontSize = '40px';
                previousLad = currentTarget;
            }
        }
    }


function ShowScale(){
    scaleNameScreen.textContent = notes[activeNote] + " " + scalesNames[activeLad];
    let necessaryNotes = CalculateNecessaryNotes();
    for(let j = 0; j < 6; j++){
        var currentString = document.getElementById(stringName[j]+j).childNodes;
        currentString = Array.prototype.slice.call(currentString);
            for (let i = 0; i < 12; i++) {
                let j = 0;
                while(j < necessaryNotes.length){
                    if(currentString[i].textContent == necessaryNotes[j]){
                        currentString[i].classList.add('activeScaleNotes');
                    }
                    j++;
                }
            }
    }
}
function CalculateNecessaryNotes(){
    let sequence = [];
    let necessaryNotes = [];
    sequence = allSequences[activeLad];
    
    let i = 0;
    let index = Number(activeNote);
    while(i < 8){
        index +=sequence[i];
        if(index >= 12)
            index -= 12;
        console.log(notes[index])
        necessaryNotes[i] = notes[index];
        BlockCreation(i,necessaryNotes[i],scaleScreen,'screenNotes');
        i++;
    }
    return necessaryNotes;
}
function ClearScreenNotes(){
    
    while(scaleScreen.firstChild){
        scaleScreen.removeChild(scaleScreen.firstChild);
    }
        
}
function ShowScaleName(){

}

function ShowNames(){
    let className = "posNames";
        const currentOdject = document.getElementById('index_0');
        for(var i = 0; i < notes.length-1; i++){
            BlockCreation(i,i,currentOdject,className);
        }
}
function ShowLads(){
    let className = "lad"
    for(let j = 0; j < 6; j++){
        const currentString =  document.getElementById(stringName[j]);
            for(var i = 0; i < notes.length-1; i++){
                BlockCreation(i,'',currentString,className);
            }
    }
}
function ShowNotes(){
    let className = "ourNotes"
    for(let i = 0; i < 6; i++){
        const currentString =  document.getElementById(stringName[i]+i);
        index = countdown[i];
        for(let j = 0; j < 12; j++){
            if(index >= 12)
                index -= 12;
                BlockCreation(j,notes[index],currentString,className);
                index++;
        }
    }
}

function BlockCreation(i,noteName,currentString,className){
    const newDiv = document.createElement("div");
    newDiv.classList.add(className);
    newDiv.id = className + i;
    currentString.appendChild(newDiv);
    newDiv.textContent = noteName;
}
function ClearScale(){
    console.clear();
    scaleNameScreen.textContent = "";
    for(let i = 0; i < 6; i++){
        var currentString = document.getElementById(stringName[i]+i).childNodes;
        currentString = Array.prototype.slice.call(currentString);
            for(let j = 0; j < 12; j++){
                currentString[j].classList.remove('activeScaleNotes');
            }
    }
}
document.querySelector('#showButton').addEventListener('click', ()=>{
    settings.style.display = 'block';
});
document.querySelector('#ClearButton').addEventListener('click', ()=>{ClearScale();
    ClearScreenNotes();})