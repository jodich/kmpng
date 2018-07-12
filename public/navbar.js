let cookies = document.cookie;

if (cookies.includes('user_id')) {
	let button3 = document.querySelector('#login');
	let button4 = document.querySelector('#signup');

	button3.href = '/user/messages'
	button3.textContent = 'Messages'
	
	button4.href = '/user/logout'
	button4.textContent = 'Log Out'

} else {
	console.log('not logged in')
}

var cookieObj = {}

var splitcookies = cookies.split('; ');

for (let i = 0; i < splitcookies.length; i++) {
	var item = splitcookies[i].split('=');

	cookieObj[item[0]] = item[1];
}

var unreadCount = cookieObj.unread_msg;

if (unreadCount == undefined) {
	document.querySelector('#notification').style.display = "none"
} else {
	document.querySelector('#notification').style.display = "inline-block"
	document.querySelector('#notification').textContent = unreadCount
}