// complete the given function

function palindrome(str){
let b ="",j=0;
	
	for(let i=str.length-1 ;i>=0;i--)
		{
			b[j++]=str[i].toLowerCase();
		}
	if(b===str.toLowerCase())
	{
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
