
const amount=document.getElementById("amount");
const rate=document.getElementById("rate");
const time=document.getElementById("time");
const present=document.getElementById("present");
const future=document.getElementById("future");
const result=document.getElementById("result");
const compound=document.getElementById("compound");
let answer;
let amt;
let rt;
let t;
let c;

function convert()
{
 
  
  amt=amount.value;
  rt=rate.value;
  t=time.value;
  c=compound.value;

  
  amt=Number(amt);
  rt=Number(rt);
  rt=rt/100;
  t=Number(t);
  c=Number(c);


 if(present.checked)
  {
    answer=amt/(1+(rt/c))**(t*c);
    answer=answer.toFixed(3);
    result.textContent=`PRESENT VALUE:${answer}`;
  }
  else if(future.checked)
  {
    answer=amt*(1+(rt/c))**(t*c);
    answer=answer.toFixed(3);
    result.textContent=`FUTURE VALUE:${answer}`;
      
  }
  else
  {
    result.textContent=`CHOOSE AN OPTION`;
      
  }
}

