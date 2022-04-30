let searchConsLog = document.querySelector('#consoleLog');
searchConsLog.onclick = function() {
    alert('Это метод для вывода сообщения в консоль веб-браузера')};

let seachAlert = document.querySelector('#alert')
seachAlert.addEventListener('click',(event) => alert('Это метод для вывода сообщения в модальном окне на веб-странице'));

let searchPrompt = document.querySelector('#prompt')
searchPrompt=addEventListener('click',(event)=>alert('Это метод для Ввода сообщения в модальном окне на веб-странице'));