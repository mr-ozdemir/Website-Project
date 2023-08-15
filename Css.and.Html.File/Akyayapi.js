
// var documentwidth = $(window).outerWidth();

// alert(documentwidth);   


	// if(!$("#headermenutopselectionarea").length){


// if(documentwidth >= 1200){

// var leftvalue = 700;

// alert("hello 1200");
// }
	
// else if(documentwidth >= 992 && documentwidth <= 1199){
	
// var leftvalue = 320;
// alert("hello 992");
	
// }


	
// else if(documentwidth >= 768 && documentwidth <= 991){
	
	// var leftvalue = 240;
	// alert("hello 768");
// }
	

// else if(documentwidth >= 576 && documentwidth <= 767){
	
	
	// var leftvalue = 160;
	// alert("hello 576");
// }

// else{
	
		// var leftvalue = 80;

	// alert("hello else");
	
// }
	// }

// $("#headermenutopselectionarea").css("left",leftvalue);



// $(window).resize (function(){



// if(documentwidth >= 1200){

// var leftvalue = 700;


// }
	
// else if(documentwidth >= 992 && documentwidth <= 1199){
	
// var leftvalue = 320;
	
// }


	
// else if(documentwidth >= 768 && documentwidth <= 991){
	
	// var leftvalue = 240;
	
// }


// else if(documentwidth >= 576 && documentwidth <= 767){
	
	
	// var leftvalue = 160;
// }

// else{
	
		// var leftvalue = 80;

	
	
// }


// $("#headermenutopselectionarea").css("left",leftvalue);

// });


	// slayt Alanı


	$(function(){
		
	var Slide  			= $(".slideArea");	
	
	var SildePicElemnt 	= Slide.find(".slideAreaPictures");	

	var SlideListLeng 	= SildePicElemnt.find(".slidePic").length;

	var SlideWidth 		= Slide.outerWidth();

	var SumWitdh        = SlideListLeng * SlideWidth; 	

	var pictOrder		= 0;	

	var movingArea		= 0;
	
	SildePicElemnt.find(".slidePic").width(SlideWidth).end().width(SumWitdh);	
		

		
	// alert(SlideListLeng);	
			
	

	$(window).resize (function(){

	Slide  			= $(".slideArea");	
	
	SildePicElemnt 	= Slide.find(".slideAreaPictures");	

	SlideListLeng 	= SildePicElemnt.find(".slidePic").length;

	SlideWidth 		= Slide.outerWidth();

	SumWitdh        = SlideListLeng * SlideWidth; 	

	SildePicElemnt.find(".slidePic").width(SlideWidth).end().width(SumWitdh).css("margin-left","-"
		+ (pictOrder * SlideWidth ) + "px");


});	
		
	$.autoChange     = function(){
		
	if(pictOrder < SlideListLeng -1 ){
		
		pictOrder++;
		movingArea = "-" + (pictOrder * SlideWidth ) + "px";
		
	}

	else{
		
		pictOrder = 0;
		movingArea = 0;
		
		
	}

	SildePicElemnt.stop().animate({
		
		marginLeft:movingArea
		
		
	},900,function(){
		

	Slide  			= $(".slideArea");	
	
	SildePicElemnt 	= Slide.find(".slideAreaPictures");	

	SlideListLeng 	= SildePicElemnt.find(".slidePic").length;

	SlideWidth 		= Slide.outerWidth();

	SumWitdh        = SlideListLeng * SlideWidth; 	

	SildePicElemnt.find(".slidePic").width(SlideWidth).end().width(SumWitdh).css("margin-left","-"
		+ (pictOrder * SlideWidth ) + "px");


});	
		
	}	


	
		
		var SlideChange = setInterval("$.autoChange()",5000);
		
		
		
});
		
		








	