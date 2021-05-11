const hamsters = document.getElementById("hamsters");
const cucumbers = document.getElementById("cucumbers");


function calculator(){
	
	var hours = document.getElementById('hours').value; 
	var hamstersStart = (2 * (hours*hours));
	var cucumbersStart = (1000 - (hamstersStart/4)); 

	if (cucumbersStart<0){
		alert("Woops! Looks like you're out of food!")
	} else {
	
	hamsters.value = hamstersStart; 
	cucumbers.value = cucumbersStart; 
 	}
}