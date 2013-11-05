define(['util/version'],function(version){
	return {
		run: function(){
			test("version compare test",function(){
				equal(version.compare("1.0.0","2.0.0"),1);
				equal(version.compare("1.0.0","1.0.1"),1);
				equal(version.compare("1.0.0","1.0.23"),1);
				equal(version.compare("1.0.0","1.2.0"),1);
				equal(version.compare("1.0.1","1.0.1"),0);
				equal(version.compare("1.0.2","1.0.1"),-1);
				equal(version.compare("1.0.2","1.0.1"),-1);
				equal(version.compare("23.1.1","1.0.1"),-1);
				equal(version.compare("1.0.131","1.0.23"),-1);

				equal(version.compare("1.0.0-rc1","1.0.0-rc23"),1);
				equal(version.compare("1.0.0-rc133","1.0.0-rc23"),-1);
				equal(version.compare("1.0.0-alpha","1.0.0-beta"),-1);
			});
		}
	}
});
