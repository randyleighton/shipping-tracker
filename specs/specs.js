describe('triangle', function() {
  describe('triangleCheck', function() {
    it('returns equilateral if all the sides are equal', function() {
      triangle.sideOne = 4;
      triangle.sideTwo = 4;
      triangle.sideThree = 4;
      triangle.triangleCheck().should.equal('equilateral');
    });

    it('returns isosceles if two sides are equal', function() {
      triangle.sideOne = 4;
      triangle.sideTwo = 4;
      triangle.sideThree = 6;
      triangle.triangleCheck().should.equal('isosceles');
    });

    it('returns scalene if all sides are different', function() {
      triangle.sideOne = 4;
      triangle.sideTwo = 5;
      triangle.sideThree = 6;
      triangle.triangleCheck().should.equal('scalene');
    });

    it('returns "not a triangle" if the sum of the two short sides are equal to or shorter than the long side', function() {
      triangle.sideOne = 4;
      triangle.sideTwo = 4;
      triangle.sideThree = 10;
      triangle.triangleCheck().should.equal('not a triangle');
    });
  });
});
