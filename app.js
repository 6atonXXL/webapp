let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
tg.MainButton.show();

let ipAddress = ""; // Переменная для хранения IP-адреса


Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData("Пуки каки");
})
