// IEOut.checkout.js
define(['detect'],function(IEOut){
	IEOut.fn.checkout=function(){
		this.detect();
		if( this.browser.name == "MSIE" ){
			alert("this is IE");
			return false;
		}else{
			alert(this.browser.name);
			return true;
		}
	};
	return IEOut;
});
