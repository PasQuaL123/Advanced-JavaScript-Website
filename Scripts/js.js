//var colors = ["#311B92", "#4527A0", "#512DA8", "5E35B1", "#673AB7"];
//tried to use array but couldnt get to work

var iNum = 0;

function ChangeBackground(){

	switch(iNum){
		case 0 : document.getElementById("main_page").style.backgroundColor = "#311B92";
		break;

		case 1 : document.getElementById("main_page").style.backgroundColor = "#4527A0";
		break;

		case 2 : document.getElementById("main_page").style.backgroundColor = "#512DA8";
		break;

		case 3 : document.getElementById("main_page").style.backgroundColor = "#45E35B1";
		break;

		case 4 : document.getElementById("main_page").style.backgroundColor = "#673AB7";
		break;
	}

	iNum++;
	
	if (iNum == 5){ //reset when going over number of colors available
		iNum = 0;
	}

} //end change back

setInterval(ChangeBackground, 10000); //every 10 seconds, ChangeBackground() will run

function StartingBackground(){
	document.getElementById("main_page").style.backgroundColor = "#311B92";
} //this could have been done in styles.css.

var iNumClicked = 0;

function ClickGame(){
	iNumClicked++;

	document.getElementById("click_button").innerHTML = "Clicks: " + iNumClicked;
	if (iNumClicked == 15000)
	{
		alert("Well Done!");
	} 
} //end clickgame

function UpdateCurrencies(){
	var dUSD = 0;
	var dEuro = 0;
	var dGBP = 0;
	var dZAR = 0;
	//constants for multiplication
	const USD_RATE = 0.074;
	const EURO_RATE = 0.063;
	const GBP_RATE = 0.057;

	dZAR = document.getElementById("textrand").value;

	document.getElementById("textdollar").value = dZAR * USD_RATE;
	document.getElementById("texteuro").value = dZAR * EURO_RATE;
	document.getElementById("textpound").value = dZAR * GBP_RATE;

} //Update the forms dynamically

//calculator code.

var bFirstNumber = true;
var sEq1 = "";
var sEq2 = "";
var cSymbol = "";
var dResult = 0.00;

function GenEquation(num_clicked){

	if (bFirstNumber == true) //before the symbol
	{
		switch(num_clicked){
		case "0_button" : sEq1 += "0";
		break;

		case "1_button" : sEq1 += "1";
		break;

		case "2_button" : sEq1 += "2";
		break;

		case "3_button" : sEq1 += "3";
		break;

		case "4_button" : sEq1 += "4";
		break;

		case "5_button" : sEq1 += "5";
		break;

		case "6_button" : sEq1 += "6";
		break;

		case "7_button" : sEq1 += "7";
		break;

		case "8_button" : sEq1 += "8";
		break;

		case "9_button" : sEq1 += "9";
		break;
	} //end switch
	} else { //after symbol
		switch(num_clicked){
		case "0_button" : sEq2 += "0";
		break;

		case "1_button" : sEq2 += "1";
		break;

		case "2_button" : sEq2 += "2";
		break;

		case "3_button" : sEq2 += "3";
		break;

		case "4_button" : sEq2 += "4";
		break;

		case "5_button" : sEq2 += "5";
		break;

		case "6_button" : sEq2 += "6";
		break;

		case "7_button" : sEq2 += "7";
		break;

		case "8_button" : sEq2 += "8";
		break;

		case "9_button" : sEq2 += "9";
		break;
	} //end switch
	}
	
	document.getElementById("line_1_display").innerHTML=sEq1 + " " + cSymbol + " " + sEq2;
	//first line used to display the equation before equating

} //end func

function GenSymbol(num_clicked){ //get the symbol
	//calculator only operates 1 function at a time!
	cSymbol = "";

	switch(num_clicked){
		case "times_button" : cSymbol = "*";
		break; 

		case "minus_button" : cSymbol = "-";
		break;

		case "add_button" : cSymbol = "+";
		break;

		case "div_button" : cSymbol = "/";
		break;
	}

	document.getElementById("line_1_display").innerHTML=sEq1 + " " + cSymbol + " " + sEq2;
	//dynamic display of the equation real time
	bFirstNumber = false;
}

function DoThings(num_clicked){  //clear the calc or equate the answer

	if (num_clicked == "clr_button") //reset the calc
	{
		sEq1 = "";
		sEq2 = "";
		cSymbol = "";
		document.getElementById("line_1_display").innerHTML="Cleared!";
		document.getElementById("line_2_display").innerHTML="Cleared!";
		bFirstNumber = true;
		dResult = 0.00;
	} else {

		switch (cSymbol){ //parsefloat to convert string to double/float

			case "+" : dResult = (parseFloat(sEq1)) + (parseFloat(sEq2));
			break;

			case "-" : dResult = (parseFloat(sEq1)) - (parseFloat(sEq2));
			break;

			case "*" : dResult = (parseFloat(sEq1)) * (parseFloat(sEq2));
			break;

			case "/" : dResult = (parseFloat(sEq1)) / (parseFloat(sEq2));
			break;

		} //end switch

			document.getElementById("line_2_display").innerHTML=dResult; //display result

		
	} //end ifelse

} //end do things

function ToggleCalc(){
	//show or hide calc
	if (document.getElementById("calcbody").style.display === "none"){
	
		document.getElementById("calcbody").style.display = "block";
		window.scrollTo(0,document.body.scrollHeight); //scroll to bottom of page

	} else {
		document.getElementById("calcbody").style.display = "none";
	} //end if else

} //end toggle

function CloseWindow() { //close browser
  if (confirm("Close Window?")) { //confirm
    window.close(); 
  }
}