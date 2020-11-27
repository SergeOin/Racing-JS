function countGs(str) {
  let count=0,len=str.length;
  for(let i=0;i<len;i++) {
      if(/[A-Z]/.test(str.charAt(i))) count++;
    }
  return count;
}
console.log(countGs("abcgGggGeaGfdsGG"));