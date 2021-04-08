document.addEventListener('DOMContentLoaded', function(){ 

	var videoTriggers = document.getElementsByClassName("videoOpener");
	var n = videoTriggers.length;
	var modalWrapper;

	function showModal()
	{
		var iframe = this.nextElementSibling;
		var iframeClone = iframe.cloneNode(true);
		
		var backgroundModal = document.createElement('div');
		backgroundModal.classList.add('backgroundModal');
		
		var bgModalClone = backgroundModal.cloneNode(true); 
		bgModalClone.classList.add('NewModal');
		
		var videoWrapper = document.createElement('div');
		videoWrapper.classList.add('videoWrapper');
		
		var b = document.getElementsByTagName('body')[0];
		b.appendChild(bgModalClone);
		
		bgModalClone.appendChild(videoWrapper);
		videoWrapper.append(iframeClone);

		modalWrapper = document.getElementsByClassName('NewModal')[0];
		modalWrapper.addEventListener('click', eraseModal, false);

		var close = document.createElement('div');
		close.classList.add('closeX');
		
		var closeText = document.createTextNode('X');
		close.appendChild(closeText);
		bgModalClone.append(close);
		close.addEventListener('click', eraseModal, false);
	}

	for(var i=0; i < n; i++)
	{
		videoTriggers[i].addEventListener('click', showModal, false);
	}

	function eraseModal()
	{
		var modal = document.getElementsByClassName('backgroundModal')[0];
		modal.remove();
	}

	

}, false);