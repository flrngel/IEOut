// Version Compare
function vparse(ver){
	// Version parse
	var arr=ver.split('.');
	return arr;
}

function vc(a,b){
	// Version compare (lt compare)
	// < ( less than; lt ) : 1
	// == ( equal ) : 0
	// > ( greater than; gt ) : -1

	a=vparse(a); b=vparse(b);
	for(var i=0;i<Math.min(a.length,b.length);i++){
		if( a[i].length != b[i].length ){
			if( parseInt(a[i]).toString() == a[i] && parseInt(b[i]).toString() == b[i] ){
				// pure Integer
				return (a[i].length<b[i].length)?1:-1;
			}else{
				return (a[i]<b[i])?1:-1;
			}
		}
		if( a[i] < b[i] ) return 1;
		else if( a[i] > b[i] ) return -1;
	}
	return 0;
}
