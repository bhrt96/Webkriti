angular.module('mainCtrl', [])

.controller('MainController', function($location){
	var vm = this;

	// Initialization
 	$(document).on('click', '.footer ul li', function() {
 		$('.footer ul li').removeClass('active');
 		$('.footer ul li span').css({'transition': 'all 0.1s ease-out'}).removeClass('active_tab');
 		$(this).addClass('active');
 		$(this).find('span').addClass('active_tab');
 		setTimeout(function() {
 			$('.footer ul li span').css({'transition': 'all 0.3s ease-in'});
 		}, 100);
 		$(document).scrollTop($(window).height());
 	});

	$(document).on('click', '.header .item .close_button', function() {
		console.log($('.header .item'));
		$(this).parent('.item').remove();
		if($('.header .item').length==0)
			$('.header').css({'top': '-80px'});
	});

	$('.button-collapse').sideNav({
      	menuWidth: 240, // Default is 240
      	edge: 'left', // Choose the horizontal origin
      	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $('.modal-trigger').leanModal();

   	$('.slider').slider();

    vm.cart_items_no = 0;
    vm.window_height = $(window).height();

    $(document).on('scroll', function() {
	    if($(document).scrollTop()>vm.window_height/2) {
	    	top_val = vm.window_height-70 + 'px';
    		$('.footer').css({'top': top_val}); 	
    		// $('.footer a#logo').css({'width': '10%'});
    		// $('.cart_button').css({'width': '80px'});
	    }
    	else {
    		$('.header').css({'top': '-80px'});
    		$('.footer').css({'top': '0px'});
    		// $('.footer a#logo').css({'width': '15%'});
    		// $('.cart_button').css({'width': '100px'});
    		$('.modal').css({'display': 'none'});
    	}
    })

    /*-------------------------------------*/

	vm.open_cat = function(value) {
		$location.path(value);
	}

	vm.close_cart = function() {
		$('#cart').closeModal();
	}

	vm.add_compare = function(value) {
		$('.header').css({'top': '0px'});
		if($('.header .item').length<3) {
			vm.src = $('#item_'+value).find('#display_image').attr('src');
			console.log(vm.src);
			$('.header').append("<div class='item'><div class='close_button'></div><img src='"+ vm.src +"'></div>");
		}
	}

	vm.check_cart = function() {
		if(vm.cart_items_no==0)
			return false;
	}

	vm.add_cart = function(value) {
		vm.cart_items_no++;

		colors = ['teal', 'grey'];

		vm.src = $('#item_'+value).find('#display_image').attr('src');
		vm.name = $('#item_'+value).find('p#name').html();
		vm.desc = $('#item_'+value).find('p#desc').html();
		vm.price = $('#item_'+value).find('p#price').html();

		$('#cart.modal').append("<div class='cart_item col s3 "+colors[vm.cart_items_no%2]+"'><img src='"+vm.src+"'><p id='name'>"+vm.name+"</p><p id='desc'>"+vm.desc+"</p><p id='price'>"+vm.price+"</p></div>");
		if(vm.cart_items_no<4)
			$('#cart.modal .cart_item').css({'float': 'right'});

		if(vm.cart_items_no==9) {
			$('.cart_button .back').css({'height': '20px', 'width': '20px', 'right': '8px'});
			// $('p#cart_items_no').css({'top': '7px', 'right': '10px'})
		}
	}

	vm.open_item_desc = function() {
		$('#description').openModal();
	}
		// $('#description').openModal();
});