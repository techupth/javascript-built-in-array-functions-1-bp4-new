let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map(getLength)
}
function getLength(words){
  return words.length;
}
const result = getWordLengths(words);

console.log(result);