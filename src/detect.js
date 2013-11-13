// IEOut.detect.js
// Code from jQuery.browser
define(['define'],function(IEOut){
	IEOut.fn.detect=function(){
		var ua=window.navigator.userAgent.toLowerCase();
		var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			[];

		this.browser.name=match[1] || "";
		this.browser.version=match[2] || "0";

		if( this.browser.name){
			this.browser[this.browser.name]=true;
		}

		if(this.browser.chrome){
			this.browser.webkit=true;
		}else if(browser.webkit){
			this.browser.safari=true;
		}

		return this.browser;
	};
	return IEOut;
});
