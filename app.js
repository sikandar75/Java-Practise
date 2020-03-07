//var countries=["Pakistan","India","England","Srilanka","Nepal"];
//var country=prompt("Enter your country name");
//var matchFound=false;
//for(var i=0; i<=4; i++)
//{
  //  if(country===countries[i])
   // {
    //    matchFound=true;
    //    console.log(country);
    //}
//}
//if(matchFound===false)
//{
 //   console.log("Your country is not in the list");
//}
var num1=+prompt("Enter your first number");
var num2=+prompt("Enter your second number");
var operator=prompt("select your operator:" +" add " +"sub" +"multiply" +"divide");
//var operator2=prompt("Sub Operator");
//var operator3=prompt("Multiply Operator");
//var operator4=prompt("Division Operator");
if(operator==1)
{
var c=num1 + num2;
console.log(c);
}
else if(operator==2)
{
var d=num1 - num2;
console.log(d);
}
else if(operator==3)
{
var e=num1 * num2;
console.log(e);
}
else if(operator==4)
{
var f=num1/num2;
console.log(f);
}
else {
  console.log("invalid operator");
}

