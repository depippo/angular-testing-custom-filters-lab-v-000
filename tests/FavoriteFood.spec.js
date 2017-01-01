describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should correctly filter the array by favorite food', function() {
    var list = [{
      name: "Jim",
      favoriteFood: "Tacos"
    },{
      name: "Dorothy",
      favoriteFood: "Burritos"
    },{
      name: "Hugh",
      favoriteFood: "Quesadillas"
    }];

    var results = $filter('favoriteFood')(list, 'Tacos');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Jim');
  });
	
});
