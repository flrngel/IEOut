// IEOut.checkout.js
define(['define','detect'],function(IEOut){
	var checkout=IEOut.fn.checkout=function(){
		this.detect();
		if( this.browser.name == "MSIE" ){
			alert("this is IE");
			return false;
		}else{
			alert(this.browser.name);
			return true;
		}
	};
	return checkout;
});
