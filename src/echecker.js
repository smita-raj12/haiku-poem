let line1 = "hello there array persone"
const eChecker = (line1) => {
	let wordArray = [];
	let eCount = 0;
	wordArray = line1.split(" ");
	wordArray.forEach(function (i) {
	if(i.endsWith('e')){
		haikuSyllable = true;
		eCount ++;
	}else{
		sliceArray.push(i)
		console.log(sliceArray)
		sliceArrayCount++
		haikuSyllable = false;
   }
	})
}

let line1 = "hello there array person"
const eChecker = (text) => {
	let wordArray = [];
	let eCount = 0;
  let textArray= [];
	wordArray = text.split(" ");
	wordArray.forEach(function (word) {
	textArray = word.split('');
  if(word[word.length-1] = ('e')){
		eCount ++;
    //wordArray.push(word);
	}else{
		//wordArray.push(word)
   }
	}
)}

console.log(eChecker(line1));
console.log(eCount);

word.indexposition.length(word -1);