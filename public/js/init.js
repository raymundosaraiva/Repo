(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $(".menu a").click(function(e){
			e.preventDefault();
			var href = $( this ).attr('href');
			$(".main").load(href);
			$(".side-nav").sideNav('hide');
    });
		$('ul.tabs').tabs();

		if(localStorage["email"]){
			$(".options").css("visibility","visible");
			$(".logout").css("visibility","visible");
			$(".main").load("list.html");
		}else{
			$(".main").load("login.html");
		}
			
		$(".logout").click(function(e){
			e.preventDefault();
			localStorage["email"] = "";
			localStorage["name"] = "";
			localStorage["id"] = "";
			location.reload();
		});

		var config = {
			apiKey: "AIzaSyCSManEm53ei_Ui5lkvsot7TX5a42r6zTE",
			authDomain: "weblatex-8ee2f.firebaseapp.com",
			databaseURL: "https://weblatex-8ee2f.firebaseio.com",
			storageBucket: "weblatex-8ee2f.appspot.com",
			messagingSenderId: "890389318244"
		};
		
		firebase.initializeApp(config);
		
		
  }); // end of document ready
})(jQuery); // end of jQuery name space
