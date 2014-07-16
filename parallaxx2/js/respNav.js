var RespNav = function(){

	var respNav = document.querySelector('.resp-nav');
	var respIcon = document.querySelector('.resp-icon');

	this.init = function(){
		addEvents()
	}

	var addEvents = function(){
		respIcon.addEventListener('click', activeRespNav, false)
	}

	var activeRespNav = function(e){
		respNav.classList.toggle('resp-nav-visible');
	}

}