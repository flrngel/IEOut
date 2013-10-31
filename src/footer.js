		return new IEOut;
	}
	if( typeof define === "function" && define.amd ){
		define("IEOut",[],IEOutDefinition);
	}else{
		window.IEOut=IEOutDefinition();
	}
// IEOut.footer.js
})(this);
