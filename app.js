let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
tg.MainButton.show();

let ipAddress = ""; // Переменная для хранения IP-адреса

        function getIPAddress() {
            fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => {
                    ipAddress = data.ip; // Сохраняем IP-адрес в переменной
                    document.getElementById("ipAddress").textContent = "Your IP Address: " + ipAddress;
                })
                .catch(error => {
                    console.error("Error fetching IP address:", error);
                });
        }

Telegram.WebApp.onEvent("mainButtonClicked", function getIPAddress() {
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip; // Сохраняем IP-адрес в переменной
            document.getElementById("ipAddress").textContent = "Your IP Address: " + ipAddress;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
        tg.sendData(ipAddress);
})
