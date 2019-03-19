var firstPanel = $('.accordion')
	.children()
	.first()
var firstPanelH =
	$(firstPanel)
		.find('.reveal')
		.prop('scrollHeight') + 'px'

$(firstPanel)
	.parent()
	.toggleClass('active')
$(firstPanel)
	.find('.reveal')
	.css('max-height', firstPanelH)

$('.accordion')
	.children()
	.first()
	.addClass('active')
$('.accordion-item h3').on('click', function() {
	//get panel height
	panelH =
		$(this)
			.siblings('.reveal')
			.prop('scrollHeight') + 'px'

	//remove active from all
	$('.accordion-item').removeClass('active')
	$('.reveal').css('max-height', 0)

	//add to current
	$(this)
		.parent()
		.toggleClass('active')
	$(this)
		.siblings('.reveal')
		.css('max-height', panelH)
})
