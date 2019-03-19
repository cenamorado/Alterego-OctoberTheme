var firstTabLink = $('.tabs')
	.children()
	.first()
var firstTabContent = $('.tabs-content')
	.children()
	.first()

$(firstTabLink).addClass('active')
$(firstTabContent).addClass('active')

$('.tab-link').on('click', function(ev) {
	ev.preventDefault()

	//define target panel
	var target = $(this).attr('href')

	//remove active from all
	$('.tab-link').removeClass('active')
	$(this).addClass('active')

	//add active to current
	$('.tab-content').removeClass('active')
	$(target).addClass('active')

	//scroll
	$('.tabs-container').animate({ scrollLeft: '+=50' }, 500)
})
