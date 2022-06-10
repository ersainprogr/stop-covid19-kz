function generatePDF() {
	const element = document.getElementById('invoice')
	var opt = {
		margin: 1,
		filename: 'esep_beru.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
	}
	html2pdf().set(opt).from(element).save()
}



const menu = document.querySelector('.answer-text__contents')


menu.addEventListener('click', e => {
	if (e.target.classList.contains('answer-text__content__btn') || e.target.classList.contains('answer-text__content__btn__ico')) {
		const currentElem = e.target.closest('.answer-text__content')
		const dropDown = currentElem.querySelector('.answer-dropdown__block');
		dropDown.classList.toggle('switch')
	}
})