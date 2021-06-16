 'use strict';
 
 function timer(){

    let date = new Date().getTime(),
    date1  =  new Date(),
    year = date1.getFullYear() + 1,
    newYear = new Date(` 1 january ${year}`).getTime(),
    timeRemaining = (newYear - date) / 1000 ,
    day = Math.ceil(timeRemaining / 60 /60 /24 % 365 ),
    look  = date1.getHours(),
    week = ['Воскресенье','Пондельник','Вторник','Среда','Четверг','Пятница','Субота'],
    hours = date1.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    let minutes = date1.getMinutes();
    let seconds = date1.getSeconds();
    
    function check (val){
        let lenght = 0;
        let num = val ;
        do{
            lenght++;
            num = num / 10;

        }while(num >= 1);
        if( lenght < 2){
            val = '0' + val;
        }
        return val;
    }
    
    minutes = check(minutes);
    hours = check(hours);
     seconds =check(seconds);
    let nowTime = 'Текущее вермя : ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
   
   

    if (look < 7 || look > 22){
        document.write('Доброй ночи');
    }else if(look >= 7 && look < 11){
         document.write('Доброе утро');
    }else if (look >= 11 && look < 17){
         document.write('Добрый день');
    }else if(look >= 17 && look <22){
        document.write('Добрый вечер');
    }

    function getWeekDay (date){
        return week[date.getDay()];
    }

    document.write('<br> Сегодня : ',getWeekDay(date1));
     document.write('<br>' + nowTime);
      document.write('<br> До нового года осталось : ' + day + ' дней');

    

    


    
}
timer();