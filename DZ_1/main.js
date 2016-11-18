var name, color, memory, price;
        for (;;){
            name=prompt('Введіть модель iphone(SE, 7, 7plus)', 'SE');
            if(name==='null'){
                break;
            }
            else if(name==='SE' || name==='7'|| name==='7plus'){
                break;
            }
        }

        for (;;){
             color=prompt('Ведіть колір(JetBlack,SpaceGray,white,gold,black)', 'white');
             if(color===null){
                break;
            }
            else if(name==='SE' && color==='SpaceGray' ||color==='white'||color==='gold'||  ( name==='7' || name==='7plus') && (color==='black' || color==='JetBlack')){
                break;
            }
              
        }

        for (;;){
            memory= prompt('Введіть пам*ять', '16');
            if(memory===null){
                break;
            }
            else if(name==='SE' && ( memory==='16' || memory==='64') || memory==='32' || ( name==='7' || name==='7plus') &&( memory==='128' || memory==='256')){
                 break;
            }
        }

if(name==='null' || color===null || memory===null)
{
document.write('<center>HE ПРАВИЛЬНО ВИБРАНІ ПАРАМЕТРИ!!<br><img width=800 height=500 src=img/error.jpg></center>');
}

else{
    if( name==='SE'){
        switch(memory){
            case '16': price=400; break;
            case '32': price=450; break;
            case '64': price=500; break;
        }
        switch(color){
            case 'gold': price+=50; break;
        }
    }
    if (name==='7'){
        switch(memory){
            case '32': price=650; break;
            case '128': price=700; break;
            case '256': price=800; break;
        }
         switch(color){
            case 'JetBlack': price+=100; break;
            case 'gold': price+=50; break;
        }
    }
    if (name==='7plus'){
        switch(memory){
            case '32': price=750; break;
            case '128': price=800; break;
            case '256': price=900; break;
        }
        switch(color){
            case 'JetBlack': price+=100; break;
            case 'gold': price+=50; break;
        }
    }
document.write(' Назва: Iphone '+name+'<br>Пам*ять: '+memory+'gb<br>Колір: '+color+'<br>Ціна: '+price+'$<br><img src=img/'+name+color+'.jpeg width=50% height=50% align=middle>');
}