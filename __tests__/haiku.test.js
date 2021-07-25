import  Haiku  from "./../src/haiku.js";

describe('Haiku', () => {
    test('should contain 3 lines',() => {
     const haiku = new Haiku("line 1", "line 2", "line 3");
     expect(haiku.line1).toEqual("line 1");
     expect(haiku.line2).toEqual("line 2");
     expect(haiku.line3).toEqual("line 3");
     
		  //haiku.test(/\n/g);
    });
   
		test('should contain at least one vowel', () => {
      const haiku = new Haiku(5,7,7)
			expect(haiku.haikuLine1()).toEqual(5);
      expect(haiku.haikuLine2()).toEqual(7);
      expect(haiku.haikuLine3()).toEqual(5);
		});
    
    test('should word end with e, return true',()=>{
      const haiku = new Haiku();
			expect(haiku.haikuCheck()).toEqual(true);
    })
}); 

//describe ('SyllableChecker', () => {
	//test('should contain 1 syllable', () => {

	//})
// })

