var notes = [ "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#","E"];
var countdown = [ 0, 7, 3, 10, 5, 0 ];
var stringName = ['string_E','string_B','string_G','string_D','string_A','string_EE'];
var majorSequence = [0,2,2,1,2,2,2,1];
var minorSequence = [0,2,1,2,2,1,2,2];
var str;
var lad;
var minor = false;
var major = false;
var activeNote;
var activeLad;

const EString = document.getElementById('string_E');
const BString = document.getElementById('string_B');
const GString = document.getElementById('string_G');
const DString = document.getElementById('string_D');
const AString = document.getElementById('string_A');

var created = false;

document.querySelector('.goBtn').addEventListener('click', ()=>{

    if(!created){
        ShowLads();
        ShowScales();
        created = true;
    }
    else{
        DeleteDivs();
        //ShowScales();
    }
});

function ShowScales()
{
    activeNote =  document.querySelector('#activeNote').value;
    activeLad = document.querySelector('#magMin').value;
    console.clear();

    let sequence = [];
    if(activeLad == 'major')
        sequence = majorSequence;
    else
        sequence = minorSequence;
    let i = 0;
    let index = Number(activeNote);
    var currentClass = "ourNotes"
    for(var j = 0; j < 6; j++){
        var strName = stringName[j]+j;
        const currentString =  document.getElementById(strName);
        index = countdown[j];
        while(i < 12){
            if(index >= 12)
                index -= 12;
                AddNotes(notes[index],i,currentString,currentClass);
                index++;
            i++;
        }
        i=0;
    }
}
function ShowLads(){
    let index = Number(activeNote);
    var currentClass = "lad"
    for(var j = 0; j < 6; j++){
        var strName = stringName[j];
        const currentString =  document.getElementById(strName);
            for(var i = 0; i < notes.length-1; i++){
                if(index >= 12)
                    index -= 12;
                AddNotes(notes[index],i,currentString,currentClass);
            }
    }
}
function AddNotes(note,i,currentString,currentClass){
    const newDiv = document.createElement("div");
    newDiv.classList.add(currentClass);
    newDiv.id = currentString + i;
    currentString.appendChild(newDiv);
    newDiv.textContent = note;
}
function DeleteDivs(){
    for(var i = 0; i < 8; i++){
        var idDiv = "d" + i;
    document.getElementById(idDiv).remove();
    }
}