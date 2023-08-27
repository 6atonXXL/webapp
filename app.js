let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
let btn = document.getElementById("btn");
tg.expand(); //расширяем на все окно  

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isVisible){ //если кнопка показана 
         tg.MainButton.hide() //скрываем кнопку 
      }
      else{ //иначе
         tg.MainButton.show() //показываем 
      }
   });


Telegram.WebApp.onEvent('mainButtonClicked', function(){
      
    $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
    tg.sendData(data.ip); 
})});
