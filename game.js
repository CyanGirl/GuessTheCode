
var code=[];
var repeat=0;
for(var i=0;i<4;i++)
{
    code.push(Math.floor(Math.random()*9));
}
for (var i=0;i<4;i++)
{
    if(code.indexOf(code[i])>=0 && i!=(code.indexOf(code[i])))
    {
        repeat+=1;
    }
}
if(repeat!=0)
{
document.getElementById("hint").innerHTML="There is "+repeat+" repition of a certain number!";
}
else{
document.getElementById("hint").innerHTML="All digits are unique! Guess hard!";
}
var attempts=10;
function check()
{
    attempts--;
    var correct=0;
    var rightplace=0;
    var val1=document.getElementById("enter1").value;
    var val2=document.getElementById("enter2").value;
    var val3=document.getElementById("enter3").value;
    var val4=document.getElementById("enter4").value;
    var val=[val1,val2,val3,val4];
    if(attempts==0)
    {
        alert("You have reached maximum attempts! Refresh Again!");
    }
    else{
    if(val[0]==code[0] && val[1]==code[1] && val[2]==code[2] && val[3]==code[3])
    {
        alert("HURRAY!!");
        document.getElementById("result").innerHTML="Hurray! Congrats! You have solved the code! Have a party!!";
    }
    else{
        for(let i=0;i<4;i++)
        {
            if(val[i]==code[i]){
                rightplace+=1;
            }
            if(code.indexOf(val[i])>=0)
            {
                correct+=1;
            }
        }
        document.getElementById("result").innerHTML="Sorry! Try Again! But here are some hints for you: You have guessed "+correct+" digits and "+rightplace+" digits are at right places!";
        
        
    }
}
}