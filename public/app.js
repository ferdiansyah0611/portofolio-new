document.addEventListener('DOMContentLoaded', () => {
	if(!localStorage.theme){
		localStorage.theme = 'light'
	}
	document.documentElement.classList.add('dark')
	document.body.classList.add('dark:bg-gray-800')
})
