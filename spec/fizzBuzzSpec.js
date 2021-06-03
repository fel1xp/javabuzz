describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });
  
  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(2)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(3)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByThreeAndFive(10)).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

});

