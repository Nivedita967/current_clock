/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const options= {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        setInterval(()=>{
            a= new Date();
            date= a.toLocaleDateString(undefined, options); 
            time= a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
            document.getElementById('time').innerHTML= time +" on "+date;
        },1000);