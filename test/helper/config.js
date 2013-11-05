// requireJS
require.config({
	baseUrl: "/src",
	paths: {
		'QUnit':'/bower_components/qunit/qunit/qunit',
		'jQuery':'/bower_components/jquery/jquery.min'
	},
	shim: {
		'QUnit': {
			exports: 'QUnit',
			init: function(){
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		},
		'jQuery': {
			exports: 'jQuery'
		}
	}
});

require(['jQuery','QUnit'],function($,Q){
	$("#testBtn").click(function(){
		var testPath="../test/"+$("#text").val();
		require([testPath],function(test){
			test.run();
			Q.load();
			Q.start();
		});
	});
});
