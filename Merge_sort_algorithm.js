var arr=[199,4,732,5,0,6,8,1,13,12,2,3,139];

function A(arr){
	var len=arr.length;
	for(var i=1;i<len;i=i*2){
		var su=parseInt(len/(2*i));
		for(var k=0;k<su;k++){
			var sd=k*2*i;
			sor(arr,sd,sd+i-1,sd+i,sd+i+i-1);	
		}
		var s=len%(2*i);
		if(s!=0 && s<=len/2){
			sor(arr,len-s-i-i,len-s-1,len-s,len-1);
		}		 	
	}

}



function sor(arr,first1,last1,first2,last2){
	var arr1=[];
	var p=0;
	var t1=first1;
	var t2=first2;
	var len=(last1-first1+1) + (last2-first2+1);
	while(arr1.length<len){
		if(t1>last1){
			for(var i=t2;i<=last2;i++){
				arr1[p++]=arr[i];
			}
			break;
		}else if(t2>last2){
			for(var j=t1;j<=last1;j++){
				arr1[p++]=arr[j];
			}
			break;
		}
		if(arr[t1]<=arr[t2]){
			arr1[p++]=arr[t1];
			t1++;
		}else if(arr[t1]>arr[t2]){
			arr1[p++]=arr[t2];
			t2++;
		}

	}
	for(var i=0;i<arr1.length;i++){
		arr[first1+i]=arr1[i];
	}

}

A(arr);
console.log(arr);