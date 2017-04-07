var $doc = $(document);   
    
$doc.bind('scPlayer:onMediaEnd', function(event) { 
     setTimeout(function(){ 
		$('.sc-player').children('.sc-play').click(); 
		$('.sc-player').children('ol.sc-trackslist').find('li.active').click();
		console.log("YAH RIGHT!")
	}, 1000); 
});