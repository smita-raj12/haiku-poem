import  Haiku  from "./../src/haiku.js";

describe('Haiku', () => {
    test('should contain 3 lines',() => {
     const haiku = new Haiku("an old silent pond");
     expect(haiku.line).toEqual("an old silent pond");
    });
   
		test('should contain at least one vowel', () => {
      const haiku = new Haiku("an old silent pond")
			expect(haiku.vowelCount()).toEqual(5);
     
		});
    
    test('should word end with e, return true',()=>{
      const haiku = new Haiku("come go for hike");
			expect(haiku.silentEcheck()).toEqual(2);
    })

    test('should return a syllable',()=>{
      const haiku = new Haiku("come go for hike");
			expect(haiku.haikuCheck()).toEqual(4);
    })
}); 



