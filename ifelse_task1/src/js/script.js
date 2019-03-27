var userName = prompt('Введите Ваш логин','');

if (userName == 'Админ') {
	var userPassword = prompt('Введите Ваш пароль','');
	if (userPassword == 'Чёрный Властелин') {
		alert ('Добро пожаловать!');
	} else if (userPassword == null){
		alert ('Вход отменён');
	} else {
		alert ('Пароль неверен')
	}
} else if (userName == null) {
	alert ('Вход отменён');			
} else {
	alert ('Я Вас не знаю!');
}