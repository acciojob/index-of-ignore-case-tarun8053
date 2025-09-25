function indexOfIgnoreCase(s1, s2) {
  // write your code here
   let str1 = s1.toLowerCase();
let arr = str1.split(" ");
let ss = s2.toLowerCase();
	let arr2 = ss.split(" ");
let len = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == arr2[0]) break;
    len += arr[i].length + i;;
}
return len;

}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");

alert(indexOfIgnoreCase(s1, s2));
