/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const options= {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        setInterval(()=>{
            a= new Date();
            date= a.toLocaleDateString(undefined, options); 
            htime= a.getHours();
            mtime= a.getMinutes();
            stime= a.getSeconds();
            time= htime+":"+mtime+":"+stime;
            document.getElementById('time').innerHTML= time +" on "+date;
            hrotation= 30*htime+mtime/2;
            mrotation= 6*mtime;
            srotation= 6*stime;

            hour.style.transform = `rotate(${hrotation}deg)`;
            minute.style.transform = `rotate(${mrotation}deg)`;
            second.style.transform = `rotate(${srotation}deg)`;
        },1000);