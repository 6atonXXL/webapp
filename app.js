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
      
      fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                  ipAddress = data.ip; // Сохраняем IP-адрес в переменной
            })
            .catch(error => {
                  console.error("Error fetching IP address:", error);
            });
      tg.sendData(ipAddress); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });
