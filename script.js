function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    si= (Number(p)*Number(r)*Number(t))/100
    end= Number(t)+2021;
    
    document.getElementById('res').innerHTML=`If you deposit ${p}<br/> at an interest rate of ${r} %<br/>You will receive an amount of ${si}<br/> in the year ${end}`
}
        
function change()
{
    r = document.getElementById("rate").value;

    document.getElementById('percentage').innerHTML=`${r} %`;
}