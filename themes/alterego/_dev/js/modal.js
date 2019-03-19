$('.modal-toggle').on('click', function(ev) {
	ev.preventDefault()

	var target = $(this).attr('href')
	$(target).toggleClass('active')
})
$('.modal-background').on('click', function() {
	$(this)
		.parent()
		.removeClass('active')
})
$('.modal .close').on('click', function(ev) {
	ev.preventDefault()

	$(this)
		.parent()
		.parent()
		.removeClass('active')
})
