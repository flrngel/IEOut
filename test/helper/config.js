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
			exports: '$'
		}
	}
});

require(['jQuery','QUnit'],function($,Q){
	$(function(){
		$.getJSON("./pages.json",function(data){
			function mt(obj){
				var $this=$("<div></div>");
				if( typeof obj == "object" ){
					if( $.isArray(obj) ){
						for( key in obj ){
							var val=obj[key];
							var el="<li>"+val+"</li>";
							$this.append(el);
						}
					}else{
						for( key in obj ){
							var val=obj[key];
							if( val == null ){
								var el="<li>"+key+"</li>";
								$this.append(el);
								continue;
							}
							var $el=$("<ul></ul>");
							$this.append("<h5>"+key+"/</h5>");
							$el.append(mt(val));
							$this.append($el);
						}
					}
				}else{
					var el="<li>"+obj+"</li>";
					$this.append(el);
				}
				return $this;
			}
			$("#nav").append(mt(data));
		});
	});
	$("#testBtn").click(function(){
		var testPath="../test/"+$("#text").val();
		require([testPath],function(test){
			test.run();
			Q.load();
			Q.start();
		});
	});
});
