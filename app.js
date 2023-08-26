let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let ipAddress = ""; // Переменная для хранения IP-адреса


btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
  	tg.MainButton.show() //показываем 
  }
});
