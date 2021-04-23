$(function(){
    $('.but').on('click',function(){
        $('.nav').toggleClass('nav--d')
    })
    $('.but').on('click',function(){
        $('.title_head').toggleClass('title_head-del')
    })
    $('.but').on('click',function(){
        $('.text_head').toggleClass('text_head-del')
    })
    $('.but').on('click',function(){
        $('.header_low').toggleClass('header_low-del')
    })
    $('.galeri').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});
})
