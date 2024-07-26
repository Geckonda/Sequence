let notes = ["F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#","E", "F"];//names of Notes
let majorSequence = [0,2,2,1,2,2,2,1];//vectors of values according to the scale
let minorSequence = [0,2,1,2,2,1,2,2];
let dorianSequence = [0,2,1,2,2,2,1,2];
let phrygianSequence = [0,1,2,2,2,1,2,2];
let lydianSequence = [0,2,2,2,1,2,2,1];
let mixolydianSequence = [0,2,2,1,2,2,1,2];
let locrianSequence = [0,1,2,2,1,2,2,2];
let scalesNames = ['Major','Minor','Dorian',
                    'Phrygian','Lydian','Mixolydian','Locrian'];

let activeNote;
let activeLad;

var allSequences = [majorSequence,minorSequence,dorianSequence,
	phrygianSequence,lydianSequence,mixolydianSequence,locrianSequence];

CheckResolution();
CreateScalse();
CreateNotes();
CreateKeys();
PlaceSharpKeys();

function CheckResolution()
{
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	if(windowHeight > windowWidth)
		document.querySelector("main").style.transform = "rotate(90deg)"
}
function CreateScalse()
{
	const scalesContainer = document.querySelector('.scales__container');
	for (let i = 0; i < scalesNames.length; i++) {
		const scalesTab = document.createElement("div");
		scalesTab.classList.add("scales__tab");

		const scalesInput = document.createElement("input");
		scalesInput.classList.add("scales__input");
		scalesInput.type = "radio";
		scalesInput.value = i;
		scalesInput.id = scalesNames[i] + "Scale";

		const scalesLabel = document.createElement("label");
		scalesLabel.classList.add("scales__label");
		scalesLabel.textContent = scalesNames[i].substring(0, 3);
		scalesLabel.setAttribute('for', scalesInput.id);

		scalesTab.appendChild(scalesInput);
		scalesTab.appendChild(scalesLabel);
		scalesContainer.appendChild(scalesTab);
	}
}
function CreateNotes()
{
	const scalesContainer = document.getElementById('scale-notes');
	for (let i = 0; i < notes.length - 1; i++) {
		const scale = document.createElement("div");	
		scale.className = "radio";

		const input = document.createElement("input");
		input.type = "radio";
		input.className = "radio__input";
		input.name = "scales";
		let inputId = "radio__" + notes[i];
		input.id = inputId;
		input.value = i;

		const label = document.createElement("label");
		label.className = "radio__label";
		label.setAttribute('for', inputId);
		label.textContent = notes[i];

		scale.appendChild(input);
		scale.appendChild(label);
		scalesContainer.appendChild(scale);
	}
}

function CreateKeys()
{
	const keys = notes;
	keys.push("F#", "G", "G#", "A", "A#", "B", "C");
	const keysContainer = document.getElementById("piano-keys");
	for(let i = 0; i < keys.length; i++)
	{
		const key = document.createElement("div");
		const keyName = document.createElement("div");
		keyName.id = keys[i];
		keyName.textContent = keys[i];
		if(keys[i].includes("#"))
		{
			key.className = "keysBlack";
			keyName.className = "keyNameB";
		}
		else
		{
			key.className = "keysWhite";
			keyName.className = "keyNameW";
		}
		keyName.classList.add("keyName");
		key.appendChild(keyName);
		keysContainer.appendChild(key);
	}
}


//Расставляет черные клавиши
function PlaceSharpKeys()
{
   const blackKeys = [...document.getElementsByClassName("keysBlack")];
   const whiteKeyWidth = [...document.getElementsByClassName("keysWhite")][0].offsetWidth;
   const blackKeyWidth = blackKeys[0].offsetWidth;
   let S = whiteKeyWidth - blackKeyWidth / 2;
   blackKeys.forEach(key => {
      key.style.position = "absolute";
      key.style.left = S + "px";
		let keyName = key.children[0].textContent;
		if( keyName == "A#" || keyName == "D#")
			S += whiteKeyWidth * 2;
		else
      	S += whiteKeyWidth;
   });
}


function CalculateNecessaryNotes(){
	if(activeLad == null || activeNote == null)
		return

	let sequence = [];
	let necessaryNotes = [];
	sequence = allSequences[activeLad];
	
	let i = 0;
	let index = Number(activeNote);
	while(i < 8){
		 index +=sequence[i];
		 if(index >= 12)
			  index -= 12;
		 necessaryNotes[i] = notes[index];
		 i++;
	}
	return necessaryNotes;
}

function ShowCurrentScale()
{
	const curentScaleElement = document.querySelector(".scales__current-scale");
	const result = CalculateNecessaryNotes();
	if(result == undefined)
		return;
	curentScaleElement.textContent = result.join(" ");
}

const scalesContainer = document.querySelector(".scales__container");
const scalesNotesContainer = document.querySelector("#scale-notes");

scalesContainer.addEventListener("click", (e) => {
	if(e.target.closest(".scales__label"))
	{
		ResetActiveLads();
		e.target.classList.add("scales__label_active");
		activeLad = e.target.previousElementSibling.value;
		Run()
	}
})

scalesNotesContainer.addEventListener("click", (e) => {
	if(e.target.closest(".radio__label"))
	{
		ResetActiveNotes();
		e.target.classList.add("radio__label_active");
		activeNote = e.target.previousElementSibling.value;
		Run()
	}
})

function ResetActiveLads()
{
	const ladsLabels = [...document.querySelectorAll(".scales__label")]
	ladsLabels.forEach(e => {
		e.classList.remove("scales__label_active");
	})
}
function ResetActiveNotes()
{
	const notesLabels = [...document.querySelectorAll(".radio__label")]
	notesLabels.forEach(e => {
		e.classList.remove("radio__label_active");
	})
}

function Run()
{
	ResetScaleOnKeys();
	ShowCurrentScale();
	ShowScaleOnKeys();
}

function ShowScaleOnKeys()
{
	const result = CalculateNecessaryNotes();
	if(result == undefined)
		return;

	const keys = [...document.querySelectorAll(".keyName")];
	const mainKeys = [result[0], result[2], result[4]]
	keys.forEach(key => {
		
		 if(mainKeys.includes(key.textContent))
			key.classList.add("keyName_active-main");
		 else if(result.includes(key.textContent)){
			key.classList.add("keyName_active");
		}
	})
}
function ResetScaleOnKeys()
{
	const keys = [...document.querySelectorAll(".keyName")];
	keys.forEach(key => {
			key.classList.remove("keyName_active");
			key.classList.remove("keyName_active-main");
	})
}