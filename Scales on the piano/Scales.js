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

var activeNote;
var activeLad;

CreateScales();
CreateKeys();

function CreateScales()
{
	const scalesContainer = document.getElementById('chooseScales');
	for (let i = 0; i < notes.length - 1; i++) {
		const scale = document.createElement("div");	
		scale.className = "radio";

		const input = document.createElement("input");
		input.type = "radio";
		input.className = "radio__input";
		input.name = "scales";
		let inputId = "radio__" + notes[i];
		input.id = inputId;
		input.value = notes[i];

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
	const keysContainer = document.getElementById("pianoKeys");
	for(let i = 0; i < keys.length; i++)
	{
		const key = document.createElement("div");
		const keyName = document.createElement("div");
		keyName.id = keys[i];
		keyName.textContent = keys[i];
		if(keys[i].includes("#"))
		{
			key.className = "keysBlack"
			keyName.className = "keyNameB"
		}
		else
		{
			key.className = "keysWhite"
			keyName.className = "keyNameW";
		}
		key.appendChild(keyName);
		keysContainer.appendChild(key);
	}

}

// Напиши функцию, которая будет высчитывать ширину белых клавиш и
// суммируя эти расстояние расставлять черные



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
		 i++;
	}
	return necessaryNotes;
}































//Объявление переменных
var keeperMajMin;
var keeperScale;
var white = document.getElementsByClassName('keysWhite');
//Major&Minor
var major = document.getElementById('major');
var minor = document.getElementById('minor');
//-------------------------------------------
var MajMin = document.getElementsByName("MajMin");
//Scales
var A_rad = document.getElementById('radio__A');
var A_dies_rad = document.getElementById('radio__A#');
var B_rad = document.getElementById('radio__B');
var C_rad = document.getElementById('radio__C');
var C_dies_rad = document.getElementById('radio__C#');
var d_rad = document.getElementById('radio__D');
var D_dies_rad = document.getElementById('radio__D#');
var E_rad = document.getElementById('radio__E');
var F_rad = document.getElementById('radio__F');
var F_dies_rad = document.getElementById('radio__F#');
var G_rad = document.getElementById('radio__G');
var G_dies_rad = document.getElementById('radio__G#');
//----------------------------------------------------
var scale = document.getElementsByName('scales');
//Keys
var E = document.getElementById('E');
var F = document.getElementById('F');
var F_dies = document.getElementById('F#');
var G = document.getElementById('G');
var G_dies = document.getElementById('G#');
var A = document.getElementById('A');
var A_dies = document.getElementById('A#');
var B = document.getElementById('B');
var C = document.getElementById('C');
var C_dies = document.getElementById('C#');
var D = document.getElementById('D');
var D_dies = document.getElementById('D#');
var E2 = document.getElementById('E2');
var F2 = document.getElementById('F2');
var F2_dies = document.getElementById('F2#');
var G2 = document.getElementById('G2');
var G2_dies = document.getElementById('G2#');
var A2 = document.getElementById('A2');
var A2_dies = document.getElementById('A2#');
var B2 = document.getElementById('B2');
//Механизм
//MajMin
for(var i=0; i<MajMin.length; i++){
	MajMin[i].onchange = showMajMin;
}
	function showMajMin(){
		keeperMajMin = this.value;
		console.log(keeperMajMin);
	}
//Scale
for(var i=0; i<scale.length; i++){
	scale[i].onchange = showScale;
}
	function showScale(){
		keeperScale = this.value;
		console.log(keeperScale);
	}
function start(){
	GO();
}
function GO(){
	//Гамма А Мажор
	if((keeperScale == "A")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма А Минор
	if((keeperScale == "A")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма А# Мажор
	if((keeperScale == "A#")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма А# Минор
	if((keeperScale == "A#")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма B Мажор
	if((keeperScale == "B")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#f00";
	}
	//Гамма B Минор
	if((keeperScale == "B")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#f00";
	}
	//Гамма C Мажор
	if((keeperScale == "C")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма C Минор
	if((keeperScale == "C")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма C# Мажор
	if((keeperScale == "C#")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма C# Минор
	if((keeperScale == "C#")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма D Мажор
	if((keeperScale == "D")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма D Минор
	if((keeperScale == "D")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма D# Мажор
	if((keeperScale == "D#")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма D# Минор
	if((keeperScale == "D#")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#666";
	}
	//Гамма E Мажор
	if((keeperScale == "E")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#f00";
	}
	//Гамма E Минор
	if((keeperScale == "E")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#f00";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#f00";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#f00";
	}
	//Гамма F Мажор
	if((keeperScale == "F")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма F Минор
	if((keeperScale == "F")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#f00";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#f00";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма F# Мажор
	if((keeperScale == "F#")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#666";
	}
	//Гамма F# Минор
	if((keeperScale == "F#")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#f00";
		D.style.backgroundColor = "#666";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#f00";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#666";
		A.style.backgroundColor = "#f00";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#666";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#f00";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#666";
		A2.style.backgroundColor = "#f00";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#666";
	}
	//Гамма G Мажор
	if((keeperScale == "G")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#000";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#000";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#000";
		B2.style.backgroundColor = "#f00";
	}
	//Гамма G Минор
	if((keeperScale == "G")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#666";
		C_dies.style.backgroundColor = "#000";
		D.style.backgroundColor = "#f00";
		D_dies.style.backgroundColor = "#666";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#f00";
		G_dies.style.backgroundColor = "#000";
		A.style.backgroundColor = "#666";
		A_dies.style.backgroundColor = "#f00";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#f00";
		G2_dies.style.backgroundColor = "#000";
		A2.style.backgroundColor = "#666";
		A2_dies.style.backgroundColor = "#f00";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма G# Мажор
	if((keeperScale == "G#")&&(keeperMajMin == "major")){
		C.style.backgroundColor = "#f00";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#fff";
		F.style.backgroundColor = "#666";
		F_dies.style.backgroundColor = "#000";
		G.style.backgroundColor = "#666";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#fff";
		E2.style.backgroundColor = "#fff";
		F2.style.backgroundColor = "#666";
		F2_dies.style.backgroundColor = "#000";
		G2.style.backgroundColor = "#666";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#fff";
	}
	//Гамма G# Минор
	if((keeperScale == "G#")&&(keeperMajMin == "minor")){
		C.style.backgroundColor = "#fff";
		C_dies.style.backgroundColor = "#666";
		D.style.backgroundColor = "#fff";
		D_dies.style.backgroundColor = "#f00";
		E.style.backgroundColor = "#666";
		F.style.backgroundColor = "#fff";
		F_dies.style.backgroundColor = "#666";
		G.style.backgroundColor = "#fff";
		G_dies.style.backgroundColor = "#f00";
		A.style.backgroundColor = "#fff";
		A_dies.style.backgroundColor = "#666";
		B.style.backgroundColor = "#f00";
		E2.style.backgroundColor = "#666";
		F2.style.backgroundColor = "#fff";
		F2_dies.style.backgroundColor = "#666";
		G2.style.backgroundColor = "#fff";
		G2_dies.style.backgroundColor = "#f00";
		A2.style.backgroundColor = "#fff";
		A2_dies.style.backgroundColor = "#666";
		B2.style.backgroundColor = "#f00";
	}
}
