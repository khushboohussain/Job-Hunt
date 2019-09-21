$(document).on('ready',function(){
    "use strict";
    $("body").on("submit", "#contactform", function() {
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');
            }
        );
        });
        return false;
    });
    /* index3.html slide mousemove */
    $(window).mousemove(function(e) {
        var change;
        var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
        var  xpos=xpos*2;ypos=ypos*2;
        $('.new-slide-3 img').css('top',((100+(ypos/50))+"px"));
        $('.new-slide-3 img').css('right',((0+(xpos/80))+"px"));
                   
    });  

    /*** FIXED Menu APPEARS ON SCROLL DOWN ***/ 
    $(window).on('scroll', function(){    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
        $(".forsticky").addClass("sticky");
        }
        else{
        $(".forsticky").removeClass("sticky");
        $(".forsticky").addClass("");
        }
    });  

    /* Skip Loading */
    $('body').on('click', '.page-loading > span' , function(){
        $(this).parent().fadeOut();
    });

    /* Signin Popup */
    $('body').on('click', '.signin-popup' , function(){
        $('.signin-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('body').on('click', '.close-popup', function(){
        $('.signin-popup-box').fadeOut('fast');
        $('html').removeClass('no-scroll');
    });

    /* Signup Popup */
    $('body').on('click', '.signup-popup', function(){
        $('.signup-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('body').on('click', '.close-popup' , function(){
        $('.signup-popup-box').fadeOut('fast');
        $('html').removeClass('no-scroll');
    });

    /*** QUICK POST SHARE ***/
    $('body').on('click', '.select-user > span' , function () {
        $('.select-user > span').removeClass('active');
        $(this).addClass('active');
    });
    /* Tabs Sec */
    $('body').on("click", '.tab-sec li a', function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-sec li a').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    $('body #toggle-widget .content').hide();
    $('body #toggle-widget h2:first').addClass('active').next().slideDown('fast');
    $('body').on("click", '#toggle-widget h2' , function(){
    if($(this).next().is(':hidden')) {
        $('#toggle-widget h2').removeClass('active').next().slideUp('fast');
        $(this).toggleClass('active').next().slideDown('fast');
    }
    });
    $('body .sb-title.open').next().slideDown();
    $('body .sb-title.closed').next().slideUp();
    $('body').on('click', '.sb-title', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        $(this).toggleClass('closed');
    });

    $('body .tree_widget-sec > ul > li.inner-child:first > ul').slideDown();
    $('body .tree_widget-sec > ul > li.inner-child:first').addClass('active');
    $('body .tree_widget-sec > ul > li.inner-child > a').on('click', function(){
        $('.tree_widget-sec > ul > li.inner-child').removeClass('active');
        $('.tree_widget-sec > ul > li > ul').slideUp();
        $(this).parent().addClass('active');
        $(this).next('ul').slideDown();
        return false;
    });

    $('body').on('click', '.btns-profiles-sec > span', function(){
        $('.btns-profiles-sec > ul').fadeToggle();
    });
    $('body').on('click', function(){
        $('.btns-profiles-sec > ul').fadeOut();
    });
    $("body").on("click", '.btns-profiles-sec', function(e){
        e.stopPropagation();
    });

    $('body').on('click', '.action-center > span', function(){
        $('.action-center ul').fadeOut()
        $('.emply-resume-list').removeClass('active')
        $(this).next('ul').fadeToggle();
        $(this).parent().parent().parent().addClass('active');
    });
    $('body').on('click', function(){
        $('.action-center ul').fadeOut();
    });
    $("body").on("click", '.action-center' , function(e){
        e.stopPropagation();
    });

    $('body').on('click', '.open-letter', function(){
        $('.coverletter-popup').fadeIn();
        $('html').addClass('no-scroll');
    });
    $('body').on('click', '.close-letter', function(){
        $('.coverletter-popup').fadeOut();
        $('html').removeClass('no-scroll');
    });

    $('body').on('click', '.open-contact', function(){
        $('.contactus-popup').fadeIn();
        $('html').addClass('no-scroll');
    });
    $('body').on('click', '.close-contact', function(){
        $('.contactus-popup').fadeOut();
        $('html').removeClass('no-scroll');
    });

    $('body').on('click','.my-profiles-sec > span', function(){
        $('.profile-sidebar').addClass('active');
    });
    $('body').on('click', '.close-profile', function(){
        $('.profile-sidebar').removeClass('active');
    });

    $('body').on('click', '.wishlist-dropsec > span', function(){
        $('.wishlist-dropdown').fadeToggle();
    });
    $('body').on('click', function(){
        $('.wishlist-dropdown').fadeOut();
    });
    $("body").on("click", '.wishlist-dropsec', function(e){
        e.stopPropagation();
    });

    $('body').on('click', '.view-resume-list', function(){
        $('.view-resumesec').fadeIn();
        $('html').addClass('no-scroll');
        return false;
    });
    $('body').on('click', '.close-resume-popup', function(){
        $('.view-resumesec').fadeOut();
        $('html').removeClass('no-scroll');
    });

    $('body').on('click', '.follow-companies-popup', function(){
        $('.follow-companiesec').fadeIn();
        $('html').addClass('no-scroll');
        return false;
    });
    $('body').on('click', '.close-follow-company', function(){
        $('.follow-companiesec').fadeOut();
        $('html').removeClass('no-scroll');
    });

    $('body').on('click', '.faq-box > h2', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    $('body').on('click', '.scroll-to a, .scrollup, .back-top, .tree_widget-sec > ul > li > ul > li a, .cand-extralink a', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
    
    $('body').on('click', '.fav-job', function(){
        $(this).toggleClass('active');
    });

    $('body').on('click', '.emlthis', function(){
        $(this).toggleClass('active');
    });

    $('body').on('click', '.tags-bar > span i', function(){
        $(this).parent().fadeOut();
    });

    $('body').on('click', '.upload-img-bar > span i' , function(){
        $(this).parent().parent().fadeOut();
    });

    $('body').on('click', '.del-resume', function(){
        $(this).parent().fadeOut();
        return false;
    });

    $('body').on('click', '.cand-extralink li', function(){
    	$('.cand-extralink li').removeClass('active');
    	$(this).addClass('active');
    });
    /*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).on('scroll', function(){    
		var scroll = $(window).scrollTop();
		if (scroll >= 600) {
		$(".cand-extralink").addClass("stick");
		}
		else{
		$(".cand-extralink").removeClass("stick");
		$(".cand-extralink").addClass("");
		}
	});	

	$("body").on("click", ".responsivemenu .menu-item-has-children > a",function(){
	    $(this).parent().siblings().children("ul").slideUp();
	    $(this).parent().siblings().removeClass("active");
	    $(this).parent().children("ul").slideToggle();
	    $(this).parent().toggleClass("active");
	    return false;
	});

	$('body').on('click', '.res-openmenu', function(){
        console.log('menu clicked');

		$('.responsive-header').addClass('active');
		$('.responsive-opensec').slideDown();
		$('.res-closemenu').removeClass('active')
		$(this).addClass('active');
	});
	$('body').on('click', '.res-closemenu', function(){
		$('.responsive-header').removeClass('active');
		$('.responsive-opensec').slideUp();
		$('.res-openmenu').removeClass('active')
		$(this).addClass('active');
	});

    /* Table Scroll */
    $('body .manage-jobs-sec > table').parent().addClass('addscroll');

});



$(window).on('load',function(){
    "use strict";

    $('.page-loading').fadeOut();

});