define(['define','checkout'],function(IEOut){
	return {
		run: function(){
			var ieout=new IEOut();
			test("ieout checkout test",function(){
				equal(ieout.checkout(),true);
			});
		}
	}
});
