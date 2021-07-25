export default class Haiku {
  constructor(line1,line2,line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  
  haikuLine1(){
    let line1 = "an old silent pond"; 
    //let haikuSyllable = false
    let vowel = ['a','e','i','o','u'];
    let textArrayLine1 =[];
    let result = [];
    let vowelArrayLineCount = 0;
    textArrayLine1 = line1.split(" ");
    textArrayLine1.forEach(function (i){
      for(let j=0; j<= vowel.length; j++){
        if(i.includes(vowel[j])){
          vowelArrayLineCount++
          result.push(i);
          
        }
      }
      return result;
    })
    
    return vowelArrayLineCount;
   
	}
  haikuLine3(){
    let line3 = "splash! silence again";
    let vowel = ['a','e','i','o','u'];
    let textArrayLine3 =[];
    let vowelArrayLine3Count = 0;
    textArrayLine3 = line3.split(" ");
    textArrayLine3.forEach(function (i){
      for(let j=0; j<= vowel.length; j++){
        if(i.includes(vowel[j])){
          vowelArrayLine3Count++
        }
      }
    })
    return vowelArrayLine3Count;
  }

  haikuLine2(){
    let line2 = "a frog jumps into the pond";
    let vowel = ['a','e','i','o','u'];
    let textArrayLine2 =[];
    let vowelArrayLine2Count = 0;
    textArrayLine2 = line2.split(" ");
    textArrayLine2.forEach(function (i){
      for(let j=0; j<= vowel.length; j++){
        if(i.includes(vowel[j])){
          vowelArrayLine2Count++
        }
      }
    })
    return vowelArrayLine2Count;
  }

haikuCheck(){
   let line1 = "come go for hike";
    //this.haikuLine1();
      let line1Array = line1.split(" ");
    let haikuSyllable = false
    line1Array.forEach(function(i){
      if(i.endsWith('e')){
        haikuSyllable = true;
      }else{
        haikuSyllable = false;
      }
    })
   return haikuSyllable; 
}
}

//  /\n/g

//"An old silent pond", "A frog jumps into the pond", "splash! Silence again");