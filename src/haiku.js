export default class Haiku {
  constructor(line){
    this.line = line;
  }

  haikuCheck(){
    const totalVowelCount = this.vowelCount();
    
    const totalSilentECount = this.silentEcheck();
    const twoVowelCount = this.twoVowelCheck();
    let TotalSyllabeCount = totalVowelCount - totalSilentECount - twoVowelCount;
    console.log("total syllable",TotalSyllabeCount)
    //console.log(twoVowelCount);
    return TotalSyllabeCount;
  }  
    
  vowelCount(){
    let vowel = ['a','e','i','o','u','y'];
    let textArrayLine1 =[];
      let countVowelsHiaku = 0;
      
    textArrayLine1 = this.line.toLowerCase().split("");
  
    textArrayLine1.forEach(function (i){
      vowel.forEach(function(j){
      
        if(i.includes(j)){
          countVowelsHiaku++;   
        }
      });  
        
    });
   //console.log("countVowelsHiaku",countVowelsHiaku);
   return countVowelsHiaku; 
    
  }

  silentEcheck(){
    let syllCount = 0;
    let syllArray= this.line.split(" ");
      syllArray.forEach(function(i){
            if(i[i.length-1] === 'e'){
                syllCount++;
          }
      });
    return syllCount;
    }

  twoVowelCheck(){
    
    let diphthongCount =0;
    let textArrayLine=[];
    textArrayLine = this.line.split(" ");
    let newString = textArrayLine.toString();
    diphthongCount = newString.match(/[aeiouy]{2}/ig).length;
    //console.log(diphthongCount);
    return diphthongCount;
        }
      }