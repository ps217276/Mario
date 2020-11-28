//Get's a string value from an element by id and returns this
function getStringValueTekstBox(textbox)
{
    var myValue = document.getElementById(textbox).value;
    return myValue;
}

//Get's a nummeric value from an element by id and returns this
function getValueTekstBox(textbox)
{
    var myValue = document.getElementById(textbox).value;
    if (!isNaN(myValue))
    {
        return myValue;
    }
    else
    {
        alert("The value inserted is not a valud value, use only numbers and one .");
    }
}

// sets the value "result" in the textbox with te name "textbox"
function setResult(result, textbox)
{
    document.getElementById(textbox).value = result;
}
function Btnlogin(){
    var gebruikersnaam = document.getElementById("gebruikersnaam").value;
    var wachtwoord = document.getElementById("wachtwoord").value;
    console.log(gebruikersnaam)
    console.log(wachtwoord)
    if(gebruikersnaam == "Mario" && wachtwoord == "Mario!")
    {
        alert("login succeed")
        window.location = "personeelspagina.html";
        return false;
    }
    else{
        alert("something went wrong")
    }
}
function berekenprijs(){
    
}