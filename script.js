function indexOfIgnoreCase(str, subStr) {
  if (subStr === "") return 0;  
  if (str === "") return -1

  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  return lowerStr.indexOf(lowerSubStr);
	
}

//Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");

alert(indexOfIgnoreCase(s1, s2));
