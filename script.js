function getFormvalue() {
    //Write your code here
	let list= document.querySelectorAll("input");
	console.log(list);
	let fname=list[0].value;
	let lname=list[1].value;
	let result= fname+" "+lname;
	// console.log(fname);
	// console.log(lname);
	// console.log(result);
	alert(result);

}
