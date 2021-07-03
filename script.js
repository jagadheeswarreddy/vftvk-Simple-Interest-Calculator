function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<= 0)
    {
    	alert("Enter a positive number");
      document.getElementById("principal").focus(); 
    	return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal*(rate/100*years);

    document.getElementById("result").innerHTML = "<br><br>If you deposit "+principal
    	+",<br>at an interest rate of "+rate+"%<br>You will receive an amount of "
      +interest+",<br>in the year "+year;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
