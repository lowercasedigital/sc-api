var $doc = $(document),
     index = 0; 
     
$doc.bind('scPlayer:onMediaEnd', function(event) { 
     setTimeout(function(){ 
		index++;
		$('.sc-player').find('.sc-play').click(); 
		$('.sc-player').find('ol.sc-trackslist').find('li.active').click(); 
	}, 1000); 
});
