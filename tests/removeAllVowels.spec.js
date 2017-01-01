describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all the vowels from a given string', function() {
    var string = "pack my box with five dozen liquor jugs";

    var results = $filter('removeAllVowels')(string);

    expect(results).toBe('pck my bx wth fv dzn lqr jgs');
  })

});
